import React, { useState } from "react";
import styles from "./DayCard.module.scss";
import { Current, ForecastDay } from "../../App";

interface DayCardProps {
  isActive: boolean;
  dayName: string;
  current: Current;
  day: ForecastDay;
  onDayClick: (index: number) => void;
  index: number;
}
export const DayCard: React.FC<DayCardProps> = ({
  isActive,
  dayName,
  current,
  day,
  onDayClick,
  index
}) => {
  const displayDay = isActive ? dayName : dayName.slice(0, 3);

  return (
    <>
      {isActive ? (
        <div className={`${styles.day} ${styles.active}`} onClick={() => onDayClick(index)}>
          <div className={styles.title}>
            <h3>{displayDay}</h3>
            <h3>{current.last_updated.slice(11, 16)}</h3>
          </div>
          <div className={styles.degreeInfo}>
            <div className={styles.degree}>
              <h2>{current.temp_c}°</h2>
              <div className={styles.icon}>
                <img
                  src={current.condition.icon}
                  alt={current.condition.text}
                />
                <p>
                  <span>{current.condition.text}</span>
                </p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.conditions}>
                <p>
                  Real Feel <span>{current.feelslike_c}°</span>
                </p>
                <p>
                  Wind N-E. <span>{current.wind_kph}km/h</span>
                </p>
                <p>
                  Pressure <span>{current.pressure_mb}MB</span>
                </p>
                <p>
                  Humidity <span>{current.humidity}%</span>
                </p>
              </div>
              <div className={styles.suntime}>
                <p>
                  Sunrise <span>{day.astro.sunrise}</span>
                </p>
                <p>
                  Sunset <span>{day.astro.sunset}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.day} onClick={() => onDayClick(index)}>
          <h3>{displayDay}</h3>
          <span className={styles.line}></span>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <h2>{day.day.avgtemp_c}</h2>
        </div>
      )}
    </>
  );
};
