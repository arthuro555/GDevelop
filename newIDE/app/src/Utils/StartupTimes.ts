type RawStepMeasure = [string, number];
type SummarizedStep = {
  stepName: string;
  time: number;
  elapsedTime: number;
};
type Summary = {
  totalStartupTime: number;
  steps: Array<SummarizedStep>;
};

export const GD_STARTUP_TIMES: Array<RawStepMeasure> = global.GD_STARTUP_TIMES;

if (!GD_STARTUP_TIMES) {
  console.error(
    'Could not find GD_STARTUP_TIMES array. Have you declared it in index.html, in a synchronous script?'
  );
}

export const getStartupTimesSummary = (): Summary => {
  let previousStep = ['<init>', 0];

  let steps = GD_STARTUP_TIMES.map((step) => {
    const stepSummary = {
      stepName: step[0],
      time: step[1],
      // @ts-expect-error - TS2363 - The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
      elapsedTime: step[1] - previousStep[1],
    } as const;

    previousStep = step;
    return stepSummary;
  });

  return {
    steps,
    // @ts-expect-error - TS2322 - Type 'string | number' is not assignable to type 'number'.
    totalStartupTime: previousStep[1],
  };
};
