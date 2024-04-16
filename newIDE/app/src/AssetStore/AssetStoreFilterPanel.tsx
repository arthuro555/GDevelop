import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS6142 - Module '../UI/Accordion' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Accordion.tsx', but '--jsx' is not set.
import { Accordion, AccordionHeader, AccordionBody } from '../UI/Accordion';
// @ts-expect-error - TS6142 - Module '../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../UI/Text';
// @ts-expect-error - TS6142 - Module '../UI/InlineCheckbox' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/InlineCheckbox.tsx', but '--jsx' is not set.
import InlineCheckbox from '../UI/InlineCheckbox';
// @ts-expect-error - TS6142 - Module '../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ColumnStackLayout } from '../UI/Layout';
import {
  TagAssetStoreSearchFilter,
  AnimatedAssetStoreSearchFilter,
  ObjectTypeAssetStoreSearchFilter,
  LicenseAssetStoreSearchFilter,
  DimensionAssetStoreSearchFilter,
  ColorAssetStoreSearchFilter,
  AssetPackTypeStoreSearchFilter,
} from './AssetStoreSearchFilter';
// @ts-expect-error - TS6142 - Module './AssetStoreContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/AssetStoreContext.tsx', but '--jsx' is not set.
import { AssetStoreContext } from './AssetStoreContext';
// @ts-expect-error - TS6142 - Module '../UI/FlatButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/FlatButton.tsx', but '--jsx' is not set.
import FlatButton from '../UI/FlatButton';
// @ts-expect-error - TS6142 - Module '../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Line, Column } from '../UI/Grid';
import { RGBColor } from '../Utils/ColorTransformer';
// @ts-expect-error - TS6142 - Module './HexColorField' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/AssetStore/HexColorField.tsx', but '--jsx' is not set.
import { HexColorField } from './HexColorField';
// @ts-expect-error - TS6142 - Module '../UI/Slider' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Slider.tsx', but '--jsx' is not set.
import Slider from '../UI/Slider';
import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';

type Choice = {
  label: React.ReactNode,
  value: string
};

type MultipleChoiceFilterProps = {
  filterKey: string,
  title: React.ReactNode | null | undefined,
  choices: Choice[],
  isChoiceChecked: (choice: string) => boolean,
  setChoiceChecked: (choice: string, checked: boolean) => void
};

const MultipleChoiceFilter = ({
  filterKey,
  title,
  choices,
  isChoiceChecked,
  setChoiceChecked,
}: MultipleChoiceFilterProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Accordion key={filterKey} defaultExpanded>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text displayInlineAsSpan>{title}</Text>
          </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <ColumnStackLayout>
              {choices.map(tag => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <InlineCheckbox
                  key={tag.value}
                  label={i18n._(tag.label)}
                  checked={isChoiceChecked(tag.value)}
// @ts-expect-error - TS7006 - Parameter 'e' implicitly has an 'any' type. | TS7006 - Parameter 'checked' implicitly has an 'any' type.
                  onCheck={(e, checked) => setChoiceChecked(tag.value, checked)}
                />
              ))}
            </ColumnStackLayout>
          </AccordionBody>
        </Accordion>
      )}
    </I18n>
  );
};

type SetFilterProps = {
  filterKey: string,
  title: React.ReactNode | null | undefined,
  choices: Choice[],
  values: Set<string>,
  setValues: (arg1: Set<string>) => void
};

const SetFilter = ({
  filterKey,
  title,
  choices,
  values,
  setValues,
}: SetFilterProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <MultipleChoiceFilter
      filterKey={filterKey}
      title={title}
      choices={choices}
      isChoiceChecked={choice => values.has(choice)}
      setChoiceChecked={(choice, checked) => {
        if (checked) {
          values.add(choice);
        } else {
          values.delete(choice);
        }
        setValues(values);
      }}
    />
  );
};

type TagFilterProps = {
  filterKey: string,
  title: React.ReactNode | null | undefined,
  choices: Choice[],
  searchFilter: TagAssetStoreSearchFilter,
  setSearchFilter: (arg1: TagAssetStoreSearchFilter) => void,
  onFilterChange: () => void
};

const TagFilter = ({
  filterKey,
  title,
  choices,
  searchFilter,
  setSearchFilter,
  onFilterChange,
}: TagFilterProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <SetFilter
      filterKey={filterKey}
      title={title}
      choices={choices}
      values={searchFilter.tags}
      setValues={values => {
        setSearchFilter(new TagAssetStoreSearchFilter(values));
        onFilterChange();
      }}
    />
  );
};

type RangeFilterProps = {
  filterKey: string,
  title: React.ReactNode | null | undefined,
  min: number,
  max: number,
  step: number,
  scale: (arg1: number) => number,
  range: [number, number],
  setRange: (arg1: [number, number]) => void
};

const RangeFilter = ({
  filterKey,
  title,
  min,
  max,
  scale,
  step,
  range,
  setRange,
}: RangeFilterProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Accordion key={filterKey} defaultExpanded>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text displayInlineAsSpan>{title}</Text>
          </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Slider
                  value={range}
                  min={min}
                  max={max}
                  step={step}
                  scale={scale}
                  marks={true}
                  valueLabelDisplay="auto"
// @ts-expect-error - TS7006 - Parameter 'newValue' implicitly has an 'any' type.
                  onChange={newValue => setRange(newValue)}
                />
              </Line>
            </Column>
          </AccordionBody>
        </Accordion>
      )}
    </I18n>
  );
};

type ColorFilterProps = {
  filterKey: string,
  title: React.ReactNode | null | undefined,
  color: RGBColor | null,
  setColor: (arg1: RGBColor | null) => void
};

