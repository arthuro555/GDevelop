import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Copy'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Copy.js' implicitly has an 'any' type.
import Copy from '../../UI/CustomSvgIcons/Copy';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../UI/CircularProgress' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CircularProgress.tsx', but '--jsx' is not set.
import CircularProgress from '../../UI/CircularProgress';

export default {
  title: 'UI Building Blocks/TextField',
  component: TextField,
  decorators: [paperDecorator],
};

const TextFieldStoryTemplate = (args: {
  floatingLabelText?: string | null | undefined,
  endAdornment?: React.ReactNode,
  helperMarkdownText?: string,
  required?: boolean
}) => {
  const [value, setValue] = React.useState('Hello world');

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <ColumnStackLayout>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        value={value}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
        onChange={(_, text) => setValue(text)}
        floatingLabelText="Text field label"
        {...args}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TextField
        margin="none"
        value={value}
// @ts-expect-error - TS7006 - Parameter '_' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
        onChange={(_, text) => setValue(text)}
        floatingLabelText="Text field label (no margin)"
        {...args}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <p>State value is {value}</p>
    </ColumnStackLayout>
  );
};

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Default = () => <TextFieldStoryTemplate />;

export const EndAdornment = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <TextFieldStoryTemplate
    endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Copy />
      </IconButton>
    }
  />
);

export const WithLoader = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <TextFieldStoryTemplate
    endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <CircularProgress style={{ height: 20, width: 20 }} />
      </IconButton>
    }
  />
);

export const WithoutFloatingTextAndEndAdornment = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <TextFieldStoryTemplate
    endAdornment={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconButton edge="end" size="small">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Copy />
      </IconButton>
    }
    floatingLabelText={null}
  />
);

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
export const Required = () => <TextFieldStoryTemplate required />;

export const WithMarkdownText = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <TextFieldStoryTemplate helperMarkdownText="This is some help text that can be written in **markdown**. This is *very* useful for emphasis and can even be used to add [links](http://example.com)." />
);
