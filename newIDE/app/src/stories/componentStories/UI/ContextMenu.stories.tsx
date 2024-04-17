import * as React from 'react';
import { action } from '@storybook/addon-actions';

import paperDecorator from '../../PaperDecorator';

import ContextMenu, {
  ContextMenuInterface,
} from '../../../UI/Menu/ContextMenu';

import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
import { Container } from '@material-ui/core';
import ValueStateHolder from '../../ValueStateHolder';

import Text from '../../../UI/Text';

export default {
  title: 'UI Building Blocks/ContextMenu',
  component: ContextMenu,
  decorators: [paperDecorator],
};

export const Default = () => {
  const contextMenu = React.useRef<ContextMenuInterface | null | undefined>(
    null
  );
  const onContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (contextMenu.current) {
      contextMenu.current.open(event.clientX, event.clientY);
    }
  };
  return (
    <ValueStateHolder
      initialValue={false}
      render={(value, setValue) => (
        <>
          <FixedHeightFlexContainer height={600}>
            {/* @ts-expect-error - TS2769 - No overload matches this call. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Container onContextMenu={onContextMenu}>
              <Text>Right-click to open context menu</Text>
            </Container>
          </FixedHeightFlexContainer>
          <ContextMenu
// @ts-expect-error - TS2322 - Type 'MutableRefObject<ContextMenuInterface | null | undefined>' is not assignable to type 'Ref<ContextMenuInterface> | undefined'.
            ref={contextMenu}
            buildMenuTemplate={(i18n) => [
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
