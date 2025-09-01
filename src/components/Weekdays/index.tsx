import React, { useState } from "react";
import styles from "./Weekdays.module.scss";
import { WeatherResponse } from "../../App";
import { DayCard } from "../DayCard";

import { Hourly } from "../Hourly";
interface WeekdaysProps {
  weather: WeatherResponse | null;
}

export const Weekdays: React.FC<WeekdaysProps> = ({ weather }) => {
  const [mode, setMode] = useState<"temperature" | "rain" | "wind">(
    "temperature"
  );
  const [activeDay, setActiveDay] = useState(0);

  if (!weather) return null;

  const forecast = weather.forecast?.forecastday ?? [];
  const activeHours = forecast[activeDay].hour;
  const now = new Date();
  const currentHour = now.getHours();

  const activeDate = new Date(forecast[activeDay].date); // дата выбранного дня
  const isToday = activeDate.toDateString() === now.toDateString();

  const filteredHours = activeHours.filter((hourObj) => {
    const hour = new Date(hourObj.time).getHours();
    // если сегодня -> отсекаем прошлые часы
    if (isToday) {
      return hour >= currentHour;
    }
    // если другой день -> показываем все 24 часа
    return true;
  });
  const hourly = filteredHours.map((hour) => {
    return <Hourly key={hour.time_epoch} hour={hour} mode={mode} />;
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
        <div className={styles.days}>{dayCards}</div>
        <div className={styles.hourly}>
          <div className={styles.options}>
            <button onClick={() => setMode("temperature")}>Temperatue</button>
            <button onClick={() => setMode("rain")}>Chance of Rain</button>
            <button onClick={() => setMode("wind")}>Wind</button>
          </div>
          <div className={styles.hourContainer}>{hourly}</div>
        </div>
      </div>
    </>
  );
};
