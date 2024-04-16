// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {t} from '@lingui/macro';
import React, { PureComponent } from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Folder'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Folder.js' implicitly has an 'any' type.
import FolderIcon from '../UI/CustomSvgIcons/Folder';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Trash'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Trash.js' implicitly has an 'any' type.
import TrashIcon from '../UI/CustomSvgIcons/Trash';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/CustomSvgIcons/Edit'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Edit.js' implicitly has an 'any' type.
import EditIcon from '../UI/CustomSvgIcons/Edit';
// @ts-expect-error - TS6142 - Module '../UI/Toolbar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toolbar.tsx', but '--jsx' is not set.
import { ToolbarGroup } from '../UI/Toolbar';
// @ts-expect-error - TS6142 - Module '../UI/ToolbarSeparator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ToolbarSeparator.tsx', but '--jsx' is not set.
import ToolbarSeparator from '../UI/ToolbarSeparator';
// @ts-expect-error - TS6142 - Module '../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../UI/IconButton';

type Props = {
  onOpenProjectFolder: () => void,
  canOpenProjectFolder: boolean,
  onDeleteSelection: () => void,
  canDelete: boolean,
  onToggleProperties: () => void,
  isPropertiesShown: boolean
};

type State = Record<any, any>;

export class Toolbar extends PureComponent<Props, State> {
  render() {
    const { canDelete, isPropertiesShown } = this.props;

    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <ToolbarGroup lastChild>
        {this.props.canOpenProjectFolder && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <IconButton
              size="small"
              color="default"
              onClick={this.props.onOpenProjectFolder}
              tooltip={t`Open the project folder`}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <FolderIcon />
            </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ToolbarSeparator />
          </>
        )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={this.props.onToggleProperties}
          tooltip={t`Open the properties panel`}
          selected={isPropertiesShown}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <EditIcon />
        </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <IconButton
          size="small"
          color="default"
          onClick={this.props.onDeleteSelection}
          disabled={!canDelete}
          tooltip={t`Delete the selected resource`}
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TrashIcon />
        </IconButton>
      </ToolbarGroup>
    );
  }
}

export default Toolbar;
