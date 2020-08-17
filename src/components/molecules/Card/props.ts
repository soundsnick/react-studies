import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  disableBorder?: boolean;
  background?: string;
  color?: string;
};

