import React from "react";
import styles from "./Hourly.module.scss";
import rainy from "../../assets/weather-icons/rainy-sunny.png";
import { Hour } from "../../App";
interface HourlyProps {
    hour: Hour;
    mode: string;
}
export const Hourly: React.FC<HourlyProps> = ({hour, mode}) => {
    let value: string = '';
    if(mode === "temperature") value = `${hour.temp_c.toString().slice(0, 2)}°`;
    if(mode === "rain") value = `${hour.chance_of_rain} mm`;
    if(mode === "wind") value = `${hour.wind_kph.toString().slice(0, 2).replace('.', '')} km/h`;
  return (
    <>
      <div className={styles.hourCard}>
        <p>{hour.time.slice(11, 16)}</p>
        <div className={styles.hourInfo}>
          <h3>{value}</h3>
          <img src={hour.condition.icon} alt={hour.condition.text} />
        </div>
      </div>
    </>
  );
};
