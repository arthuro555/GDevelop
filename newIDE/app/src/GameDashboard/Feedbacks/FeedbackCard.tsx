import * as React from 'react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/macro'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/macro/index.js' implicitly has an 'any' type.
import { t, Trans } from '@lingui/macro';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/react'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/react/index.js' implicitly has an 'any' type.
import { I18n } from '@lingui/react';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '@lingui/core'. '/home/arthuro555/code/GDevelop/newIDE/app/node_modules/@lingui/core/index.js' implicitly has an 'any' type.
import { I18n as I18nType } from '@lingui/core';

// @ts-expect-error - TS6142 - Module '../../UI/Layout' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Layout.tsx', but '--jsx' is not set.
import { LineStackLayout, ResponsiveLineStackLayout } from '../../UI/Layout';
// @ts-expect-error - TS6142 - Module '../../UI/Text' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Text.tsx', but '--jsx' is not set.
import Text from '../../UI/Text';
// @ts-expect-error - TS6142 - Module '../../UI/Grid' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Grid.tsx', but '--jsx' is not set.
import { Column, LargeSpacer, Line, Spacer } from '../../UI/Grid';
// @ts-expect-error - TS6142 - Module '../../UI/IconButton' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/IconButton.tsx', but '--jsx' is not set.
import IconButton from '../../UI/IconButton';
import GDevelopThemeContext from '../../UI/Theme/GDevelopThemeContext';
// @ts-expect-error - TS6142 - Module '../../UI/Card' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Card.tsx', but '--jsx' is not set.
import Card from '../../UI/Card';
// @ts-expect-error - TS6142 - Module '../../UI/BackgroundText' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/BackgroundText.tsx', but '--jsx' is not set.
import BackgroundText from '../../UI/BackgroundText';
import { showErrorBox } from '../../UI/Messages/MessageBox';

// @ts-expect-error - TS6142 - Module './Rating' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/GameDashboard/Feedbacks/Rating.tsx', but '--jsx' is not set.
import Rating from './Rating';

import {
  shortenUuidForDisplay,
  updateComment,
  Comment,
  GameRatings,
} from '../../Utils/GDevelopServices/Play';
import { AuthenticatedUser } from '../../Profile/AuthenticatedUserContext';
import { useOptimisticState } from '../../Utils/UseOptimisticState';
// @ts-expect-error - TS6142 - Module '../../UI/Link' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/Link.tsx', but '--jsx' is not set.
import Link from '../../UI/Link';
// @ts-expect-error - TS6142 - Module '../../Profile/PublicProfileDialog' was resolved to '/home/arthuro555/code/GDevelop/newIDE/app/src/Profile/PublicProfileDialog.tsx', but '--jsx' is not set.
import PublicProfileDialog from '../../Profile/PublicProfileDialog';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CheckCircleFilled'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircleFilled.js' implicitly has an 'any' type.
import CheckCircleFilled from '../../UI/CustomSvgIcons/CheckCircleFilled';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/CheckCircle'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/CheckCircle.js' implicitly has an 'any' type.
import CheckCircle from '../../UI/CustomSvgIcons/CheckCircle';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Dislike'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Dislike.js' implicitly has an 'any' type.
import Dislike from '../../UI/CustomSvgIcons/Dislike';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Like'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Like.js' implicitly has an 'any' type.
import Like from '../../UI/CustomSvgIcons/Like';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Danger'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Danger.js' implicitly has an 'any' type.
import Danger from '../../UI/CustomSvgIcons/Danger';
// @ts-expect-error - TS7016 - Could not find a declaration file for module '../../UI/CustomSvgIcons/Heart'. '/home/arthuro555/code/GDevelop/newIDE/app/src/UI/CustomSvgIcons/Heart.js' implicitly has an 'any' type.
import Heart from '../../UI/CustomSvgIcons/Heart';

