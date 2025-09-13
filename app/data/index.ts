import type { WeatherData, HourlyForecast, DailyForecast, WeatherHighlight } from "./types";

const weatherData: WeatherData = {
    location: "Lagos, Nigeria",
    currentTemperature: 20,
    condition: "Overcast",
    date: "Friday, Sep 12, 2025",
};

const hourlyForecast: HourlyForecast[] = [
    { time: "3 PM", temperature: 20, condition: "Overcast" },
    { time: "4 PM", temperature: 20, condition: "Partly Cloudy" },
    { time: "5 PM", temperature: 20, condition: "Clear-sunny" },
    { time: "6 PM", temperature: 19, condition: "Overcast" },
    { time: "7 PM", temperature: 18, condition: "Drizzle" },
    { time: "8 PM", temperature: 18, condition: "Fog" },
    { time: "9 PM", temperature: 17, condition: "Drizzle" },
    { time: "10 PM", temperature: 17, condition: "Overcast" },
];

const dailyForecast: DailyForecast[] = [
    { day: "Tuesday", high: 21, low: 14, condition: "Rain" },
    { day: "Wednesday", high: 19, low: 13, condition: "Drizzle" },
    { day: "Thursday", high: 20, low: 14, condition: "Clear-sunny" },
    { day: "Friday", high: 23, low: 16, condition: "Partly Cloudy" },
    { day: "Saturday", high: 24, low: 17, condition: "Thunderstorms" },
    { day: "Sunday", high: 22, low: 15, condition: "Drizzle" },
    { day: "Monday", high: 22, low: 15, condition: "Fog" },
];

const weatherHighlights: WeatherHighlight[] = [
    { label: "Feels Like", value: "18°" },
    { label: "Humidity", value: "46%" },
    { label: "Wind Speed", value: "14 km/h" },
    { label: "Precipitation", value: "0 mm" },
];

export { weatherData, hourlyForecast, dailyForecast, weatherHighlights };