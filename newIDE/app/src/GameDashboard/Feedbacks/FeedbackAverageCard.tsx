import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';

// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/Card' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Card.tsx', but '--jsx' is not set.
import Card from '../../UI/Card';

// @ts-expect-error - TS6142 - Module './Rating' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/Rating.tsx', but '--jsx' is not set.
import Rating from './Rating';

import {
  Comment,
  GameRatings,
} from '../../Utils/GDevelopServices/Play';
// @ts-expect-error - TS6142 - Module './FeedbackCard' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/FeedbackCard.tsx', but '--jsx' is not set.
import { getRatings } from './FeedbackCard';

type Props = {
  feedbacks: Array<Comment>
};

const FeedbackAverageCard = ({
  feedbacks,
}: Props) => {
  if (feedbacks.length === 0) return null;

  const ratings = feedbacks.map(feedback => feedback.ratings).filter(Boolean);
  const ratingsSum: GameRatings = ratings.reduce(
    (acc, rating) => {
      if (!rating) return acc;
      return {
        sound: acc.sound + rating.sound,
        visuals: acc.visuals + rating.visuals,
        fun: acc.fun + rating.fun,
        easeOfUse: acc.easeOfUse + rating.easeOfUse,
        version: 1,
      };
    },
    { sound: 0, visuals: 0, fun: 0, easeOfUse: 0, version: 1 }
  );
  const averageRatingValues = {
    sound: ratingsSum.sound / ratings.length,
    visuals: ratingsSum.visuals / ratings.length,
    fun: ratingsSum.fun / ratings.length,
    easeOfUse: ratingsSum.easeOfUse / ratings.length,
    version: 1,
  } as const;
  const displayedRatings = getRatings(averageRatingValues);

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <Card background="dark">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Line noMargin justifyContent="space-between" alignItems="start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Text color="primary" size="block-title">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Trans>Average user feedback</Trans>
                </Text>
              </Column>
            </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Spacer />
            {displayedRatings && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <ResponsiveLineStackLayout noColumnMargin expand>
{ /* @ts-expect-error - TS7006 - Parameter 'rating' implicitly has an 'any' type. */}
                {displayedRatings.map(rating => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                  <Line expand noMargin key={rating.key}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Rating label={rating.label} value={rating.value} />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                    <Spacer />
                  </Line>
                ))}
              </ResponsiveLineStackLayout>
            )}
          </Column>
        </Card>
      )}
    </I18n>
  );
};

export default FeedbackAverageCard;
