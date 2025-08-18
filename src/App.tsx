import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';

import "./styles/index.scss";
import { Weekdays } from './components/Weekdays';

interface WeatherResponse {
  location: Location;
  current: Current;
}
interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}
interface Current {
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;

}
interface Condition {
  text: string;
  icon: string;
  code: number;
}
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const getWeather = async () => {
    const url = "https://api.weatherapi.com/v1/current.json?key=1d47d81f0371416da6a231906251708&q=Saint-Petersburg&lang=ru";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      const data = await response.json();
      setWeather(data);
    } catch (error: unknown) {
      console.error(error);
    }
  }
  useEffect(() => {
    getWeather();
  }, []);
  // console.log(weather?.location);
  return (
    <div className="app">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="container">

        <Weekdays />
      </div>
    </div>
  );
}

export default App;
