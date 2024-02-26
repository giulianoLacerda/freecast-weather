import { Button } from "../Button/styles";
import React from "react";
import { StyledFooter } from "./styles";
import { useAppStore } from "../../store/AppStore";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const { settings, citiesList, changeCityActivation, selectedCity,
        setSeletedCity, resetSelectedCity } = useAppStore();
    const navigate = useNavigate();

    const handleSelect = (index: number): void => {
        changeCityActivation(citiesList[index].name);
        if (selectedCity.name === citiesList[index].name) {
            resetSelectedCity();
            navigate('/');
        } else {
            setSeletedCity(citiesList[index]);
            navigate(`/forecast/${citiesList[index].lat},${citiesList[index].lon},${citiesList[index].name}`);
        }
    }

    return (
        <StyledFooter mode={settings.themeMode}>
            {citiesList.map((city, index) => (
                <Button
                    key={index}
                    mode={settings.themeMode}
                    selected={citiesList[index].active}
                    size='sm'
                    onClick={() => handleSelect(index)}>
                    {city.name}
                </Button>
            ))}
        </StyledFooter>
    );
}

export default Footer;
