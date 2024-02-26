import React, { useState } from "react";

import { ReactComponent as CloseCircle } from "../../assets/icons/close-circle.svg";
import { HeaderButton } from "../Header/styles";
import { StyledModal } from "./styles";
import { StyledTitle } from "../../styles/typography";
import Toggle from "../Toggle";
import { useAppStore } from '../../store/AppStore';

const Modal = () => {
    const { settings, setSettings, openModal, toggleModal } = useAppStore();

    const toggleUnitButtons: ("imperial" | "metric" | "standard")[] = ["imperial", "metric", "standard"];
    const toggleTimeButtons: ("AM/PM" | "24H")[] = ["AM/PM", "24H"];
    const toggleSaveButtons = ["Cancel", "Save"];

    const unitButtonsSelected: ("yes" | "no")[] = [
        settings.units === "imperial" ? "yes" : "no",
        settings.units === "metric" ? "yes" : "no",
        settings.units === "standard" ? "yes" : "no"
    ];

    const timeButtonsSelected: ("yes" | "no")[]= [
        settings.time === "AM/PM" ? "yes" : "no",
        settings.time === "24H" ? "yes" : "no"
    ];

    const [unitToggle, setUnitToggle] = useState<string[]>(unitButtonsSelected);
    const [timeToggle, setTimeToggle] = useState<string[]>(timeButtonsSelected);

    const handleUnitClick = (unit: number): void => {
        const newUnitToggle = unitToggle.map((_, index) => index === unit ? "yes" : "no");
        setUnitToggle(newUnitToggle);
    }

    const handleTimeClick = (time: number): void => {
        const newTimeToggle = timeToggle.map((_, index) => index === time ? "yes" : "no");
        setTimeToggle(newTimeToggle);
    }

    const handleSaveClick = (save: number): void => {
        const unitIndex: number = unitToggle.findIndex((unit) => unit === "yes");
        const unit: ("imperial" | "metric" | "standard") = toggleUnitButtons[unitIndex];

        const timeIndex: number = timeToggle.findIndex((time) => time === "yes");
        const time: ("AM/PM" | "24H") = toggleTimeButtons[timeIndex];

        switch (save) {
            case 0:
                setUnitToggle(unitButtonsSelected);
                setTimeToggle(timeButtonsSelected);
                toggleModal();
                break;
            case 1:
                setSettings({...settings, units: unit, time: time});
                toggleModal();
                break;
            default:
                break;
        }
    }

    const handleClose = (): void => {
        setUnitToggle(unitButtonsSelected);
        setTimeToggle(timeButtonsSelected);
        toggleModal();
    }

    return (
        <StyledModal mode={settings.themeMode} style={{
            display: openModal === "no" ? "none" : "flex"

        }}>
            <div className="modal">
                <div className="modal-content">
                    <HeaderButton mode={settings.themeMode} onClick={() => handleClose()}>
                        <CloseCircle
                            className="theme-switch"
                            mode={settings.themeMode}
                            width={16}
                            fill={settings.themeMode === "dark" ? "white" : "black"}
                        />
                    </HeaderButton>
                    <StyledTitle
                        className="settings-title"
                        tag="h2"
                        fontWeight="500"
                        fontSize="md"
                        mode={settings.themeMode}
                    >
                        Settings
                    </StyledTitle>
                    <StyledTitle
                        className="units-title"
                        tag="h3"
                        fontWeight="500"
                        fontSize="sm"
                        mode={settings.themeMode}
                    >
                        Units
                    </StyledTitle>
                    <Toggle
                        mode={settings.themeMode}
                        handleClick={(index) => handleUnitClick(index)}
                        activeButtons={unitToggle}
                        buttonsName={toggleUnitButtons}
                    />
                    <StyledTitle
                        className="time-title"
                        tag="h3"
                        fontWeight="500"
                        fontSize="sm"
                        mode={settings.themeMode}
                    >
                        Time
                    </StyledTitle>
                    <Toggle
                        mode={settings.themeMode}
                        handleClick={(index) => handleTimeClick(index)}
                        activeButtons={timeToggle}
                        buttonsName={toggleTimeButtons}
                    />
                     <StyledTitle
                        className="time-title"
                        tag="h3"
                        fontWeight="500"
                        fontSize="sm"
                        mode={settings.themeMode}
                    >{""}
                    </StyledTitle>
                    <Toggle
                        mode={settings.themeMode}
                        handleClick={(index) => handleSaveClick(index)}
                        activeButtons={["no", "no"]}
                        buttonsName={toggleSaveButtons}
                    />
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;