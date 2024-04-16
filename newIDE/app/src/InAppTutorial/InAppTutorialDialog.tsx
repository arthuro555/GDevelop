// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import {Trans} from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog, { DialogPrimaryButton } from '../UI/Dialog';
// @ts-expect-error - TS6142 - Module '../UI/MarkdownText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/MarkdownText.tsx', but '--jsx' is not set.
import { MarkdownText } from '../UI/MarkdownText';
// @ts-expect-error - TS6142 - Module '../UI/CorsAwareImage' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CorsAwareImage.tsx', but '--jsx' is not set.
import { CorsAwareImage } from '../UI/CorsAwareImage';
import { InAppTutorialDialog as InAppTutorialDialogType } from '../Utils/GDevelopServices/InAppTutorial';
import Window from '../Utils/Window';
// @ts-expect-error - TS6142 - Module '../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../UI/Link';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import { selectMessageByLocale } from '../Utils/i18n/MessageByLocale';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line } from '../UI/Grid';

type Props = {
  dialogContent: InAppTutorialDialogType,
  endTutorial: () => void,
  goToNextStep?: () => void,
  isLastStep?: boolean
};

const styles = {
  image: { maxWidth: 350 },
  imageLink: { cursor: 'pointer', maxWidth: 350 },
} as const;

function InAppTutorialDialog({
  dialogContent,
  endTutorial,
  goToNextStep,
  isLastStep,
}: Props) {
  const onApply = () => {
    if (isLastStep) {
      endTutorial();
    } else if (goToNextStep) {
      goToNextStep();
    }
  };

  const actions = isLastStep
    ? [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          key="close"
          onClick={onApply}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Close</Trans>}
        />,
      ]
    : [
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <FlatButton
          key="leave"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Leave the tutorial</Trans>}
          onClick={endTutorial}
        />,
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <DialogPrimaryButton
          primary
          key="next"
          onClick={onApply}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Start next chapter</Trans>}
        />,
      ];

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Dialog
          title={null} // Specific end dialog where the title is handled by the content.
          onApply={onApply}
          open
          actions={actions}
          maxWidth="sm"
          flexColumnBody
          cannotBeDismissed
        >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <ColumnStackLayout noMargin>
            {dialogContent.content.map((item, index) => {
// @ts-expect-error - TS2339 - Property 'messageDescriptor' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
              if (item.messageDescriptor) {
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <MarkdownText
                    // $FlowFixMe - Message descriptor are usually an object with a `id` key containing the translation key.
// @ts-expect-error - TS2339 - Property 'messageDescriptor' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'. | TS2339 - Property 'messageDescriptor' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
                    key={item.messageDescriptor.id || item.messageDescriptor}
// @ts-expect-error - TS2339 - Property 'messageDescriptor' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
                    translatableSource={item.messageDescriptor}
                  />
                );
// @ts-expect-error - TS2339 - Property 'messageByLocale' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
              } else if (item.messageByLocale) {
                return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <MarkdownText
                    // $FlowFixMe - We suppose the message by locale has at least one key (one language) and we use the translation key.
// @ts-expect-error - TS2339 - Property 'messageByLocale' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
                    key={Object.values(item.messageByLocale)[0]}
// @ts-expect-error - TS2339 - Property 'messageByLocale' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
                    source={selectMessageByLocale(i18n, item.messageByLocale)}
                  />
                );
              }
// @ts-expect-error - TS2339 - Property 'image' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
              if (item.image) {
// @ts-expect-error - TS2339 - Property 'image' does not exist on type 'TranslatedText | { image: { imageSource: string; linkHref?: string | undefined; }; }'.
                const { linkHref, imageSource } = item.image;
                if (linkHref) {
                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line justifyContent="center" key={`image-${index}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Link
                        href={linkHref}
                        onClick={() => Window.openExternalURL(linkHref)}
                      >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <CorsAwareImage
                          style={styles.imageLink}
                          src={imageSource}
                          alt="End of tutorial dialog image"
                        />
                      </Link>
                    </Line>
                  );
                } else {
                  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Line justifyContent="center" key={`image-${index}`}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <CorsAwareImage
                        style={styles.image}
                        src={imageSource}
                        alt="End of tutorial dialog image"
                      />
                    </Line>
                  );
                }
              }
              return null;
            })}
          </ColumnStackLayout>
        </Dialog>
      )}
    </I18n>
  );
}

export default InAppTutorialDialog;
