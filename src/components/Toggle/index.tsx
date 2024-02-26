import { Button } from "../Button/styles";
import React from 'react'
import { StyledToggle } from './styles'
import { ToggleProps } from '../../utils/Interfaces';

const Toggle = ({mode, handleClick, activeButtons, buttonsName}: ToggleProps) => {

    return (
        <StyledToggle>
            {buttonsName.map((button, index) => {
                return (
                    <Button
                        size="sm"
                        key={index}
                        mode={mode}
                        onClick={() => handleClick(index)}
                        selected={activeButtons[index]}
                    >
                        {button}
                    </Button>
                )
            })}
        </StyledToggle>
    )
}

export default Toggle;
