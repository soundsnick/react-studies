import { HTMLAttributes, ReactNode } from 'react';

export type Props = HTMLAttributes<HTMLDivElement> & {
  logo?: ReactNode;
  links?: Record<string, string>;
};
