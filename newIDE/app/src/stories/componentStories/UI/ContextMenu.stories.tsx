import * as React from 'react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

import ContextMenu, {
  ContextMenuInterface,
// @ts-expect-error - TS6142 - Module '../../../UI/Menu/ContextMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Menu/ContextMenu.tsx', but '--jsx' is not set.
} from '../../../UI/Menu/ContextMenu';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { Container } from '@material-ui/core';
import ValueStateHolder from '../../ValueStateHolder';
// @ts-expect-error - TS6142 - Module '../../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../../UI/Text';

export default {
  title: 'UI Building Blocks/ContextMenu',
  component: ContextMenu,
  decorators: [paperDecorator],
};

export const Default = () => {
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(null);
  const onContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (contextMenu.current) {
      contextMenu.current.open(event.clientX, event.clientY);
    }
  };
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ValueStateHolder
      initialValue={false}
      render={(value, setValue) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <FixedHeightFlexContainer height={600}>
{ /* @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Container onContextMenu={onContextMenu}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text>Right-click to open context menu</Text>
            </Container>
          </FixedHeightFlexContainer>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ContextMenu
            ref={contextMenu}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
            buildMenuTemplate={i18n => [
              {
                label: 'Option 1',
                click: action('Option 1'),
              },
              {
                label: 'Disabled option',
                enabled: false,
                click: action('Option 1'),
              },
              {
                type: 'checkbox',
                checked: value,
                label: 'Disabled option',
                click: () => setValue(!value),
              },
              { type: 'separator' },
              {
                label: 'Other actions',
                submenu: [
                  {
                    label: 'SubOption 1',
                    click: action('SubOption 1'),
                  },
                  {
                    label: 'SubOption 2',
                    click: action('SubOption 2'),
                  },
                ],
              },
            ]}
          />
        </>
      )}
    />
  );
};
