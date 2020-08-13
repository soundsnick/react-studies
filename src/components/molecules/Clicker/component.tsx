import React, { FC, useCallback, useEffect, useState } from 'react';
import { Props } from './props';

const letterNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

export const Clicker: FC<Props> = ({ children, ...rest } : Props) => {
  const [count, setCount] = useState(0);
  const [letterCount, setLetterCount] = useState(letterNumbers[0]);

  const handleClick = useCallback((): void => setCount(count + 1), [count]);

  useEffect(() => {
    setLetterCount(letterNumbers[count]);
  }, [count]);

  return (
    <button onClick={handleClick} {...rest}>
      {children} - {count} - {letterCount}
    </button>
  );
}
