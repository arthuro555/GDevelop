import * as React from 'react';

// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';

// @ts-expect-error - TS6142 - Module '../../../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../../../UI/MarkdownText';

export default {
  title: 'UI Building Blocks/MarkdownText',
  component: MarkdownText,
  decorators: [paperDecorator],
};

export const Default = () => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <MarkdownText
    allowParagraphs
    source={
      '# Title 1\n## Title 2\n### Title 3\n#### Title 4\n\nThis is some text that can contain [links](https://gdevelop.io), ~~strike through text~~, **bold** and *italic* words.\n\nBut also tables:\n\n|Hello|world|!|\n|-|:-:|-:|\n|Hi|silly|you|\n\nAnd code also: `ToString(5)`'
    }
  />
);