const styles = {
  textComment: { whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' },
  backgroundText: { padding: 0, textAlign: 'left' },
} as const;

type BuildProperties = {
  id: string,
  name?: string,
  isDeleted?: boolean
};
type Props = {
  comment: Comment,
  buildProperties?: BuildProperties,
  authenticatedUser: AuthenticatedUser,
  onCommentUpdated: (comment: Comment) => void
};

export const getRatings = (ratings?: GameRatings | null) => {
  if (!ratings) return null;
  if (ratings.version === 1) {
    return [
      {
        key: 'rating-sound',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Sound</Trans>,
        value: ratings.sound,
      },
      {
        key: 'rating-visuals',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Visuals</Trans>,
        value: ratings.visuals,
      },
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
      { key: 'rating-fun', label: <Trans>Fun</Trans>, value: ratings.fun },
      {
        key: 'rating-ease-of-use',
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        label: <Trans>Ease of use</Trans>,
        value: ratings.easeOfUse,
      },
    ];
  }
};

const FeedbackCard = ({
  comment,
  buildProperties,
  authenticatedUser,
  onCommentUpdated,
}: Props) => {
  const { getAuthorizationHeader, profile } = authenticatedUser;
  const ratings = getRatings(comment.ratings);
  const theme = React.useContext(GDevelopThemeContext);

  const [
    openPlayerPublicProfileDialog,
    setOpenPlayerPublicProfileDialog,
  ] = React.useState<boolean>(false);

  const processComment = async (newProcessed: boolean, i18n: I18nType) => {
    if (!profile) return;
    try {
      const updatedComment: Comment = await updateComment(
        getAuthorizationHeader,
        profile.id,
        {
          gameId: comment.gameId,
          commentId: comment.id,
          processed: newProcessed,
        }
      );
      onCommentUpdated(updatedComment);
    } catch (error: any) {
      console.error(`Unable to update comment: `, error);
      showErrorBox({
        message:
          i18n._(t`Unable to change read status of feedback.`) +
          ' ' +
          i18n._(t`Verify your internet connection or try again later.`),
        rawError: error,
        errorId: 'feedback-card-set-processed-error',
      });
    }
  };

  const [processed, setProcessed] = useOptimisticState(
    !!comment.processedAt,
    processComment
  );

  const [ownerQualityRating, setOwnerQualityRating] = useOptimisticState(
    (comment.qualityRatingPerRole && comment.qualityRatingPerRole.owner) ||
      null,
    async (qualityRating, i18n) => {
      if (!profile) return;
      try {
        const updatedComment: Comment = await updateComment(
          getAuthorizationHeader,
          profile.id,
          {
            gameId: comment.gameId,
            commentId: comment.id,
            qualityRating,
          }
        );
        onCommentUpdated(updatedComment);
      } catch (error: any) {
        console.error(`Unable to update comment: `, error);
        showErrorBox({
          message:
            i18n._(t`Unable to change quality rating of feedback.`) +
            ' ' +
            i18n._(t`Verify your internet connection or try again later.`),
          rawError: error,
          errorId: 'feedback-card-set-quality-rating-error',
        });
      }
    }
  );

  return (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
    <I18n>
{ /* @ts-expect-error - TS7031 - Binding element 'i18n' implicitly has an 'any' type. */}
      {({ i18n }) => (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
        <>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
          <Card
            disabled={processed}
            cardCornerAction={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <LineStackLayout noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  tooltip={t`Rank this comment as great`}
                  onClick={() => setOwnerQualityRating('great', i18n)}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Heart
                    htmlColor={
                      ownerQualityRating === 'great'
                        ? theme.message.valid
                        : undefined
                    }
                  />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  tooltip={t`Rank this comment as good`}
                  onClick={() => setOwnerQualityRating('good', i18n)}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Like
                    htmlColor={
                      ownerQualityRating === 'good'
                        ? theme.message.valid
                        : undefined
                    }
                  />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  tooltip={t`Rank this comment as bad`}
                  onClick={() => setOwnerQualityRating('bad', i18n)}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Dislike
                    htmlColor={
                      ownerQualityRating === 'bad'
                        ? theme.message.warning
                        : undefined
                    }
                  />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  tooltip={t`Report this comment as abusive, harmful or spam`}
                  onClick={() => setOwnerQualityRating('harmful', i18n)}
                >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                  <Danger
                    htmlColor={
                      ownerQualityRating === 'harmful'
                        ? theme.message.error
                        : undefined
                    }
                  />
                </IconButton>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <IconButton
                  size="small"
                  tooltip={processed ? t`Mark as unread` : t`Mark as read`}
                  onClick={() => setProcessed(!processed, i18n)}
                >
                  {processed ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <CheckCircleFilled htmlColor={theme.message.valid} />
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <CheckCircle />
                  )}
                </IconButton>
              </LineStackLayout>
            }
            header={
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
              <BackgroundText style={styles.backgroundText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Trans>{i18n.date(comment.createdAt)}</Trans>
              </BackgroundText>
            }
          >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
            <Column noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Line noMargin justifyContent="space-between" alignItems="start">
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                <Column noMargin>
                  {buildProperties && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Text color="primary">
                      {buildProperties.name ||
                        shortenUuidForDisplay(buildProperties.id)}
                      {buildProperties.isDeleted && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                        <>
                          {' '}
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                          <Trans>(deleted)</Trans>
                        </>
                      )}
                    </Text>
                  )}
                  {comment.playerId ? (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <Link
                      onClick={() => setOpenPlayerPublicProfileDialog(true)}
                      href="#"
                    >
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text noMargin color="inherit">
                        {comment.playerName || 'Anonymous player'}
                      </Text>
                    </Link>
                  ) : (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <BackgroundText style={styles.backgroundText}>
                      {comment.playerName || 'Anonymous player'}
                    </BackgroundText>
                  )}
                  {comment.contact && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                    <LineStackLayout alignItems="center" noMargin>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <BackgroundText style={styles.backgroundText}>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                        <Trans>Contact:</Trans>
                      </BackgroundText>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
                      <Text allowSelection>{comment.contact}</Text>
                    </LineStackLayout>
                  )}
                </Column>
              </Line>
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Spacer />
              {ratings && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
                <ResponsiveLineStackLayout noColumnMargin expand>
                  {ratings.map(rating => (
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
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <LargeSpacer />
{ /* @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided. */}
              <Text style={styles.textComment} allowSelection>
                {comment.text}
              </Text>
            </Column>
          </Card>
          {comment.playerId && openPlayerPublicProfileDialog && (
// @ts-expect-error - TS17004 - Cannot use JSX unless the '--jsx' flag is provided.
            <PublicProfileDialog
              userId={comment.playerId}
              onClose={() => setOpenPlayerPublicProfileDialog(false)}
            />
          )}
        </>
      )}
    </I18n>
  );
};

export default FeedbackCard;
