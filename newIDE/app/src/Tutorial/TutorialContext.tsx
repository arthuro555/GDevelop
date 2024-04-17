import * as React from 'react';
import { listAllTutorials, Tutorial } from '../Utils/GDevelopServices/Tutorial';

type TutorialState = {
  tutorials: Array<Tutorial> | null | undefined;
  fetchTutorials: () => void;
  error: Error | null | undefined;
};

export const TutorialContext = React.createContext<TutorialState>({
  tutorials: null,
  fetchTutorials: () => {},
  error: null,
});

type TutorialStateProviderProps = {
  children: React.ReactNode;
};

export const TutorialStateProvider = ({
  children,
}: TutorialStateProviderProps) => {
  const [tutorials, setTutorials] = React.useState<
    Tutorial[] | null | undefined
  >(null);
  const [error, setError] = React.useState<Error | null | undefined>(null);
  const isLoading = React.useRef<boolean>(false);

  const fetchTutorials = React.useCallback(() => {
    // Don't attempt to load again tutorials if they
    // were loaded already.
    if (tutorials || isLoading.current) return;

    (async () => {
      setError(null);
      isLoading.current = true;

      try {
        const allTutorials: Array<Tutorial> = await listAllTutorials();

        console.info(
          `Loaded ${allTutorials ? allTutorials.length : 0} tutorials.`
        );
        setTutorials(allTutorials);
      } catch (error) {
        console.error(`Unable to load the tutorials:`, error);
// @ts-expect-error - TS2345 - Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<Error | null | undefined>'.
        setError(error);
      }

      isLoading.current = false;
    })();
  }, [tutorials, isLoading]);

  const tutorialState = React.useMemo(
    () => ({
      tutorials,
      fetchTutorials,
      error,
    }),
    [tutorials, fetchTutorials, error]
  );

  return (
    <TutorialContext.Provider value={tutorialState}>
      {children}
    </TutorialContext.Provider>
  );
};
