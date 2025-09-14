// types.ts (optional separate file)

import { daysOfWeek } from ".";

export interface WeatherData {
  location: string;
  currentTemperature: number;
  condition: string;
  date: string;
}

export interface HourlyForecast {
  time: string;
  temperature: number;
  condition: string;
}

export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  condition: string;
}

export interface WeatherHighlight {
  label: string;
  value: string;
}

export type DayOfWeek = typeof daysOfWeek[number];