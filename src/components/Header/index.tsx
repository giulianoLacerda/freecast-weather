import { HeaderButton, StyledHeader } from "../../components/Header/styles";
import React, { useEffect, useState } from "react";

import { ReactComponent as CloseCircle } from "../../assets/icons/close-circle.svg";
import Input from "../Input";
import { StyledTitle } from "../../styles/typography";
import { ReactComponent as ThemeSwitch } from "../../assets/icons/theme-switch.svg";
import { useAppStore } from "../../store/AppStore";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const { settings, toggleDarkMode, toggleModal, citiesList, changeCityActivation, setSeletedCity } = useAppStore();
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [inputSearch, setInputSearch] = useState<string>("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleThemeSwitch = (): void => {
        toggleDarkMode();
    }

    const handleSettings = (): void => {
        toggleModal();
    }

    const handleShowSearch = (): void => {
        setShowSearch(!showSearch);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowSearch(!showSearch);

        const filteredCities = citiesList.filter((city) => city.name.toLowerCase().includes(inputSearch.toLowerCase()));
        if (filteredCities.length === 0 || inputSearch === "") return;
        changeCityActivation(filteredCities[0].name);
        setSeletedCity(filteredCities[0]);
        navigate(`/forecast/${filteredCities[0].lat},${filteredCities[0].lon},${filteredCities[0].name}`);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputSearch(event.target.value);
    }

    return (
        <StyledHeader mode={settings.themeMode}>
            <StyledTitle className="text-header" tag="h3" mode={settings.themeMode} fontWeight={"700"} fontSize="sm">{time}</StyledTitle>
            <div className="FormHeader">
                {!showSearch && <HeaderButton mode={settings.themeMode} onClick={() => handleShowSearch()}>
                    Search
                </HeaderButton>}
                {showSearch &&
                <form onSubmit={handleSubmit}>
                    <Input
                        name="input-header"
                        mode={settings.themeMode}
                        label="search"
                        placeholder="Search"
                        onChange={handleInputChange}
                    >
                        <HeaderButton
                            type="submit"
                            mode={settings.themeMode}
                        >
                            <CloseCircle
                                type="button"
                                className="close-button"
                                mode={settings.themeMode}
                                width={16}
                                fill={settings.themeMode === "dark" ? "white" : "black"}
                            />
                        </HeaderButton>
                    </Input>
                </form>
                }
                <HeaderButton mode={settings.themeMode} onClick={() => handleSettings()}>
                    Settings
                </HeaderButton>
                <HeaderButton mode={settings.themeMode} onClick={() => handleThemeSwitch()}>
                    <ThemeSwitch
                        className="theme-switch"
                        mode={settings.themeMode}
                        width={16}
                        fill={settings.themeMode === "dark" ? "white" : "black"}
                    />
                </HeaderButton>
            </div>
        </StyledHeader>
    )
}

export default Header;
