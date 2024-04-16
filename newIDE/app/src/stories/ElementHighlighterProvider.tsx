import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout, ResponsiveLineStackLayout } from '../UI/Layout';
// @ts-expect-error - TS6142 - Module '../UI/Toggle' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Toggle.tsx', but '--jsx' is not set.
import Toggle from '../UI/Toggle';
// @ts-expect-error - TS6142 - Module '../InAppTutorial/InAppTutorialElementHighlighter' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/InAppTutorialElementHighlighter.tsx', but '--jsx' is not set.
import InAppTutorialElementHighlighter from '../InAppTutorial/InAppTutorialElementHighlighter';
// @ts-expect-error - TS6142 - Module '../UI/CompactSelectField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CompactSelectField/index.tsx', but '--jsx' is not set.
import CompactSelectField from '../UI/CompactSelectField';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../UI/Grid';

type Props = {
  elements: {
    label: string,
    id: string
  }[],
  children: React.ReactNode
};

const ElementHighlighterProvider = (props: Props) => {
  const [
    shouldHighlightField,
    setShouldHighlightField,
  ] = React.useState<boolean>(false);
  const [
    elementToHighlightId,
    setElementToHighlightId,
  ] = React.useState<string | null | undefined>(props.elements[0] ? props.elements[0].id : null);
  const [elementToHighlight, setElementToHighlight] = React.useState<any>(null);
  React.useEffect(
    () => {
      if (!shouldHighlightField) {
        setElementToHighlight(null);
        return;
      }
      const element = elementToHighlightId
        ? document.getElementById(elementToHighlightId)
        : null;
      setElementToHighlight(element);
    },
    [elementToHighlightId, shouldHighlightField]
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColumnStackLayout noMargin>
        {props.children}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <ResponsiveLineStackLayout noMargin expand noColumnMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Toggle
              label="Highlight field"
              labelPosition="right"
              toggled={shouldHighlightField}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'active' implicitly has an 'any' type.
              onToggle={(e, active) => setShouldHighlightField(active)}
            />
          </Column>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column expand noMargin justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <CompactSelectField
              value={elementToHighlightId || ''}
              onChange={setElementToHighlightId}
            >
              {props.elements.map(element => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <option
                  label={element.label}
                  value={element.id}
                  key={element.id}
                />
              ))}
            </CompactSelectField>
          </Column>
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>
      {elementToHighlight && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <InAppTutorialElementHighlighter element={elementToHighlight} />
      )}
    </>
  );
};

export default ElementHighlighterProvider;
