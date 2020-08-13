import React, { FC, useCallback, useEffect, useState } from 'react';
import { Props } from './props';
import styled from '@emotion/styled';

export const Avatar: FC<Props> = ({ url, alt, ...rest }: Props) => {
  return(
    <div {...rest}>
      <img src={url} alt={alt}/>
    </div>
  )
}

export const AvatarStyle = styled(Avatar)`
    padding: 0px;
    margin: 0px;
    border-radius: 50%;
`;
