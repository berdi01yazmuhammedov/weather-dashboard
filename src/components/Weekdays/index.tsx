import React, { useState } from "react";
import styles from "./Weekdays.module.scss";
import { WeatherResponse } from "../../App";
import { DayCard } from "../DayCard";

import { Hourly } from "../Hourly";
interface WeekdaysProps {
  weather: WeatherResponse | null;
}

export const Weekdays: React.FC<WeekdaysProps> = ({ weather }) => {
  const [activeDay, setActiveDay] = useState(0);
  if (!weather) return null;
  const forecast = weather.forecast?.forecastday ?? [];
  const activeHours = forecast[activeDay].hour;

  const hourly = activeHours.map((hour) => {
    return <Hourly key={hour.time_epoch} hour={hour} />;
  });
  const onDayClick = (index: number) => {
    setActiveDay(index);
  };
  const dayCards = forecast.map((day, index) => {
    const date = new Date(day.date);

    const dayName = date
      .toLocaleDateString("en-US", { weekday: "long" })
      .toUpperCase();
    const isActive = index === 0;

    return (
      <DayCard
        onDayClick={onDayClick}
        key={day.date}
        isActive={isActive}
        dayName={dayName}
        current={weather.current}
        day={day}
        index={index}
      />
    );
  });

  return (
    <>
      <div className={styles.weekdays}>
        <div className={styles.variety}>
          <button>Today</button>
          <button>Tomorrow</button>
          <button>Next 7 days</button>
        </div>
        <div className={styles.days}>{dayCards}</div>
        <div className={styles.hourly}>
          <div className={styles.options}>
            <button>Temperatue</button>
            <button>Chance of Rain</button>
            <button>Wind</button>
          </div>
          {hourly}
        </div>
      </div>
    </>
  );
};
