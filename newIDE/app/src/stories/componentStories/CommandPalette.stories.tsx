import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { action } from '@storybook/addon-actions';

// @ts-expect-error - TS6142 - Module '../../CommandPalette/CommandPalette' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommandPalette/CommandPalette/index.tsx', but '--jsx' is not set.
import CommandPalette from '../../CommandPalette/CommandPalette';
// @ts-expect-error - TS6142 - Module '../../CommandPalette/CommandPalette/AutocompletePicker' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/CommandPalette/CommandPalette/AutocompletePicker.tsx', but '--jsx' is not set.
import AutocompletePicker from '../../CommandPalette/CommandPalette/AutocompletePicker';
import {
  NamedCommand,
  GoToWikiCommand,
  CommandOption,
} from '../../CommandPalette/CommandManager';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';

export default {
  title: 'CommandPalette',
  component: CommandPalette,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <AutocompletePicker
        i18n={i18n}
        items={
          ([
            {
              name: 'OPEN_PROJECT',
              handler: () => {},
            },
            {
              name: 'OPEN_PROJECT_PROPERTIES',
              handler: () => {},
            },
            {
              name: 'EDIT_OBJECT',
              handler: () => {},
            },
            {
              hit: {
                content: 'Everything is an object in GDevelop',
                hierarchy: { lvl0: 'Scene editor', lvl1: 'Objects' },
                objectID: 'everyting-is-an-object',
                url: 'https://wiki.gdevelop.io/gdevelop5/objects',
              },
              handler: action('Open wiki command'),
            },
          ] as Array<NamedCommand | GoToWikiCommand>)
        }
        onClose={() => {}}
        onSelect={action('Open command')}
        placeholder="Start typing a command..."
      />
    )}
  </I18n>
);

export const SelectingOption = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
    {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <AutocompletePicker
        i18n={i18n}
        items={
          ([
            {
              text: 'Player',
              handler: () => {},
              iconSrc: 'res/unknown32.png',
            },
            {
              text: 'Platform',
              handler: () => {},
              iconSrc: 'res/unknown32.png',
            },
            {
              text: 'Enemy',
              handler: () => {},
              iconSrc: 'res/unknown32.png',
            },
          ] as Array<CommandOption>)
        }
        onClose={() => {}}
        onSelect={action('Select command option')}
        placeholder="Edit object..."
      />
    )}
  </I18n>
);