const ColorFilter = ({
  filterKey,
  title,
  color,
  setColor,
}: ColorFilterProps) => {
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Accordion key={filterKey} defaultExpanded>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Text displayInlineAsSpan>{title}</Text>
          </AccordionHeader>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <AccordionBody>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column expand>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <HexColorField
                  disableAlpha
                  fullWidth
                  color={color}
                  onChange={setColor}
                />
              </Line>
            </Column>
          </AccordionBody>
        </Accordion>
      )}
    </I18n>
  );
};

export const AssetStoreFilterPanel = () => {
  const {
    assetFiltersState,
    assetPackFiltersState,
    clearAllFilters,
    shopNavigationState,
  } = React.useContext(AssetStoreContext);
  const { receivedAssetPacks } = React.useContext(AuthenticatedUserContext);
  const onChoiceChange = React.useCallback(
    () => {
      shopNavigationState.openSearchResultPage();
    },
    [shopNavigationState]
  );
  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MultipleChoiceFilter
        filterKey="PackType"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Pack type</Trans>}
        choices={[
          { label: t`Free`, value: 'free' },
          { label: t`Premium`, value: 'premium' },
          { label: t`Owned`, value: 'owned' },
        ]}
        isChoiceChecked={choice =>
          (choice === 'free' && assetPackFiltersState.typeFilter.isFree) ||
          (choice === 'premium' &&
            assetPackFiltersState.typeFilter.isPremium) ||
          (choice === 'owned' && assetPackFiltersState.typeFilter.isOwned)
        }
        setChoiceChecked={(choice, checked) => {
          const typeFilter = assetPackFiltersState.typeFilter;
          const isFree = choice === 'free' ? checked : typeFilter.isFree;
          const isPremium =
            choice === 'premium' ? checked : typeFilter.isPremium;
          const isOwned = choice === 'owned' ? checked : typeFilter.isOwned;
          assetPackFiltersState.setTypeFilter(
            new AssetPackTypeStoreSearchFilter({
              isFree,
              isPremium,
              isOwned,
              receivedAssetPacks,
            })
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MultipleChoiceFilter
        filterKey="Animation"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Animation</Trans>}
        choices={[
          { label: t`Multiple frames`, value: 'multiple-frames' },
          { label: t`Multiple states`, value: 'multiple-states' },
        ]}
        isChoiceChecked={choice =>
          (choice === 'multiple-frames' &&
            assetFiltersState.animatedFilter.mustBeAnimated) ||
          (choice === 'multiple-states' &&
            assetFiltersState.animatedFilter.mustHaveSeveralState)
        }
        setChoiceChecked={(choice, checked) => {
          const animatedFilter = assetFiltersState.animatedFilter;
          const mustBeAnimated =
            choice === 'multiple-frames'
              ? checked
              : animatedFilter.mustBeAnimated;
          const mustHaveSeveralState =
            choice === 'multiple-states'
              ? checked
              : animatedFilter.mustHaveSeveralState;
          assetFiltersState.setAnimatedFilter(
            new AnimatedAssetStoreSearchFilter(
              mustBeAnimated,
              mustHaveSeveralState
            )
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <TagFilter
        filterKey="Viewpoint"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Viewpoint</Trans>}
        choices={[
          { label: t`Top-down`, value: 'top-down' },
          { label: t`Side view`, value: 'side view' },
          { label: t`Isometric`, value: 'isometric' },
        ]}
        searchFilter={assetFiltersState.viewpointFilter}
        setSearchFilter={assetFiltersState.setViewpointFilter}
        onFilterChange={onChoiceChange}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <RangeFilter
        filterKey="PixelSize"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Pixel size</Trans>}
        min={Math.log2(DimensionAssetStoreSearchFilter.boundMin)}
        max={Math.log2(DimensionAssetStoreSearchFilter.boundMax)}
        step={0.5}
        scale={x => Math.round(2 ** x)}
        range={[
          Math.log2(assetFiltersState.dimensionFilter.dimensionMin),
          Math.log2(assetFiltersState.dimensionFilter.dimensionMax),
        ]}
        setRange={range => {
          assetFiltersState.setDimensionFilter(
            new DimensionAssetStoreSearchFilter(2 ** range[0], 2 ** range[1])
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <SetFilter
        filterKey="ObjectType"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Type of objects</Trans>}
        choices={[
          { label: t`Sprite`, value: 'sprite' },
          { label: t`Tiled sprite`, value: 'tiled' },
          { label: t`Panel sprite`, value: '9patch' },
          { label: t`3D model`, value: 'Scene3D::Model3DObject' },
        ]}
        values={assetFiltersState.objectTypeFilter.objectTypes}
        setValues={values => {
          assetFiltersState.setObjectTypeFilter(
            new ObjectTypeAssetStoreSearchFilter(values)
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <ColorFilter
        filterKey="Color"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>Color</Trans>}
        color={assetFiltersState.colorFilter.color}
        setColor={color => {
          assetFiltersState.setColorFilter(
            new ColorAssetStoreSearchFilter(color)
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <MultipleChoiceFilter
        filterKey="License"
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        title={<Trans>License</Trans>}
        choices={[
          {
            label: t`Exclude attribution requirements`,
            value: 'without-attribution',
          },
        ]}
        isChoiceChecked={choice =>
          assetFiltersState.licenseFilter.attributionFreeOnly
        }
        setChoiceChecked={(choice, checked) => {
          assetFiltersState.setLicenseFilter(
            new LicenseAssetStoreSearchFilter(checked)
          );
          onChoiceChange();
        }}
      />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
      <Line justifyContent="center">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
        <FlatButton
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
          label={<Trans>Clear all filters</Trans>}
          primary={false}
          onClick={() => {
            clearAllFilters();
            onChoiceChange();
          }}
        />
      </Line>
    </Column>
  );
};
