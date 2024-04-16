// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans, t} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';

// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../../UI/TextEllipsis';
import {
  LeaderboardEntry,
  LeaderboardCustomizationSettings,
} from '../../Utils/GDevelopServices/Play';
import { formatScore } from '../../Leaderboard/LeaderboardScoreFormatter';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import Trash from '../../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowLeft'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowLeft.js' implicitly has an 'any' type.
import ChevronArrowLeft from '../../UI/CustomSvgIcons/ChevronArrowLeft';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../UI/CustomSvgIcons/ChevronArrowRight';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/SkipBack'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/SkipBack.js' implicitly has an 'any' type.
import SkipBack from '../../UI/CustomSvgIcons/SkipBack';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Error'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Error.js' implicitly has an 'any' type.
import Error from '../../UI/CustomSvgIcons/Error';

type Props = {
  entries: Array<LeaderboardEntry> | null | undefined,
  customizationSettings: LeaderboardCustomizationSettings | null | undefined,
  onDeleteEntry: (entry: LeaderboardEntry) => Promise<void>,
  isLoading: boolean,
  erroredEntry?: {
    entryId: string,
    message: React.ReactNode
  },
  navigation: {
    goToFirstPage: () => Promise<void> | null | undefined,
    goToPreviousPage: () => Promise<void> | null | undefined,
    goToNextPage: () => Promise<void> | null | undefined
  }
};

const LeaderboardEntriesTable = ({
  entries,
  customizationSettings,
  onDeleteEntry,
  isLoading,
  erroredEntry,
  navigation,
}: Props) => {
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  if (!entries) return <PlaceholderLoader />;

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Column expand justifyContent="space-between">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Table size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableHead>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <TableRow>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableCell style={{ width: '20%' }} align="center">
                  {customizationSettings ? (
                    customizationSettings.scoreTitle
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Trans>Score</Trans>
                  )}
                </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableCell style={{ width: '50%' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Player</Trans>
                </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableCell style={{ width: '15%' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Date</Trans>
                </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <TableCell style={{ width: '15%' }}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Action</Trans>
                </TableCell>
              </TableRow>
            </TableHead>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <TableBody>
              {entries.map(entry => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <TableRow key={entry.id}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableCell align="center">
                    {customizationSettings
                      ? formatScore(
                          entry.score,
                          customizationSettings.scoreFormatting
                        )
                      : entry.score}
                  </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableCell
                    style={{
                      ...textEllipsisStyle,
                      maxWidth: 0, // to trigger the text ellipsis when overflowing
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Tooltip title={entry.playerName}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <span>{entry.playerName}</span>
                    </Tooltip>
                  </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Tooltip
                      title={i18n.date(entry.createdAt, {
                        dateStyle: 'short',
                        timeStyle: 'short',
                      })}
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <span>{i18n.date(entry.createdAt)}</span>
                    </Tooltip>
                  </TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <TableCell>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <IconButton
                        size="small"
                        onClick={() => onDeleteEntry(entry)}
                        disabled={isLoading}
                        tooltip={t`Remove entry`}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trash size={20} />
                      </IconButton>
                      {erroredEntry && erroredEntry.entryId === entry.id ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <IconButton
                          size="small"
                          onClick={() => {}} // wrap in icon button to match above icon padding
                          tooltip={erroredEntry.message}
                        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Error size={20} color="error" />
                        </IconButton>
                      ) : null}
                    </Line>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {entries.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Column expand justifyContent="center" alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text size="body2">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>No entries</Trans>
              </Text>
            </Column>
          ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Line noMargin justifyContent="flex-end">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                tooltip={t`Go to first page`}
                disabled={!navigation.goToFirstPage}
                onClick={() => {
                  if (navigation.goToFirstPage) navigation.goToFirstPage();
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <SkipBack />
              </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                tooltip={t`Previous page`}
                disabled={!navigation.goToPreviousPage}
                onClick={() => {
                  if (navigation.goToPreviousPage)
                    navigation.goToPreviousPage();
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ChevronArrowLeft />
              </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <IconButton
                tooltip={t`Next page`}
                disabled={!navigation.goToNextPage}
                onClick={() => {
                  if (navigation.goToNextPage) navigation.goToNextPage();
                }}
              >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <ChevronArrowRight />
              </IconButton>
            </Line>
          )}
        </Column>
      )}
    </I18n>
  );
};

export default LeaderboardEntriesTable;
