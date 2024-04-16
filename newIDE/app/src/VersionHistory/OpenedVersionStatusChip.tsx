import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
import GDevelopThemeContext from '../UI/Theme/GDevelopThemeContext';
import ButtonBase from '@material-ui/core/ButtonBase';
import { createStyles, makeStyles } from '@material-ui/core/styles';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Cross'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Cross.js' implicitly has an 'any' type.
import Cross from '../UI/CustomSvgIcons/Cross';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Spacer } from '../UI/Grid';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/TextEllipsis'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextEllipsis.js' implicitly has an 'any' type.
import { textEllipsisStyle } from '../UI/TextEllipsis';
// @ts-expect-error - TS6142 - Module '.' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/index.tsx', but '--jsx' is not set.
import { OpenedVersionStatus } from '.';
// @ts-expect-error - TS7016 - Could not find a declaration file for module './Utils'. '/home/arthuro555/code/GDevelop/newIDE/app/src/VersionHistory/Utils.js' implicitly has an 'any' type.
import { getStatusColor } from './Utils';
import { shortenString } from '../Utils/StringHelpers';

const styles = {
  chip: {
    display: 'flex',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
    color: '#111111',
    ...textEllipsisStyle,
  },
} as const;

const useStylesCloseIconButton = makeStyles(theme =>
  createStyles({
    root: {
      borderRadius: 3,
      '&:hover': {
        backdropFilter: 'brightness(0.8)',
      },
      '&:disabled': {
        backdropFilter: 'brightness(0.9)',
      },
    },
  })
);

type Props = {
  openedVersionStatus: OpenedVersionStatus | null | undefined,
  onQuit: () => Promise<void>,
  disableQuitting: boolean
};

const OpenedVersionStatusChip = ({
  openedVersionStatus,
  onQuit,
  disableQuitting,
}: Props) => {
  const gdevelopTheme = React.useContext(GDevelopThemeContext);
  const classes = useStylesCloseIconButton();
  if (!openedVersionStatus) return null;
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <div
          style={{
            ...styles.chip,
            backgroundColor: getStatusColor(
              gdevelopTheme,
              openedVersionStatus.status
            ),
          }}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text noMargin color="inherit">
            {openedVersionStatus.status === 'saving'
              ? i18n._(t`Saving...`)
              : (openedVersionStatus.version.label
                  ? shortenString(openedVersionStatus.version.label, 20)
                  : i18n.date(
                      Date.parse(openedVersionStatus.version.createdAt),
                      {
                        dateStyle: 'medium',
                        timeStyle: 'short',
                      }
                    )) +
                (openedVersionStatus.status === 'unsavedChanges' ? '*' : '')}
          </Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Spacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ButtonBase
            classes={classes}
            onClick={onQuit}
            disabled={disableQuitting}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Cross />
          </ButtonBase>
        </div>
      )}
    </I18n>
  );
};

export default OpenedVersionStatusChip;
