import CurrentWeather from "@/components/CurrentWeather";
import DailyForecast from "@/components/DailyForecast";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherHighlight from "@/components/WeatherHighlight";
import WeatherSearch from "@/components/WeatherSearch";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto my-4">
      <WeatherSearch />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <CurrentWeather />
        <WeatherHighlight />
        <DailyForecast />
        <HourlyForecast />
      </div>
    </main>
  );
}
