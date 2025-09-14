import DailyForecastList from "./DailyForecastList"

const DailyForecast = () => {
  return (
    <div className="flex flex-col justify-end col-span-1 md:col-span-2 px-4">
      <h5 className="text-preset-5 mb-4">Daily Forecast</h5>
      <DailyForecastList />
    </div>
  )
}

export default DailyForecast