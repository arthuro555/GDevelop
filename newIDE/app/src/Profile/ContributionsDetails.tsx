// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';

import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { AccordionHeader, AccordionBody, Accordion } from '../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../UI/IconContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconContainer.tsx', but '--jsx' is not set.
import { IconContainer } from '../UI/IconContainer';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line } from '../UI/Grid';
import {
  ExtensionShortHeader,
  getUserExtensionShortHeaders,
} from '../Utils/GDevelopServices/Extension';
import {
  ExampleShortHeader,
  getUserExampleShortHeaders,
} from '../Utils/GDevelopServices/Example';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../UI/PlaceholderLoader'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/PlaceholderLoader.js' implicitly has an 'any' type.
import PlaceholderLoader from '../UI/PlaceholderLoader';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../UI/BackgroundText';
// @ts-expect-error - TS6142 - Module '../UI/EmptyMessage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/EmptyMessage.tsx', but '--jsx' is not set.
import EmptyMessage from '../UI/EmptyMessage';

type ContributionLineProps = {
  fullName: string,
  previewIconUrl?: string,
  shortDescription?: string
};

export const ContributionLine = ({
  fullName,
  previewIconUrl,
  shortDescription,
}: ContributionLineProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Line>
    {previewIconUrl && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <IconContainer alt={fullName} src={previewIconUrl} size={64} />
    )}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text noMargin>{fullName}</Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text noMargin size="body2">
        {shortDescription}
      </Text>
    </Column>
  </Line>
);

type ExamplesAccordionProps = {
  examples: Array<ExampleShortHeader>,
  exampleError: Error | null | undefined
};

export const ExamplesAccordion = ({
  examples,
  exampleError,
}: ExamplesAccordionProps) => {
  if (exampleError)
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Error retrieving the examples</Trans>
          </Text>
        </Line>
      </Column>
    );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Accordion>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Examples ({examples.length})</Trans>
        </Text>
      </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionBody disableGutters>
        {examples.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>You haven't contributed any examples</Trans>
          </EmptyMessage>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column>
            {examples.map(example => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ContributionLine
                key={example.name}
                shortDescription={example.shortDescription}
                fullName={example.name}
                previewIconUrl={
                  example.previewImageUrls ? example.previewImageUrls[0] : ''
                }
              />
            ))}
          </Column>
        )}
      </AccordionBody>
    </Accordion>
  );
};

type ExtensionsAccordionProps = {
  extensions: Array<ExtensionShortHeader>,
  extensionError: Error | null | undefined
};

export const ExtensionsAccordion = ({
  extensions,
  extensionError,
}: ExtensionsAccordionProps) => {
  if (extensionError)
    return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Text>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>Error retrieving the extensions</Trans>
          </Text>
        </Line>
      </Column>
    );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Accordion>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Extensions ({extensions.length})</Trans>
        </Text>
      </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <AccordionBody disableGutters>
        {extensions.length === 0 ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <EmptyMessage>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Trans>You haven't contributed any extensions</Trans>
          </EmptyMessage>
        ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Column>
            {extensions.map(extension => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ContributionLine
                key={extension.name}
                shortDescription={extension.shortDescription}
                fullName={extension.fullName}
                previewIconUrl={extension.previewIconUrl}
              />
            ))}
          </Column>
        )}
      </AccordionBody>
    </Accordion>
  );
};

// Change examples to assets when the feature is developed.
type AssetsAccordionProps = {
  examples: Array<ExampleShortHeader> | null | undefined
};

const AssetsAccordion = ({
  examples,
}: AssetsAccordionProps) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  <Accordion disabled>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
    <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Text displayInlineAsSpan>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Trans>Assets (coming soon!)</Trans>
      </Text>
    </AccordionHeader>
  </Accordion>
);

type Props = {
  userId: string
};

const ContributionDetails = ({
  userId,
}: Props) => {
  const [
    extensions,
    setExtensions,
  ] = React.useState<Array<ExtensionShortHeader> | null | undefined>(null);
  const [examples, setExamples] = React.useState<Array<ExampleShortHeader> | null | undefined>(null);
  const [extensionError, setExtensionError] = React.useState<Error | null | undefined>(null);
  const [exampleError, setExampleError] = React.useState<Error | null | undefined>(null);

  const fetchUserExtensions = React.useCallback(
    () => {
      (async () => {
        if (!userId) return;
        try {
          const extensions = await getUserExtensionShortHeaders(userId);
          setExtensions(extensions);
        } catch (error: any) {
          console.error('Error while loading extensions:', error);
          setExtensionError(error);
        }
      })();
    },
    [userId]
  );

  React.useEffect(
    () => {
      fetchUserExtensions();
    },
    [fetchUserExtensions]
  );

  const fetchUserExamples = React.useCallback(
    () => {
      (async () => {
        if (!userId) return;
        try {
          const examples = await getUserExampleShortHeaders(userId);
          setExamples(examples);
        } catch (error: any) {
          console.error('Error while loading examples:', error);
          setExampleError(error);
        }
      })();
    },
    [userId]
  );

  React.useEffect(
    () => {
      fetchUserExamples();
    },
    [fetchUserExamples]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line alignItems="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <Text size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Contributions</Trans>
        </Text>
      </Line>
      {examples && extensions ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExtensionsAccordion
            extensions={extensions}
            extensionError={extensionError}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ExamplesAccordion examples={examples} exampleError={exampleError} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AssetsAccordion examples={examples} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Trans>
                Missing some contributions? If you are the author, create a Pull
                Request on the corresponding GitHub repository after adding your
                username in the authors of the example or the extension - or
                directly ask the original author to add your username.
              </Trans>
            </BackgroundText>
          </Column>
        </>
      ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <PlaceholderLoader />
      )}
    </Column>
  );
};

export default ContributionDetails;
