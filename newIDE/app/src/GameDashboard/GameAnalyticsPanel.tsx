import { Trans, t } from '@lingui/macro';

import { I18n } from '@lingui/react';
import * as React from 'react';
import { formatISO, subDays } from 'date-fns';

import { Column, Line } from '../UI/Grid';
import { Game } from '../Utils/GDevelopServices/Game';

import { ColumnStackLayout } from '../UI/Layout';

import Text from '../UI/Text';
import {
  GameMetrics,
  getGameMetricsFrom,
} from '../Utils/GDevelopServices/Analytics';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

import PlaceholderError from '../UI/PlaceholderError';

import SelectField from '../UI/SelectField';

import SelectOption from '../UI/SelectOption';

import AlertMessage from '../UI/AlertMessage';

import { ResponsiveLineStackLayout } from '../UI/Layout';
import {
  ResponsiveContainer,
  LineChart,
  Line as RechartsLine,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';

import PlaceholderLoader from '../UI/PlaceholderLoader';
import {
  buildChartData,
  daysShownForYear,
  durationValues,
} from './GameAnalyticsEvaluator';

import Paper from '../UI/Paper';

const chartMargins = {
  top: 5,
  bottom: 5,
  right: 25,
  left: 0,
} as const;
// There is a known bug with recharts that causes the chart to not render if the width is 100%
// in a flexbox component. check https://github.com/recharts/recharts/issues/172
const chartWidth = '99%';
const chartHeight = 300;

const minutesFormatter = (value: any) => {
  return value.toFixed(2);
};

const percentFormatter = (value: any) => {
  return value.toFixed(2);
};

type Props = {
  game: Game;
};

const CustomTooltip = ({
  payload,
  label,
  customStyle,
}: {
  payload: Array<any> | null | undefined;
  label: string;
  customStyle: any;
}) =>
  payload ? (
    <Paper style={customStyle} background="light">
      <ColumnStackLayout>
        <Text size="sub-title" noMargin>
          {label}
        </Text>
        {payload.length > 0 &&
          payload.map(
            (
              {
                name,
                unit,
                value,
              }: {
                name: string;
                unit: string | null | undefined;
                value: number;
              },
              index
            ) => (
              <Text noMargin key={index}>{`${name}: ${
                Number.isInteger(value) ? value.toString() : value.toFixed(2)
              }${unit ? ` ${unit}` : ''}`}</Text>
            )
          )}
      </ColumnStackLayout>
    </Paper>
  ) : null;

export const GameAnalyticsPanel = ({ game }: Props) => {
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );

  const [gameRollingMetrics, setGameMetrics] = React.useState<
    GameMetrics[] | null | undefined
  >(null);
  const { yearChartData, monthChartData } = React.useMemo(
    () => buildChartData(gameRollingMetrics),
    [gameRollingMetrics]
  );
  const [dataPeriod, setDataPeriod] = React.useState('month');
  const chartData = dataPeriod === 'year' ? yearChartData : monthChartData;

  const [gameRollingMetricsError, setGameMetricsError] = React.useState<
    Error | null | undefined
  >(null);
  const [isGameMetricsLoading, setIsGameMetricsLoading] = React.useState(false);

  // TODO In some timezones, it might ask one less or extra day.
  const lastYearIsoDate = formatISO(subDays(new Date(), daysShownForYear), {
    representation: 'date',
  });
  const loadGameMetrics = React.useCallback(async () => {
    if (!profile) return;

    const { id } = profile;

    setIsGameMetricsLoading(true);
    setGameMetricsError(null);
    try {
      const gameRollingMetrics = await getGameMetricsFrom(
        getAuthorizationHeader,
        id,
        game.id,
        lastYearIsoDate
      );
      setGameMetrics(gameRollingMetrics);
    } catch (err: any) {
      console.error(`Unable to load game rolling metrics:`, err);
      setGameMetricsError(err);
    }
    setIsGameMetricsLoading(false);
  }, [getAuthorizationHeader, profile, game, lastYearIsoDate]);

  React.useEffect(() => {
    loadGameMetrics();
  }, [loadGameMetrics]);

  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  const styles = {
    tableRowStatColumn: {
      width: 100,
    },
    tooltipContent: {
      color: gdevelopTheme.chart.textColor,
      padding: 10,
    },
    tickLabel: {
      fontFamily: gdevelopTheme.chart.fontFamily,
    },
    chartLineDot: {
      fill: gdevelopTheme.chart.dataColor1,
      strokeWidth: 0,
    },
  } as const;

  return (
    <I18n>
      {({ i18n }) =>
        gameRollingMetricsError ? (
          <PlaceholderError
            onRetry={() => {
              loadGameMetrics();
            }}
          >
            <Trans>There was an issue getting the game analytics.</Trans>{' '}
            <Trans>Verify your internet connection or try again later.</Trans>
          </PlaceholderError>
        ) : (
          <ColumnStackLayout expand>
            {isGameMetricsLoading && <PlaceholderLoader />}
            <>
              <Line noMargin justifyContent="flex-end">
                <SelectField
                  value={dataPeriod}
                  onChange={(e, i, period: string) => {
                    setDataPeriod(period);
                  }}
                  disableUnderline
                >
                  <SelectOption key="month" value="month" label={t`Month`} />
                  <SelectOption key="year" value="year" label={t`Year`} />
                </SelectField>
              </Line>
              {!isGameMetricsLoading &&
              (!gameRollingMetrics || gameRollingMetrics.length === 0) ? (
                <AlertMessage kind="warning">
                  <Trans>
                    There were no players or stored metrics for this period. Be
                    sure to publish your game and get players to try it to see
                    the collected anonymous analytics.
                  </Trans>
                </AlertMessage>
              ) : null}
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
                <Column noMargin alignItems="center" expand>
                  <Text size="block-title" align="center">
                    <Trans>{chartData.overview.playersCount} sessions</Trans>
                  </Text>
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
                    <AreaChart data={chartData.overTime} margin={chartMargins}>
                      <Area
                        name={i18n._(t`Viewers`)}
                        type="monotone"
                        dataKey="viewersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.125}
                        yAxisId={0}
                      />
                      <Area
                        name={i18n._(t`Players`)}
                        type="monotone"
                        dataKey="playersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.25}
                        yAxisId={0}
                      />
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <YAxis
                        dataKey="viewersCount"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <Tooltip
                        content={(props) =>
                          // @ts-expect-error - TS2345 - Argument of type '{ customStyle: { readonly color: any; readonly padding: 10; }; separator?: string | undefined; wrapperClassName?: string | undefined; labelClassName?: string | undefined; formatter?: Formatter<...> | undefined; ... 27 more ...; wrapperStyle?: React.CSSProperties | undefined; }' is not assignable to parameter of type '{ payload: any[] | null | undefined; label: string; customStyle: any; }'.
                          CustomTooltip({
                            ...props,
                            customStyle: styles.tooltipContent,
                          })
                        }
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Column>
                <Column noMargin alignItems="center" expand>
                  <Text size="block-title" align="center">
                    <Trans>
                      {Math.round(chartData.overview.bounceRatePercent)}% bounce
                      rate
                    </Trans>
                  </Text>
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
                    <LineChart data={chartData.overTime} margin={chartMargins}>
                      <RechartsLine
                        name={i18n._(t`Bounce rate`)}
                        unit="%"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={minutesFormatter}
                        type="monotone"
                        dataKey="bounceRatePercent"
                        stroke={gdevelopTheme.chart.dataColor1}
                        dot={styles.chartLineDot}
                        yAxisId={0}
                      />
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <YAxis
                        dataKey="bounceRatePercent"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <Tooltip
                        content={(props) =>
                          // @ts-expect-error - TS2345 - Argument of type '{ customStyle: { readonly color: any; readonly padding: 10; }; separator?: string | undefined; wrapperClassName?: string | undefined; labelClassName?: string | undefined; formatter?: Formatter<...> | undefined; ... 27 more ...; wrapperStyle?: React.CSSProperties | undefined; }' is not assignable to parameter of type '{ payload: any[] | null | undefined; label: string; customStyle: any; }'.
                          CustomTooltip({
                            ...props,
                            customStyle: styles.tooltipContent,
                          })
                        }
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Column>
              </ResponsiveLineStackLayout>
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
                <Column expand noMargin alignItems="center">
                  <Text size="block-title" align="center">
                    <Trans>
                      {Math.round(
                        chartData.overview.meanPlayedDurationInMinutes
                      )}{' '}
                      minutes per player
                    </Trans>
                  </Text>
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
                    <LineChart data={chartData.overTime} margin={chartMargins}>
                      <RechartsLine
                        name={i18n._(t`Mean played time`)}
                        unit={' ' + i18n._(t`minutes`)}
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={minutesFormatter}
                        type="monotone"
                        dataKey="meanPlayedDurationInMinutes"
                        stroke={gdevelopTheme.chart.dataColor1}
                        dot={styles.chartLineDot}
                        yAxisId={0}
                      />
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <YAxis
                        dataKey="meanPlayedDurationInMinutes"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <Tooltip
                        content={(props) =>
                          // @ts-expect-error - TS2345 - Argument of type '{ customStyle: { readonly color: any; readonly padding: 10; }; separator?: string | undefined; wrapperClassName?: string | undefined; labelClassName?: string | undefined; formatter?: Formatter<...> | undefined; ... 27 more ...; wrapperStyle?: React.CSSProperties | undefined; }' is not assignable to parameter of type '{ payload: any[] | null | undefined; label: string; customStyle: any; }'.
                          CustomTooltip({
                            ...props,
                            customStyle: styles.tooltipContent,
                          })
                        }
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Column>
                <Column expand noMargin alignItems="center">
                  <Text size="block-title" align="center">
                    <Trans>
                      {
                        chartData.overview.greaterDurationPlayerSurface
                          .playersCount
                      }{' '}
                      players with more than{' '}
                      {
                        chartData.overview.greaterDurationPlayerSurface
                          .durationInMinutes
                      }{' '}
                      minutes
                    </Trans>
                  </Text>
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
                    <AreaChart
                      data={chartData.overPlayedDuration}
                      margin={chartMargins}
                    >
                      <Area
                        name={i18n._(t`Players`)}
                        type="monotone"
                        dataKey="playersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.25}
                        yAxisId={0}
                      />
                      <XAxis
                        name={i18n._(t`Played time`)}
                        dataKey="duration"
                        type="number"
                        domain={[0, durationValues[durationValues.length - 1]]}
                        // @ts-expect-error - TS4104 - The type 'readonly [1, 3, 5, 10, 15]' is 'readonly' and cannot be assigned to the mutable type '(string | number)[]'.
                        ticks={durationValues}
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <YAxis
                        dataKey="playersCount"
                        stroke="#f5f5f5"
                        style={styles.tickLabel}
                        domain={[0, 'dataMax']}
                      />
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
                      <Tooltip
                        content={(props) =>
                          // @ts-expect-error - TS2345 - Argument of type '{ customStyle: { readonly color: any; readonly padding: 10; }; separator?: string | undefined; wrapperClassName?: string | undefined; labelClassName?: string | undefined; formatter?: Formatter<...> | undefined; ... 27 more ...; wrapperStyle?: React.CSSProperties | undefined; }' is not assignable to parameter of type '{ payload: any[] | null | undefined; label: string; customStyle: any; }'.
                          CustomTooltip({
                            ...props,
                            customStyle: styles.tooltipContent,
                          })
                        }
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Column>
              </ResponsiveLineStackLayout>
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
                <Column expand noMargin alignItems="center">
                  <Text size="block-title" align="center">
                    <Trans>
                      {Math.round(
                        chartData.overview.nearestToMedianDuration
                          .playersPercent
                      )}
                      % of players with more than{' '}
                      {
                        chartData.overview.nearestToMedianDuration
                          .durationInMinutes
                      }{' '}
                      minutes
                    </Trans>
                  </Text>
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
                    <AreaChart data={chartData.overTime} margin={chartMargins}>
                      <Area
                        name={i18n._(t`Players`)}
                        type="monotone"
                        dataKey="over60sPlayersPercent"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={percentFormatter}
                        unit={' %'}
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.15}
                        yAxisId={0}
                      />
                      <Area
                        name={i18n._(t`Played > 3 minutes`)}
                        type="monotone"
                        dataKey="over180sPlayersPercent"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={percentFormatter}
                        unit={' %'}
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.15}
                        yAxisId={0}
                      />
                      <Area
                        name={i18n._(t`Played > 5 minutes`)}
                        type="monotone"
                        dataKey="over300sPlayersPercent"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={percentFormatter}
                        unit={' %'}
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.15}
                        yAxisId={0}
                      />
                      <Area
                        name={i18n._(t`Played > 10 minutes`)}
                        type="monotone"
                        dataKey="over600sPlayersPercent"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={percentFormatter}
                        unit={' %'}
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.15}
                        yAxisId={0}
                      />
                      <Area
                        name={i18n._(t`Played > 15 minutes`)}
                        type="monotone"
                        dataKey="over900sPlayersPercent"
                        // @ts-expect-error - TS2769 - No overload matches this call.
                        formatter={percentFormatter}
                        unit={' %'}
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.15}
                        yAxisId={0}
                      />
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
                      <YAxis
                        dataKey="over60sPlayersPercent"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                        unit={' %'}
                      />
                      <Tooltip
                        content={(props) =>
                          // @ts-expect-error - TS2345 - Argument of type '{ customStyle: { readonly color: any; readonly padding: 10; }; separator?: string | undefined; wrapperClassName?: string | undefined; labelClassName?: string | undefined; formatter?: Formatter<...> | undefined; ... 27 more ...; wrapperStyle?: React.CSSProperties | undefined; }' is not assignable to parameter of type '{ payload: any[] | null | undefined; label: string; customStyle: any; }'.
                          CustomTooltip({
                            ...props,
                            customStyle: styles.tooltipContent,
                          })
                        }
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Column>
              </ResponsiveLineStackLayout>
            </>
          </ColumnStackLayout>
        )
      }
    </I18n>
  );
};
