import * as React from 'react';
import { action } from '@storybook/addon-actions';
// @ts-expect-error - TS6142 - Module '../../PaperDecorator' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/PaperDecorator.tsx', but '--jsx' is not set.
import paperDecorator from '../../PaperDecorator';
// @ts-expect-error - TS6142 - Module '../../../InAppTutorial/InAppTutorialElementHighlighter' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/InAppTutorialElementHighlighter.tsx', but '--jsx' is not set.
import InAppTutorialElementHighlighter from '../../../InAppTutorial/InAppTutorialElementHighlighter';
// @ts-expect-error - TS6142 - Module '../../../InAppTutorial/InAppTutorialTooltipDisplayer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/InAppTutorialTooltipDisplayer.tsx', but '--jsx' is not set.
import InAppTutorialTooltipDisplayer from '../../../InAppTutorial/InAppTutorialTooltipDisplayer';
// @ts-expect-error - TS6142 - Module '../../../UI/RaisedButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/RaisedButton.tsx', but '--jsx' is not set.
import RaisedButton from '../../../UI/RaisedButton';
// @ts-expect-error - TS6142 - Module '../../../UI/ScrollView' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/ScrollView.tsx', but '--jsx' is not set.
import ScrollView from '../../../UI/ScrollView';
// @ts-expect-error - TS6142 - Module '../../../UI/SemiControlledTextField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SemiControlledTextField.tsx', but '--jsx' is not set.
import SemiControlledTextField from '../../../UI/SemiControlledTextField';
import {
  ResponsiveLineStackLayout,
  ColumnStackLayout,
// @ts-expect-error - TS6142 - Module '../../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
} from '../../../UI/Layout';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// @ts-expect-error - TS6142 - Module '../../FixedHeightFlexContainer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/stories/FixedHeightFlexContainer.tsx', but '--jsx' is not set.
import FixedHeightFlexContainer from '../../FixedHeightFlexContainer';
// @ts-expect-error - TS6142 - Module '../../../UI/List' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/List.tsx', but '--jsx' is not set.
import { List, ListItem } from '../../../UI/List';
// @ts-expect-error - TS6142 - Module '../../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column } from '../../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../../InAppTutorial/InAppTutorialStepDisplayer' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/InAppTutorial/InAppTutorialStepDisplayer.tsx', but '--jsx' is not set.
import { queryElementOrItsMostVisuallySignificantParent } from '../../../InAppTutorial/InAppTutorialStepDisplayer';
// @ts-expect-error - TS6142 - Module '../../../UI/SearchBar' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/SearchBar.tsx', but '--jsx' is not set.
import SearchBar from '../../../UI/SearchBar';

export default {
  title: 'In-app tutorial/ElementHighlighterAndTooltipDisplayer',
  component: InAppTutorialElementHighlighter,
  decorators: [paperDecorator],
};

const elementIdToTooltip = {
  '#add-parameter-button': {
    title: 'This is the title',
    description: 'This is the description',
    placement: 'bottom',
  },
  '#add-event-primary-button': {
    title: 'Title only',
    placement: 'right',
  },
  '#input': {
    description: 'Description only (without quit button)',
    placement: 'left',
  },
  '#multiline-input': {
    description: 'Description with `selectable [code]`.',
    placement: 'left',
  },
  '#search-bar': {
    description: 'Highlight a search bar.',
    placement: 'top',
  },
  'element-in-list': {
    description:
      'It should disappear when element not visible, and an **arrow** should appear to show the direction where to scroll.',
  },
} as const;

const elementIdToShowQuitButton = {
  '#add-parameter-button': true,
  '#add-event-primary-button': true,
  '#input': false,
  'element-in-list': true,
} as const;

