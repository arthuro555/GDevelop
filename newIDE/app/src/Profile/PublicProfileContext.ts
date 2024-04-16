import * as React from 'react';

export type PublicProfileState = {
  openUserPublicProfile: (arg1: string) => void
};

const initialPublicProfileState = {
  openUserPublicProfile: (userId: string) => {},
} as const;

const PublicProfileContext = React.createContext<PublicProfileState>(initialPublicProfileState);

export default PublicProfileContext;
