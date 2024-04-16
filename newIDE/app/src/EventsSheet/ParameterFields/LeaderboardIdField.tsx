import React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans, t } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
import { ParameterInlineRendererProps } from './ParameterInlineRenderer.flow';
import {
  ParameterFieldProps,
  ParameterFieldInterface,
  FieldFocusFunction,
} from './ParameterFieldCommons';
// @ts-expect-error - TS6142 - Module '../../UI/SelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectField.tsx', but '--jsx' is not set.
import SelectField, { SelectFieldInterface } from '../../UI/SelectField';
// @ts-expect-error - TS6142 - Module '../../UI/SelectOption' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SelectOption.tsx', but '--jsx' is not set.
import SelectOption from '../../UI/SelectOption';
// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { TextFieldWithButtonLayout } from '../../UI/Layout';
import { Leaderboard } from '../../Utils/GDevelopServices/Play';
import LeaderboardContext from '../../Leaderboard/LeaderboardContext';
// @ts-expect-error - TS6142 - Module '../../Leaderboard/LeaderboardDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Leaderboard/LeaderboardDialog.tsx', but '--jsx' is not set.
import LeaderboardDialog from '../../Leaderboard/LeaderboardDialog';
// @ts-expect-error - TS6142 - Module './GenericExpressionField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/EventsSheet/ParameterFields/GenericExpressionField/index.tsx', but '--jsx' is not set.
import GenericExpressionField from './GenericExpressionField';
import { shortenUuidForDisplay } from '../../Utils/GDevelopServices/Play';
import { useOnlineStatus } from '../../Utils/OnlineStatus';
// @ts-expect-error - TS6142 - Module '../../UI/FlatButtonWithSplitMenu' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButtonWithSplitMenu.tsx', but '--jsx' is not set.
import FlatButtonWithSplitMenu from '../../UI/FlatButtonWithSplitMenu';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/ShareExternal'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/ShareExternal.js' implicitly has an 'any' type.
import ShareExternal from '../../UI/CustomSvgIcons/ShareExternal';

const getInlineParameterDisplayValue = (leaderboards: Array<Leaderboard> | null | undefined, value: string): string => {
  if (!leaderboards) return value;
  const leaderboard = leaderboards.find(
    leaderboard => `"${leaderboard.id}"` === value
  );
  return leaderboard ? leaderboard.name : value;
};

const useFetchLeaderboards = () => {
  const { leaderboards, listLeaderboards } = React.useContext(
    LeaderboardContext
  );
  const fetchLeaderboards = React.useCallback(
    async () => {
      try {
        await listLeaderboards();
      } catch (e: any) {
        // Do not throw or show alert as this can be triggered every time the field is seen.
        console.error('Unable to fetch leaderboards', e);
      }
    },
    [listLeaderboards]
  );
  React.useEffect(
    () => {
      if (!leaderboards) {
        fetchLeaderboards();
      }
    },
    [fetchLeaderboards, leaderboards]
  );

  return leaderboards;
};

export default React.forwardRef<ParameterFieldProps, ParameterFieldInterface>(function LeaderboardIdField(props, ref) {
  const isOnline = useOnlineStatus();
  const leaderboards = useFetchLeaderboards();
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);
  const field = React.useRef<GenericExpressionField | SelectFieldInterface | null | undefined>(null);
  const focus: FieldFocusFunction = options => {
    if (field.current) field.current.focus(options);
  };
// @ts-expect-error - TS2322 - Type '{ focus: FieldFocusFunction; }' is not assignable to type 'ParameterFieldProps'.
  React.useImperativeHandle(ref, () => ({
    focus,
  }));

  const isCurrentValueInLeaderboardList =
    leaderboards &&
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
    !!leaderboards.find(leaderboard => `"${leaderboard.id}"` === props.value);

  const [isExpressionField, setIsExpressionField] = React.useState(
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
    !leaderboards || (!!props.value && !isCurrentValueInLeaderboardList)
  );

  const onChangeSelectValue = (event: any, value: any) => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
    props.onChange(event.target.value);
  };

  const onChangeTextValue = (value: string) => {
// @ts-expect-error - TS2339 - Property 'onChange' does not exist on type 'ParameterFieldInterface'.
    props.onChange(value);
  };

// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
  const fieldLabel = props.parameterMetadata
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
    ? props.parameterMetadata.getDescription()
    : undefined;

  const gameHasLeaderboards = leaderboards && leaderboards.length > 0;

  const selectOptions = React.useMemo(
    () =>
      leaderboards && gameHasLeaderboards
        ? leaderboards.map(leaderboard => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <SelectOption
              key={leaderboard.id}
              value={`"${leaderboard.id}"`}
              label={`${leaderboard.name} ${
                leaderboard.id
                  ? `(${shortenUuidForDisplay(leaderboard.id)})`
                  : ''
              }`}
              shouldNotTranslate
            />
          ))
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        : [<SelectOption disabled key="empty" value="empty" label={''} />],
    [leaderboards, gameHasLeaderboards]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <TextFieldWithButtonLayout
            renderTextField={() =>
              !isExpressionField ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <SelectField
                  ref={field}
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
                  value={props.value}
                  onChange={onChangeSelectValue}
// @ts-expect-error - TS2339 - Property 'isInline' does not exist on type 'ParameterFieldInterface'.
                  margin={props.isInline ? 'none' : 'dense'}
                  fullWidth
                  floatingLabelText={fieldLabel}
                  translatableHintText={
                    gameHasLeaderboards
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
                      ? props.parameterMetadata &&
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
                        props.parameterMetadata.isOptional()
                        ? t`Choose a leaderboard (optional)`
                        : t`Choose a leaderboard`
                      : t`No leaderboards`
                  }
                  helperMarkdownText={
                    !gameHasLeaderboards
                      ? i18n._(
                          t`There are currently no leaderboards created for this game. Open the leaderboards manager to create one.`
                        )
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
                      : (props.parameterMetadata &&
// @ts-expect-error - TS2339 - Property 'parameterMetadata' does not exist on type 'ParameterFieldInterface'.
                          props.parameterMetadata.getLongDescription()) ||
                        null
                  }
                >
                  {selectOptions}
                </SelectField>
              ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <GenericExpressionField
                  ref={field}
                  expressionType="string"
                  {...props}
                  onChange={onChangeTextValue}
                  onExtractAdditionalErrors={(
                    currentExpression: string,
                    currentExpressionNode: gdExpressionNode
                  ) => {
                    if (!leaderboards) {
                      if (!isOnline)
                        return 'Unable to fetch leaderboards as you are offline.';
                      return 'Your game may not be registered, create one in the leaderboard manager.';
                    }
                  }}
                />
              )
            }
// @ts-expect-error - TS7006 - Parameter 'style' implicitly has an 'any' type.
            renderButton={style => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <FlatButtonWithSplitMenu
                id="open-leaderboard-admin-button"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                icon={<ShareExternal />}
                style={style}
                primary
                onClick={() => setIsAdminOpen(true)}
// @ts-expect-error - TS7006 - Parameter 'i18n' implicitly has an 'any' type.
                buildMenuTemplate={i18n => [
                  {
                    label: isExpressionField
                      ? i18n._(t`Select the leaderboard from a list`)
                      : i18n._(
                          t`Enter the leaderboard id as a text or an expression`
                        ),
                    disabled: !leaderboards,
                    click: () => setIsExpressionField(!isExpressionField),
                  },
                ]}
              />
            )}
          />
{ /* @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'. */}
          {isAdminOpen && !!props.project && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <LeaderboardDialog
              onClose={() => setIsAdminOpen(false)}
              open={isAdminOpen}
// @ts-expect-error - TS2339 - Property 'project' does not exist on type 'ParameterFieldInterface'.
              project={props.project}
              leaderboardId={
                isCurrentValueInLeaderboardList
// @ts-expect-error - TS2339 - Property 'value' does not exist on type 'ParameterFieldInterface'.
                  ? props.value.replace(/"/g, '')
                  : undefined
              }
            />
          )}
        </>
      )}
    </I18n>
  );
});

const InlineLeaderboardIdField = ({
  value,
  parameterMetadata,
  InvalidParameterValue,
}: ParameterInlineRendererProps) => {
  const leaderboards = useFetchLeaderboards();

  if (!value) {
    if (parameterMetadata.isOptional()) {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <span>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>No leaderboard chosen</Trans>
        </span>
      );
    } else {
      return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InvalidParameterValue isEmpty>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Trans>Choose a leaderboard</Trans>
        </InvalidParameterValue>
      );
    }
  }

// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
  return <span>{getInlineParameterDisplayValue(leaderboards, value)}</span>;
};

export const renderInlineLeaderboardIdField = (
  props: ParameterInlineRendererProps
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
) => <InlineLeaderboardIdField {...props} />;
