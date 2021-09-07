// @flow
import React from 'react';
import { MarkdownText } from '../../UI/MarkdownText';
import { Column } from '../../UI/Grid';

/**
 * Display information about latest releases.
 */
const ChangelogRenderer = () => {
  return (
    <Column>
      <MarkdownText
        source="# GDeveloppe 6 (codename 'Gamers DevelOPS 69')   
It is like GDeveloppe but better, why are you even reading this it is not like this is real software IDK it is 3 am why am I still up defacing GDeveloppe. Oh god I sure hope you don't open your projects with that it'll mess them up real good wowo I am so tired

## ✨ Features

 - **P2P extension now has peer pressure**! If a message is received a certain amount of time, your game will be peer pressured into sending the same message to all other clients.
 - **Random events**: Now, GDeveloppe will randomly trigger *nice events*.

## 💝 Imporvements

 - GDeveloppe has been renamed to GDeveloppe due to popular demand
 - GDeveloppe has been bumped to major version 6 due to popular demmand
 - The default theme has been reworked to be more pleasant to the eyesight
 - Some *typos* has been *fixed*
 - Added arthuro555 to the list of contributors
 - Got rid of buying subscriptions because I felt like it
 - Replaced the bad fonts with the best of all
"
        isStandaloneText
      />
    </Column>
  );
};

export default ChangelogRenderer;
