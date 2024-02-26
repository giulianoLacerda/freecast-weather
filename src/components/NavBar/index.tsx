import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { StyledNavBar } from './styles'
import Toggle from '../Toggle';
import { useAppStore } from '../../store/AppStore';

const NavBar = () => {
  const [buttonsActive, setButtonsActive] = useState<string[]>(["yes", "no"]);
  const { settings, useNavBar, selectedCity } = useAppStore();
  const navigate = useNavigate();
  const { latlon } = useParams();
  const [lat, lon, city] = latlon ? latlon.split(',') : [0, 0];
  
  useEffect(() => {
    setButtonsActive(["yes", "no"]);
  }, [useNavBar, selectedCity]);

  const handleActive = (index: number): void => {
    const newActive = buttonsActive.map((_, i) => {
      if (i === index) {
        return "yes";
      }
      return "no";
    });
    setButtonsActive(newActive);
  }

  const handleClick = (index: number): void => {
    handleActive(index);
    switch (index) {
      case 0:
        navigate(`/forecast/${lat},${lon},${city}`);
        break;
      case 1:
        navigate(`/forecast/${lat},${lon},${city}/5days`);
        break;
      default:
        break;
    }
  }

  return (
    useNavBar === "no" ? (
      <StyledNavBar mode={settings.themeMode} style={
        {
          display: 'none'
        }
      }>
      </StyledNavBar>
    ) : (
      <StyledNavBar mode={settings.themeMode}>
        <div className="Title">
          <p>Forecast</p>
        </div>
        <Toggle
          mode={settings.themeMode}
          handleClick={handleClick}
          activeButtons={buttonsActive}
          buttonsName={["Now", "5Days"]}/>
      </StyledNavBar>
    )
  )
}

export default NavBar;