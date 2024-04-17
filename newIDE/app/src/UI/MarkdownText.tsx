import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { I18n } from '@lingui/react';
import { MessageDescriptor } from '../Utils/i18n/MessageDescriptor.flow';
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'classnames'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/classnames/index.js' implicitly has an 'any' type.
import classNames from 'classnames';
import Window from '../Utils/Window';

// Sensible defaults for react-markdown
const makeMarkdownCustomComponents = (
  isStandaloneText: boolean,
  allowParagraphs: boolean
) => ({
  // Ensure link are opened in a new page
  // @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type.
  a: (props) =>
    props.href ? (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => {
          event.preventDefault(); // Avoid triggering the href (avoids a warning on mobile in case of unsaved changes).
          Window.openExternalURL(props.href);
        }}
      >
        {props.children}
      </a>
    ) : (
      props.children
    ),
  // Add paragraphs only if we explicitly opt in.
  // @ts-expect-error - TS7006 - Parameter 'props' implicitly has an 'any' type.
  p: (props) =>
    isStandaloneText || allowParagraphs ? (
      <p>{props.children}</p>
    ) : (
      props.children
    ),
  // eslint-disable-next-line jsx-a11y/alt-text
  // @ts-expect-error - TS7031 - Binding element 'node' implicitly has an 'any' type. | TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  img: ({ node, ...props }) => <img style={{ display: 'flex' }} {...props} />,
});

type Props = {
  source?: string;
  translatableSource?: MessageDescriptor;
  isStandaloneText?: boolean;
  allowParagraphs?: boolean;
};

/**
 * Display a markdown text
 */
export const MarkdownText = (props: Props) => {
  const markdownCustomComponents = React.useMemo(
    () =>
      makeMarkdownCustomComponents(
        props.isStandaloneText || false,
        props.allowParagraphs || false
      ),
    [props.isStandaloneText, props.allowParagraphs]
  );

  const markdownElement = (
    <I18n>
      {({ i18n }) => (
        <ReactMarkdown
          components={markdownCustomComponents}
          remarkPlugins={[remarkGfm]}
        >
{ /* @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'. */}
          {props.translatableSource
            ? i18n._(props.translatableSource)
            : props.source}
        </ReactMarkdown>
      )}
    </I18n>
  );

  const className = classNames({
    'gd-markdown': true,
    'standalone-text-container': props.isStandaloneText,
  });

  return props.isStandaloneText ? (
    <div className={className}>{markdownElement}</div>
  ) : (
    <span className={className}>{markdownElement}</span>
  );
};
