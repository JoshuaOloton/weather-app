"use client";


import { useState } from "react";
import HourlyForecastList from "./HourlyForecastList";
import HourlyForecastHeader from "./HourlyForecastHeader";
import { DayOfWeek } from "@/app/data/types";
import { daysOfWeek } from "@/app/data";

const HourlyForecast = () => {
  const [day, setDay] = useState<string>("Sunday");

  const handleDayChange = (day: DayOfWeek) => {
    if (!daysOfWeek.includes(day)) return;

    setDay(day);
  }

  return (
    <div className="col-span-1 md:row-start-1 md:row-end-4 md:col-start-3 md:col-end-4 p-4 bg-neutral-800 rounded-lg h-fit">
      <HourlyForecastHeader day={day} onDayChange={handleDayChange} />
      <HourlyForecastList />
    </div>
  );
};

export default HourlyForecast;
