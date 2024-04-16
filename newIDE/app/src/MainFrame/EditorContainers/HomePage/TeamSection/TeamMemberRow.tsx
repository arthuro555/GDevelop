import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';

// @ts-expect-error - TS6142 - Module '../../../../Utils/GDevelopServices/User' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Utils/GDevelopServices/User.tsx', but '--jsx' is not set.
import { User } from '../../../../Utils/GDevelopServices/User';

import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// @ts-expect-error - TS6142 - Module '../../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout } from '../../../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../../../UI/DragHandle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragHandle.tsx', but '--jsx' is not set.
import DragHandle from '../../../../UI/DragHandle';
// @ts-expect-error - TS6142 - Module '../../../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../../../UI/DragAndDrop/DragSourceAndDropTarget' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/DragAndDrop/DragSourceAndDropTarget.tsx', but '--jsx' is not set.
import { makeDragSourceAndDropTarget } from '../../../../UI/DragAndDrop/DragSourceAndDropTarget';
import { useResponsiveWindowSize } from '../../../../UI/Responsive/ResponsiveWindowMeasurer';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/ThreeDotsMenu'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ThreeDotsMenu.js' implicitly has an 'any' type.
import ThreeDotsMenu from '../../../../UI/CustomSvgIcons/ThreeDotsMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../../../UI/CustomSvgIcons/ChevronArrowRight'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ChevronArrowRight.js' implicitly has an 'any' type.
import ChevronArrowRight from '../../../../UI/CustomSvgIcons/ChevronArrowRight';
import GDevelopThemeContext from '../../../../UI/Theme/GDevelopThemeContext';
import { ClientCoordinates } from '../../../../Utils/UseLongTouch';

const styles = {
  listItem: {
    padding: '4px 0',
    borderRadius: 8,
    overflowWrap: 'anywhere', // Ensure everything is wrapped on small devices.
  },
} as const;

const DragSourceAndDropTarget = makeDragSourceAndDropTarget<Record<any, any>>('team-groups');

type Props = {
  member: User,
  isTemporary: boolean,
  onListUserProjects: () => Promise<void>,
  onDrag: (user: User) => void,
  onOpenContextMenu: (event: ClientCoordinates, member: User) => void
};

const TeamMemberRow = ({
  isTemporary,
  member,
  onListUserProjects,
  onDrag,
  onOpenContextMenu,
}: Props) => {
  const { isMobile } = useResponsiveWindowSize();
  const gdevelopTheme = React.useContext(GDevelopThemeContext);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <DragSourceAndDropTarget
      canDrop={() => false}
      beginDrag={() => {
        onDrag(member);
        return {};
      }}
      drop={() => {}}
    >
{ /* @ts-expect-error - TS7031 - Binding element 'connectDragSource' implicitly has an 'any' type. | TS7031 - Binding element 'connectDragPreview' implicitly has an 'any' type. */}
      {({ connectDragSource, connectDragPreview }) => {
        return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <ListItem
            style={{
              ...styles.listItem,
              backgroundColor: isTemporary
                ? gdevelopTheme.paper.backgroundColor.light
                : undefined,
            }}
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <LineStackLayout
              noMargin
              alignItems="center"
              justifyContent="space-between"
              expand
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LineStackLayout noMargin alignItems="center">
                {connectDragSource(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <DragHandle />
                  </div>
                )}
                {connectDragPreview(
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <div>
                    {isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <ListItemText
                        disableTypography
                        primary={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Text allowSelection noMargin>
                            {member.username || member.email}
                          </Text>
                        }
                        secondary={
                          member.username ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                            <Text allowSelection noMargin color="secondary">
                              {member.email}
                            </Text>
                          ) : null
                        }
                      />
                    ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                      <LineStackLayout noMargin alignItems="center">
                        {member.username && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                          <Text allowSelection noMargin>
                            {member.username}
                          </Text>
                        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Text allowSelection noMargin color="secondary">
                          {member.email}
                        </Text>
                      </LineStackLayout>
                    )}
                  </div>
                )}
              </LineStackLayout>

              {isMobile ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ListItemSecondaryAction>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="menu"
                    onClick={event => {
                      // prevent triggering the click on the list item.
                      event.stopPropagation();
                      onOpenContextMenu(event, member);
                    }}
                  >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <ThreeDotsMenu />
                  </IconButton>
                </ListItemSecondaryAction>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  rightIcon={<ChevronArrowRight fontSize="small" />}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>See projects</Trans>}
                  onClick={onListUserProjects}
                />
              )}
            </LineStackLayout>
          </ListItem>
        );
      }}
    </DragSourceAndDropTarget>
  );
};

export default TeamMemberRow;
