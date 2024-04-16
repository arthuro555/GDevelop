import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../../UI/TextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/TextField.tsx', but '--jsx' is not set.
import TextField from '../../UI/TextField';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, TextFieldWithButtonLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../UI/SemiControlledTextField';
// @ts-expect-error - TS6142 - Module '../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../../AssetStore/ResourceStore' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/ResourceStore/index.tsx', but '--jsx' is not set.
import { ResourceStore } from '../../AssetStore/ResourceStore';
// @ts-expect-error - TS6142 - Module '../../UI/Dialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Dialog.tsx', but '--jsx' is not set.
import Dialog from '../../UI/Dialog';

import useForceUpdate from '../../Utils/UseForceUpdate';
import {
  getHelpLink,
  isRelativePathToDocumentationRoot,
  isDocumentationAbsoluteUrl,
} from '../../Utils/HelpLink';
import axios from 'axios';
import { useIsMounted } from '../../Utils/UseIsMounted';
import { showErrorBox } from '../../UI/Messages/MessageBox';
// @ts-expect-error - TS6142 - Module '../../Profile/UsersAutocomplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/UsersAutocomplete.tsx', but '--jsx' is not set.
import { UsersAutocomplete } from '../../Profile/UsersAutocomplete';
// @ts-expect-error - TS6142 - Module '../../UI/SemiControlledAutoComplete' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledAutoComplete.tsx', but '--jsx' is not set.
import SemiControlledAutoComplete from '../../UI/SemiControlledAutoComplete';

const downloadSvgAsBase64 = async (url: string): Promise<string> => {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const image = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    if (image.length > 100 * 1024) {
      throw new Error(
        `Icon is too big (size after base64 conversion: ${image.length})`
      );
    }

    const contentType = response.headers
      ? response.headers['content-type'].toLowerCase()
      : '';
    if (contentType !== 'image/svg+xml')
      throw new Error(
        `Wrong content type. Got: "${contentType}", expected "image/svg+xml"`
      );

    return `data:${contentType};base64,${image}`;
  } catch (err: any) {
    console.error('Unable to import the icon.', err);
    throw err;
  }
};

type HelpPathTextFieldProps = {
  i18n: I18nType,
  helpPath: string,
  onChangeHelpPath: (arg1: string) => void
};

const HelpPathTextField = ({
  i18n,
  helpPath,
  onChangeHelpPath,
}: HelpPathTextFieldProps) => {
  const isAbsoluteUrl = isDocumentationAbsoluteUrl(helpPath);
  const isRelativePath = isRelativePathToDocumentationRoot(helpPath);
  const helperText = helpPath
    ? (isRelativePath
        ? i18n._(
            t`This is a relative path that will open in the GDevelop wiki.`
          )
        : i18n._(t`This is link to a webpage.`)) +
      ` [${i18n._(t`Click here to test the link.`)}](${getHelpLink(helpPath)})`
    : i18n._(
        t`This can either be a URL to a web page, or a path starting with a slash that will be opened in the GDevelop wiki. Leave empty if there is no help page, although it's recommended you eventually write one if you distribute the extension.`
      );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      floatingLabelText={<Trans>Help page URL</Trans>}
      value={helpPath}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
      onChange={(e, text) => {
        onChangeHelpPath(text);
      }}
      errorText={
        !!helpPath && !isAbsoluteUrl && !isRelativePath ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          <Trans>
            This is not a URL starting with "http://" or "https://".
          </Trans>
        ) : null
      }
      helperMarkdownText={helperText}
      fullWidth
    />
  );
};

type Props = {
  eventsFunctionsExtension: gdEventsFunctionsExtension,
  onLoadChange: (isLoading: boolean) => void,
  isLoading: boolean
};

export const ExtensionOptionsEditor = ({
  eventsFunctionsExtension,
  onLoadChange,
  isLoading,
}: Props) => {
  const forceUpdate = useForceUpdate();
  const [resourceStoreOpen, setResourceStoreOpen] = React.useState(false);
  const isMounted = useIsMounted();

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
      {({
        i18n,
      }: {
        i18n: I18nType
      }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <ColumnStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Name</Trans>}
            value={eventsFunctionsExtension.getName()}
            disabled
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextFieldWithButtonLayout
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
            renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <RaisedButton
                onClick={() => {
                  setResourceStoreOpen(true);
                }}
                primary
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                label={<Trans>Choose</Trans>}
                disabled={isLoading}
                style={style}
              />
            )}
            renderTextField={() => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                floatingLabelText={<Trans>Icon URL</Trans>}
                value={eventsFunctionsExtension.getPreviewIconUrl()}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
                onChange={text => {
                  eventsFunctionsExtension.setPreviewIconUrl(text);
                }}
                disabled
                fullWidth
              />
            )}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Name displayed in editor</Trans>}
            value={eventsFunctionsExtension.getFullName()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => {
              eventsFunctionsExtension.setFullName(text);
              forceUpdate();
            }}
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Short description</Trans>}
            value={eventsFunctionsExtension.getShortDescription()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => {
              eventsFunctionsExtension.setShortDescription(text);
              forceUpdate();
            }}
            multiline
            fullWidth
            rows={2}
            rowsMax={2}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Description (markdown supported)</Trans>}
            value={eventsFunctionsExtension.getDescription()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => {
              eventsFunctionsExtension.setDescription(text);
              forceUpdate();
            }}
            multiline
            fullWidth
            rows={5}
            rowsMax={15}
            helperMarkdownText={i18n._(
              t`Explain and give some examples of what can be achieved with this extension.`
            )}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Version</Trans>}
            value={eventsFunctionsExtension.getVersion()}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={(e, text) => {
              eventsFunctionsExtension.setVersion(text);
              forceUpdate();
            }}
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledAutoComplete
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Category (shown in the editor)</Trans>}
            fullWidth
            value={eventsFunctionsExtension.getCategory()}
