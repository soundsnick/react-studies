import { HTMLAttributes } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  url?: string | undefined;
  alt?: string | undefined;
};

