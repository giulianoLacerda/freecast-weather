import { Button } from "../Button/styles";
import React from 'react'
import { StyledInput } from './styles'
import { iInputProps } from '../../utils/Interfaces';

const Input = ({children, name, label, placeholder, mode, onChange, type}: iInputProps) => {

    return (
        <StyledInput
            name={name}
            label={label}
            onChange={onChange}
            mode={mode}
            type={type}>
            <div className="input-box">
                <input type="text" placeholder={placeholder}/>
                {children}
            </div>
        </StyledInput>
    )
}

export default Input;
