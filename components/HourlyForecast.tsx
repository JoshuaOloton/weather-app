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
    <div className="col-span-1 md:row-span-3 p-4 bg-neutral-800 rounded-lg">
      <HourlyForecastHeader day={day} onDayChange={handleDayChange} />
      <HourlyForecastList />
    </div>
  );
};

export default HourlyForecast;
