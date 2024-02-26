import React, { useEffect } from 'react'

import Body from '../components/Body'
import Modal from '../components/Modal';
import { StyledTitle } from '../styles/typography';
import { useAppStore } from '../store/AppStore';

const Home = () => {
    const { settings, setUseNavBar } = useAppStore();

    useEffect(() => {
        const removeNavBar = () => {
            setUseNavBar("no");
        }
        removeNavBar();
    }, [setUseNavBar]);

    return (
        <Body size='md' mode={settings.themeMode}>
            <Modal />
            <StyledTitle mode={settings.themeMode} tag="h1" fontWeight={"700"} fontSize="md">Pick a city to see the full forecast</StyledTitle>
        </Body>
    )
}

export default Home;