// @ts-expect-error - TS7006 - Parameter 'category' implicitly has an 'any' type.
            onChange={category => {
              eventsFunctionsExtension.setCategory(category);
              forceUpdate();
            }}
            // TODO Sort by translated value.
            dataSource={[
              {
                text: '',
                value: 'General',
                translatableValue: 'General',
              },
              {
                text: 'Ads',
                value: 'Ads',
                translatableValue: 'Ads',
              },
              {
                text: 'Visual effect',
                value: 'Visual effect',
                translatableValue: 'Visual effect',
              },
              {
                text: 'Audio',
                value: 'Audio',
                translatableValue: 'Audio',
              },
              {
                text: 'Advanced',
                value: 'Advanced',
                translatableValue: 'Advanced',
              },
              {
                text: 'Camera',
                value: 'Camera',
                translatableValue: 'Camera',
              },
              {
                text: 'Input',
                value: 'Input',
                translatableValue: 'Input',
              },
              {
                text: 'Game mechanic',
                value: 'Game mechanic',
                translatableValue: 'Game mechanic',
              },
              {
                text: 'Movement',
                value: 'Movement',
                translatableValue: 'Movement',
              },
              {
                text: 'Network',
                value: 'Network',
                translatableValue: 'Network',
              },
              {
                text: 'Third-party',
                value: 'Third-party',
                translatableValue: 'Third-party',
              },
              {
                text: 'User interface',
                value: 'User interface',
                translatableValue: 'User interface',
              },
            ]}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <SemiControlledTextField
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Tags (comma separated)</Trans>}
            value={eventsFunctionsExtension
              .getTags()
              .toJSArray()
              .join(', ')}
// @ts-expect-error - TS7006 - Parameter 'text' implicitly has an 'any' type.
            onChange={text => {
              const tags = eventsFunctionsExtension.getTags();
              tags.clear();
              text
                .split(',')
// @ts-expect-error - TS7006 - Parameter 'tag' implicitly has an 'any' type.
                .map(tag => tag.trim())
                .filter(Boolean)
// @ts-expect-error - TS7006 - Parameter 'tag' implicitly has an 'any' type.
                .forEach(tag => {
                  tags.push_back(tag);
                });
              forceUpdate();
            }}
            fullWidth
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <HelpPathTextField
            i18n={i18n}
            helpPath={eventsFunctionsExtension.getHelpPath()}
            onChangeHelpPath={helpPath => {
              eventsFunctionsExtension.setHelpPath(helpPath);
              forceUpdate();
            }}
          />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <UsersAutocomplete
            userIds={eventsFunctionsExtension.getAuthorIds().toJSArray()}
// @ts-expect-error - TS7006 - Parameter 'userIdAndUsernames' implicitly has an 'any' type.
            onChange={userIdAndUsernames => {
              const projectAuthorIds = eventsFunctionsExtension.getAuthorIds();
              projectAuthorIds.clear();
// @ts-expect-error - TS7006 - Parameter 'userIdAndUsername' implicitly has an 'any' type.
              userIdAndUsernames.forEach(userIdAndUsername =>
                projectAuthorIds.push_back(userIdAndUsername.userId)
              );
            }}
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            floatingLabelText={<Trans>Authors</Trans>}
            helperText={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <Trans>
                Select the usernames of the contributors to this extension. They
                will be displayed in the order selected. Do not see your name?
                Go to the Profile section and create an account!
              </Trans>
            }
          />
          {resourceStoreOpen && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <Dialog
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              title={<Trans>Choose an icon for the extension</Trans>}
              actions={[
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <FlatButton
                  key="cancel"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  label={<Trans>Cancel</Trans>}
                  primary={false}
                  onClick={() => {
                    setResourceStoreOpen(false);
                  }}
                />,
              ]}
              flexColumnBody
              fullHeight
              open
              onRequestClose={() => {
                setResourceStoreOpen(false);
              }}
            >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <ResourceStore
// @ts-expect-error - TS7006 - Parameter 'resource' implicitly has an 'any' type.
                onChoose={resource => {
                  setResourceStoreOpen(false);
                  onLoadChange(true);
                  downloadSvgAsBase64(resource.url)
                    .then(
                      base64Svg => {
                        if (!isMounted.current) return;

                        eventsFunctionsExtension.setPreviewIconUrl(
                          resource.url
                        );
                        eventsFunctionsExtension.setIconUrl(base64Svg);
                      },
                      rawError => {
                        if (!isMounted.current) return;

                        showErrorBox({
                          message: i18n._(
                            t`Unable to download the icon. Verify your internet connection or try again later.`
                          ),
                          rawError,
                          errorId: 'icon-download-error',
                        });
                      }
                    )
                    .then(() => {
                      if (!isMounted.current) return;

                      onLoadChange(false);
                    });
                }}
                resourceKind={'svg'}
              />
            </Dialog>
          )}
        </ColumnStackLayout>
      )}
    </I18n>
  );
};
