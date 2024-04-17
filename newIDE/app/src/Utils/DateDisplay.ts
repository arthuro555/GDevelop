import * as React from 'react';

import { t } from '@lingui/macro';

import { I18n as I18nType } from '@lingui/core';

export const getRelativeOrAbsoluteDisplayDate = ({
  i18n,
  dateAsNumber,
  relativeLimit,
  sameDayFormat,
  sameWeekFormat,
  dayBeforeFormat,
}: {
  i18n: I18nType;
  dateAsNumber: number;
  relativeLimit: 'currentWeek' | 'currentYear';
  sameDayFormat: 'todayAndHour' | 'timeAgo' | 'today';
  sameWeekFormat: 'timeAgo' | 'thisWeek';
  dayBeforeFormat: 'yesterdayAndHour' | 'yesterday';
}): React.ReactElement => {
  const nowAsNumber = Date.now();
  if (nowAsNumber - dateAsNumber < 60 * 1000) {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return i18n._(t`Just now`);
  }
  const now = new Date(nowAsNumber);
  const date = new Date(dateAsNumber);

  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    now.getDate() === date.getDate()
  ) {
    if (sameDayFormat === 'todayAndHour') {
      // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return (
        i18n._(t`Today`) +
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
        ` ${i18n.date(date, {
          hour: 'numeric',
        })}`
      );
    } else if (sameDayFormat === 'today') {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return i18n._(t`Today`);
    } else {
      if (nowAsNumber - dateAsNumber < 3600 * 1000) {
        const minutesAgo = Math.floor(
          (nowAsNumber - dateAsNumber) / (60 * 1000)
        );
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
        return i18n._(t`${minutesAgo} minutes ago`);
      } else {
        const hoursAgo = Math.floor(
          (nowAsNumber - dateAsNumber) / (3600 * 1000)
        );
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
        if (hoursAgo === 1) return i18n._(t`1 hour ago`);
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
        return i18n._(t`${hoursAgo} hours ago`);
      }
    }
  }
  const yesterdayAtSameTime = new Date(now);
  yesterdayAtSameTime.setDate(now.getDate() - 1);
  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    yesterdayAtSameTime.getDate() === date.getDate()
  ) {
    if (dayBeforeFormat === 'yesterdayAndHour') {
      // @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return (
        i18n._(t`Yesterday`) +
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
        ` ${i18n.date(date, {
          hour: 'numeric',
        })}`
      );
    } else {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return i18n._(t`Yesterday`);
    }
  }

  const sevenDaysAgoAtFirstHour = new Date(now);
  sevenDaysAgoAtFirstHour.setDate(now.getDate() - 7);
  sevenDaysAgoAtFirstHour.setHours(0, 0, 0, 0);
  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth() &&
    sevenDaysAgoAtFirstHour.getTime() <= date.getTime()
  ) {
    if (sameWeekFormat === 'thisWeek') {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return i18n._(t`This week`);
    } else {
      const daysAgo = Math.floor(
        (nowAsNumber - dateAsNumber) / (24 * 3600 * 1000)
      );
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      if (daysAgo === 1) return i18n._(t`1 day ago`);
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
      return i18n._(t`${daysAgo} days ago`);
    }
  }
  if (relativeLimit === 'currentWeek') {
// @ts-expect-error - TS2339 - Property 'date' does not exist on type 'I18n'.
    return i18n.date(date);
  }

  if (
    now.getFullYear() === date.getFullYear() &&
    now.getMonth() === date.getMonth()
  ) {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return i18n._(t`This month`);
  }

  if (now.getFullYear() === date.getFullYear()) {
// @ts-expect-error - TS2322 - Type 'string' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
    return i18n._(t`This year`);
  }
  // @ts-expect-error - TS2322 - Type 'number' is not assignable to type 'ReactElement<any, string | JSXElementConstructor<any>>'.
  return date.getFullYear();
};

export const secondsToMinutesAndSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedRemainingSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  return `${minutes}:${formattedRemainingSeconds}`;
};
