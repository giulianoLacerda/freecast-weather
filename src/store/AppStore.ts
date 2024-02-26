import { countries } from '../assets/';
import { create } from 'zustand';

interface City {
    name: string;
    country: string;
    lat: number;
    lon: number;
    active: "yes" | "no";
}

interface Settings {
    units: "standard" | "imperial" | "metric";
    time: "AM/PM" | "24H";
    themeMode: "dark" | "light";
}

interface AppStore {
    settings: Settings;
    citiesList: City[];
    countries: typeof countries;
    selectedCity: City;
    useNavBar: "yes" | "no";
    openModal: "yes" | "no";
    toggleDarkMode: () => void;
    toggleModal: () => void;
    addCity: (city: City) => void;
    addListCities: (cities: City[]) => void;
    changeCityActivation: (name: string) => void;
    setSeletedCity: (city: City) => void;
    resetSelectedCity: () => void;
    setUseNavBar: (useNavBar: "yes" | "no") => void;
    setSettings: (settings: Settings) => void;
}

export const useAppStore = create<AppStore>((set) => {
    return {
        settings: {
            units: "metric",
            time: "24H",
            themeMode: "dark",
        },
        citiesList: [],
        selectedCity: {
            name: "",
            country: "",
            lat: 0,
            lon: 0,
            active: "no"
        
        },
        openModal: "no",
        useNavBar: "no",
        countries,
        toggleDarkMode: () => set((state) => ({ settings: { ...state.settings, themeMode: state.settings.themeMode === "dark" ? "light" : "dark" } })),
        toggleModal: () => set((state) => ({ openModal: state.openModal === "no" ? "yes" : "no" })),
        addCity: (city: City) => set((state) => ({ citiesList: [...state.citiesList, city] })),
        addListCities: (cities: City[]) => set((state) => ({ citiesList: [...state.citiesList, ...cities] })),
        changeCityActivation: (name: string) => set((state) => {
            return {
                citiesList: state.citiesList.map((city) => ({
                    ...city,
                    active: city.name === name ? (city.active === "yes" ? "no" : "yes") : "no"
                }
                ))
            }
        }),
        setSeletedCity: (city: City) => set((state) => ({ selectedCity: city })),
        resetSelectedCity: () => set((state) => ({ selectedCity: { name: "", country: "", lat: 0, lon: 0, active: "no" } })),
        setUseNavBar: (useNavBar: "yes" | "no") => set((state) => ({ useNavBar })),
        setSettings: (settings: Settings) => set((state) => ({ settings }))
    }
});

export type { City };
