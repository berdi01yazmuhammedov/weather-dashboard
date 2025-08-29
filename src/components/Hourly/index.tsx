import React from "react";
import styles from "./Hourly.module.scss";
import rainy from "../../assets/weather-icons/rainy-sunny.png";
import { Hour } from "../../App";
interface HourlyProps {
    hour: Hour;
}
export const Hourly: React.FC<HourlyProps> = ({hour}) => {
        
  return (
    <>
      <div className={styles.hourCard}>
        <p>{hour.time.slice(11, 16)}</p>
        <div className={styles.hourInfo}>
          <h3>{hour.temp_c.toString().slice(0, 2)}°</h3>
          <img src={hour.condition.icon} alt={hour.condition.text} />
        </div>
      </div>
    </>
  );
};
