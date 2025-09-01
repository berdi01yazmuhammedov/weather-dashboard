import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";

import "./styles/index.scss";
import { Weekdays } from "./components/Weekdays";
import { SearchError } from "./components/SearchError";
import { Loader } from "./components/Loader";

export interface WeatherResponse {
  location: Location;
  forecast: Forecast;
  current: Current;
}
interface Forecast {
  forecastday: ForecastDay[];
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}
export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}
interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}
interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
}

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  short_rad: number;
  diff_rad: number;
  dni: number;
  gti: number;
}
export interface Current {
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
  pressure_mb: number;
}
interface Condition {
  text: string;
  icon: string;
  code: number;
}
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("Saint-Petersburg");
  const [isError, setIsError] = useState(false);
  const [lastFailedQuery, setLastFailedQuery] = useState("");
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const getWeather = async () => {
    setIsLoading(true);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=de85bd798d4e407bbf613122252608&q=${query}&lang=en&days=7`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setWeather(data);
      setIsError(false);
    } catch (error: any) {
      console.log(error.message); //получаю response status 400
      setLastFailedQuery(query);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getWeather();
  }, [query]);
  return (
    <div className="app">
      <Header
        query={query}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setQuery={setQuery}
        isError={isError}
        lastFailedQuery={lastFailedQuery}
        setIsError={setIsError}
      />
      <div className="container">
        {isLoading && <Loader />}
        {!isError && <Weekdays weather={weather} />}
      </div>
    </div>
  );
}

export default App;
