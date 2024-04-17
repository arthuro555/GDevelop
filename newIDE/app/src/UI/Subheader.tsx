import * as React from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  children: React.ReactNode | null | undefined;
};

const style = {
  paddingLeft: 8,
} as const;

// A Subheader to be displayed in a List.
const Subheader = ({ children }: Props) =>
  children ? (
    <Typography variant={'overline'} style={style}>
      {children}
    </Typography>
  ) : null;

export default Subheader;
