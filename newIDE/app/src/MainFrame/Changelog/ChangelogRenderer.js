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
          It is like GDevelop but better, why are you even reading this it is not like this is real software IDK it is 3 am why am I still up defacing gdevelop. Oh god I sure hope you don't open your projects with that it'll mess them up real good wowo I am so tired"
        isStandaloneText
      />
    </Column>
  );
};

export default ChangelogRenderer;
