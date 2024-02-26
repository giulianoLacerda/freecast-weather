import React from 'react';
import { StyledBody } from './styles';
import { iBodyProps } from '../../utils/Interfaces';

const Body = ({children, size, mode}: iBodyProps) => {
    return (
        <StyledBody size={size} mode={mode}>
            {children}
        </StyledBody>
    );
}

export default Body;