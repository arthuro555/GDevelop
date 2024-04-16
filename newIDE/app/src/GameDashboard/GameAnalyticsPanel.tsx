// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
import { formatISO, subDays } from 'date-fns';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import { Game } from '../Utils/GDevelopServices/Game';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import {
  GameMetrics,
  getGameMetricsFrom,
} from '../Utils/GDevelopServices/Analytics';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
// @ts-expect-error - TS6142 - Module '../UI/PlaceholderError' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderError.tsx', but '--jsx' is not set.
import PlaceholderError from '../UI/PlaceholderError';
// @ts-expect-error - TS6142 - Module '../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField from '../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../UI/AlertMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/AlertMessage.tsx', but '--jsx' is not set.
import AlertMessage from '../UI/AlertMessage';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
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
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
import {
  buildChartData,
  daysShownForYear,
  durationValues,
} from './GameAnalyticsEvaluator';
// @ts-expect-error - TS6142 - Module '../UI/Paper' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Paper.tsx', but '--jsx' is not set.
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

const minutesFormatter = value: any => {
  return value.toFixed(2);
};

const percentFormatter = value: any => {
  return value.toFixed(2);
};

type Props = {
  game: Game
};

const CustomTooltip = ({
  payload,
  label,
  customStyle,
}: {
  payload: Array<any> | null | undefined,
  label: string,
  customStyle: any
}) =>
  payload ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Paper style={customStyle} background="light">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
                name: string,
                unit: string | null | undefined,
                value: number
              },
              index
            ) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Text noMargin key={index}>{`${name}: ${
                Number.isInteger(value) ? value.toString() : value.toFixed(2)
              }${unit ? ` ${unit}` : ''}`}</Text>
            )
          )}
      </ColumnStackLayout>
    </Paper>
  ) : null;

export const GameAnalyticsPanel = ({
  game,
}: Props) => {
  const { getAuthorizationHeader, profile } = React.useContext(
    AuthenticatedUserContext
  );

  const [gameRollingMetrics, setGameMetrics] = React.useState<GameMetrics[] | null | undefined>(null);
  const { yearChartData, monthChartData } = React.useMemo(
    () => buildChartData(gameRollingMetrics),
    [gameRollingMetrics]
  );
  const [dataPeriod, setDataPeriod] = React.useState('month');
  const chartData = dataPeriod === 'year' ? yearChartData : monthChartData;

  const [gameRollingMetricsError, setGameMetricsError] = React.useState<Error | null | undefined>(null);
  const [isGameMetricsLoading, setIsGameMetricsLoading] = React.useState(false);

  // TODO In some timezones, it might ask one less or extra day.
  const lastYearIsoDate = formatISO(subDays(new Date(), daysShownForYear), {
    representation: 'date',
  });
  const loadGameMetrics = React.useCallback(
    async () => {
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
    },
    [getAuthorizationHeader, profile, game, lastYearIsoDate]
  );

  React.useEffect(
    () => {
      loadGameMetrics();
    },
    [loadGameMetrics]
  );

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
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) =>
        gameRollingMetricsError ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <PlaceholderError
            onRetry={() => {
              loadGameMetrics();
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>There was an issue getting the game analytics.</Trans>{' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Verify your internet connection or try again later.</Trans>
          </PlaceholderError>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ColumnStackLayout expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            {isGameMetricsLoading && <PlaceholderLoader />}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SelectField
                  value={dataPeriod}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'i' implicitly has an 'any' type.
                  onChange={(e, i, period: string) => {
                    setDataPeriod(period);
                  }}
                  disableUnderline
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption key="month" value="month" label={t`Month`} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <SelectOption key="year" value="year" label={t`Year`} />
                </SelectField>
              </Line>
              {!isGameMetricsLoading &&
              (!gameRollingMetrics || gameRollingMetrics.length === 0) ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <AlertMessage kind="warning">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>
                    There were no players or stored metrics for this period. Be
                    sure to publish your game and get players to try it to see
                    the collected anonymous analytics.
                  </Trans>
                </AlertMessage>
              ) : null}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>{chartData.overview.playersCount} sessions</Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <AreaChart data={chartData.overTime} margin={chartMargins}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Area
                        name={i18n._(t`Viewers`)}
                        type="monotone"
                        dataKey="viewersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.125}
                        yAxisId={0}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Area
                        name={i18n._(t`Players`)}
                        type="monotone"
                        dataKey="playersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.25}
                        yAxisId={0}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <YAxis
                        dataKey="viewersCount"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Tooltip
                        content={props =>
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin alignItems="center" expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      {Math.round(chartData.overview.bounceRatePercent)}% bounce
                      rate
                    </Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <LineChart data={chartData.overTime} margin={chartMargins}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <YAxis
                        dataKey="bounceRatePercent"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Tooltip
                        content={props =>
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Trans>
                      {Math.round(
                        chartData.overview.meanPlayedDurationInMinutes
                      )}{' '}
                      minutes per player
                    </Trans>
                  </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <LineChart data={chartData.overTime} margin={chartMargins}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <YAxis
                        dataKey="meanPlayedDurationInMinutes"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Tooltip
                        content={props =>
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <AreaChart
                      data={chartData.overPlayedDuration}
                      margin={chartMargins}
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Area
                        name={i18n._(t`Players`)}
                        type="monotone"
                        dataKey="playersCount"
                        stroke={gdevelopTheme.chart.dataColor1}
                        fill={gdevelopTheme.chart.dataColor1}
                        fillOpacity={0.25}
                        yAxisId={0}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <YAxis
                        dataKey="playersCount"
                        stroke="#f5f5f5"
                        style={styles.tickLabel}
                        domain={[0, 'dataMax']}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Tooltip
                        content={props =>
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResponsiveLineStackLayout
                expand
                noMargin
                justifyContent="center"
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column expand noMargin alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Text size="block-title" align="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <ResponsiveContainer width={chartWidth} height={chartHeight}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <AreaChart data={chartData.overTime} margin={chartMargins}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CartesianGrid
                        stroke={gdevelopTheme.chart.gridColor}
                        strokeDasharray="3 3"
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <XAxis
                        dataKey="date"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <YAxis
                        dataKey="over60sPlayersPercent"
                        stroke={gdevelopTheme.chart.textColor}
                        style={styles.tickLabel}
                        unit={' %'}
                      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Tooltip
                        content={props =>
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