export const Default = () => {
  const [listItemRef, setListItemRef] = React.useState<any>(null);
  const [elementToHighlight, setElementToHighlight] = React.useState<any>(null);
  const [textFieldValue, setTextFieldValue] = React.useState<string>('Object.Variable');
  const [searchValue, setSearchValue] = React.useState<string>('Search me');
  const [multilineInputValue, setMultilineInputValue] = React.useState<string>("First layout\nThis is what we're gonna do");
  const [
    elementToHighlightId,
    setElementToHighlightId,
  ] = React.useState<string>('#add-parameter-button');

// @ts-expect-error - TS1005 - ',' expected. | TS7005 - Variable 'any' implicitly has an 'any' type. | TS1005 - ';' expected.
  const handleSelect = event: any => {
    const {
// @ts-expect-error - TS2339 - Property 'target' does not exist on type 'Event | undefined'.
      target: { value },
    } = event;
    setElementToHighlightId(event.target.value);
    if (value === 'element-in-list') {
      setElementToHighlight(listItemRef);
    }
  };

  React.useEffect(
    () => {
      if (elementToHighlightId.startsWith('#')) {
        setElementToHighlight(
          queryElementOrItsMostVisuallySignificantParent(elementToHighlightId)
        );
      }
    },
    [elementToHighlightId]
  );

  return (
    <>
      <ColumnStackLayout useLargeSpacer>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={elementToHighlightId}
          onChange={handleSelect}
          style={{ flexDirection: 'row' }}
        >
          <FormControlLabel
            value="#add-parameter-button"
            control={<Radio />}
            label="Parameter button"
          />
          <FormControlLabel
            value="#add-event-primary-button"
            control={<Radio />}
            label="Event button"
          />
          <FormControlLabel
            value="#input"
            control={<Radio />}
            label="Textfield"
          />
          <FormControlLabel
            value="#multiline-input"
            control={<Radio />}
            label="Multiline textfield"
          />
          <FormControlLabel
            value="#search-bar"
            control={<Radio />}
            label="Search bar"
          />
          <FormControlLabel
            value="element-in-list"
            control={<Radio />}
            label="Element in list"
          />
        </RadioGroup>
        <ResponsiveLineStackLayout useLargeSpacer>
          <ColumnStackLayout expand>
            <RaisedButton
              id="add-parameter-button"
              label="Add parameter"
              onClick={() => action('onClick parameter')()}
            />
            <RaisedButton
              primary
              id="add-event-primary-button"
              label="Add event"
              onClick={() => action('onClick event')()}
            />
          </ColumnStackLayout>
          <ColumnStackLayout expand>
            <SemiControlledTextField
              id="input"
              onChange={setTextFieldValue}
              value={textFieldValue}
            />
          </ColumnStackLayout>
        </ResponsiveLineStackLayout>
        <ResponsiveLineStackLayout>
          <Column expand>
            <FixedHeightFlexContainer height={150}>
              <ScrollView>
                <List>
                  <ListItem primaryText="First choice" />
                  <ListItem primaryText="Another choice" />
                  <ListItem primaryText="Choice paradox hits" />
                  <ListItem
                    primaryText="I want this one"
                    ref={ref => setListItemRef(ref)}
                  />
                  <ListItem primaryText="Why not me?" />
                  <ListItem primaryText="There's a choice to do?" />
                  <ListItem primaryText="No one told me" />
                  <ListItem primaryText="I don't have time for that" />
                  <ListItem primaryText="Near the end" />
                  <ListItem primaryText="Last but not least" />
                </List>
              </ScrollView>
            </FixedHeightFlexContainer>
          </Column>
          <ColumnStackLayout expand>
            <SemiControlledTextField
              multiline
              floatingLabelText="Multiline input"
              id="multiline-input"
              onChange={setMultilineInputValue}
              value={multilineInputValue}
            />
            <SearchBar
              id="search-bar"
              onRequestSearch={() => action('search')()}
              onChange={setSearchValue}
              value={searchValue}
            />
          </ColumnStackLayout>
        </ResponsiveLineStackLayout>
      </ColumnStackLayout>

      {elementToHighlight && (
        <>
          <InAppTutorialElementHighlighter element={elementToHighlight} />
          <InAppTutorialTooltipDisplayer
            anchorElement={elementToHighlight}
            tooltip={elementIdToTooltip[elementToHighlightId]}
            showQuitButton={elementIdToShowQuitButton[elementToHighlightId]}
            progress={28}
            endTutorial={() => action('end tutorial')()}
            goToNextStep={() => action('go to next step')()}
          />
        </>
      )}
    </>
  );
// @ts-expect-error - TS1128 - Declaration or statement expected.
};
