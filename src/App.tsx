import React from 'react';
import { useQueries } from 'react-query';
import axios from "axios";
import { useAppStore, City } from './store/AppStore';
import { createEndpointUrlGeo } from './services/enpoints';

import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Loading from './routes/Loading';

import { Outlet } from 'react-router-dom';

function App() {
  const { countries, addListCities } = useAppStore();

  const randomCountries = countries.sort(() => Math.random() - Math.random()).slice(0, 6);
  const maxCities = 18;
  let citieCount = 0;

  const fetchCities = (country: string) => {
    return axios.get(createEndpointUrlGeo(country))
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const totalCities = citieCount + res.data.length;
          res.data.forEach((city: City) => {
            city.active = "no";
          });
          if (totalCities <= maxCities) {
            addListCities(res.data);
            citieCount = totalCities;
          }
          if (totalCities > maxCities && citieCount < maxCities) {
            addListCities(res.data.slice(0, maxCities - citieCount));
            citieCount = maxCities;
          }
        }
      }
      );
  }

  const results = useQueries(
    randomCountries.slice(0, 6).map((country, index) => ({
      queryKey: `city${index + 1}`,
      queryFn: () => fetchCities(country.code),
      retry: 1,
      retryDelay: 2000,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }))
  );

  const isLoading = results.every((result) => result.isLoading);

  return (
    <div className="App">
      {isLoading ? <Loading /> :
        <React.Fragment>
          <Header />
          <Outlet />
          <NavBar />
          <Footer />
        </React.Fragment>}
    </div>
  );
}

export default App;
