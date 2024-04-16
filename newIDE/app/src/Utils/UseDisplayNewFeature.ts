import * as React from 'react';
// @ts-expect-error - TS6142 - Module '../MainFrame/Preferences/PreferencesContext' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/MainFrame/Preferences/PreferencesContext.tsx', but '--jsx' is not set.
import PreferencesContext from '../MainFrame/Preferences/PreferencesContext';
import { getProgramOpeningCount } from './Analytics/LocalStats';

const featuresDisplaySettings = {
  gamesDashboardInProjectManager: {
    count: 2,
    intervalInDays: 7,
    minimumProgramOpeningCount: 10,
  },
  gamesDashboardInHomePage: {
    count: 2,
    intervalInDays: 7,
    minimumProgramOpeningCount: 10,
  },
} as const;

const ONE_DAY = 24 * 3600 * 1000;

type Feature = string;

const useDisplayNewFeature = () => {
  const {
    values: { newFeaturesAcknowledgements },
    setNewFeaturesAcknowledgements,
  } = React.useContext(PreferencesContext);

  const shouldDisplayNewFeatureHighlighting = React.useCallback(
    (
      {
        featureId,
      }: {
        featureId: Feature
      },
    ): boolean => {
      const programOpeningCount = getProgramOpeningCount();
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly gamesDashboardInProjectManager: { readonly count: 2; readonly intervalInDays: 7; readonly minimumProgramOpeningCount: 10; }; readonly gamesDashboardInHomePage: { readonly count: 2; readonly intervalInDays: 7; readonly minimumProgramOpeningCount: 10; }; }'.
      const settings = featuresDisplaySettings[featureId];
      if (!settings) return false;

      const { count, intervalInDays, minimumProgramOpeningCount } = settings;

      const acknowledgments = newFeaturesAcknowledgements[featureId];
      if (!acknowledgments)
        return programOpeningCount > minimumProgramOpeningCount;

      const { dates } = acknowledgments;
      if (dates.length >= count) return false;

      const lastDate = dates[dates.length - 1];

      return (
        programOpeningCount > minimumProgramOpeningCount &&
        Date.now() > lastDate + intervalInDays * ONE_DAY
      );
    },
    [newFeaturesAcknowledgements]
  );

  const acknowledgeNewFeature = React.useCallback(
    ({
      featureId,
    }: {
      featureId: Feature
    }) => {
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly gamesDashboardInProjectManager: { readonly count: 2; readonly intervalInDays: 7; readonly minimumProgramOpeningCount: 10; }; readonly gamesDashboardInHomePage: { readonly count: 2; readonly intervalInDays: 7; readonly minimumProgramOpeningCount: 10; }; }'.
      if (!featuresDisplaySettings[featureId]) return;

      const acknowledgments = newFeaturesAcknowledgements[featureId];
      if (!acknowledgments) {
        setNewFeaturesAcknowledgements({
          ...newFeaturesAcknowledgements,
          [featureId]: { dates: [Date.now()] },
        });
        return;
      }
      setNewFeaturesAcknowledgements({
        ...newFeaturesAcknowledgements,
        [featureId]: {
          ...acknowledgments,
          dates: [...acknowledgments.dates, Date.now()],
        },
      });
    },
    [newFeaturesAcknowledgements, setNewFeaturesAcknowledgements]
  );

  return {
    shouldDisplayNewFeatureHighlighting,
    acknowledgeNewFeature,
  };
};

export default useDisplayNewFeature;
