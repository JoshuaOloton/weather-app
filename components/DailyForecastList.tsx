import { dailyForecast, weatherIcons } from "@/app/data";
import Image from "next/image";


const DailyForecastList = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {dailyForecast.map((day, id) => (
        <div
          key={id}
          className="flex-1 flex flex-col justify-between items-center gap-4 px-2 py-4 bg-neutral-800 rounded-lg"
        >
          <span className="text-preset-7">{day.day}</span>
          <span className="text-base">
            <Image
              src={`/assets/images/${weatherIcons[day.condition]}`}
              alt="weather icon"
              width={38}
              height={38}
            />
          </span>
          <div className="flex justify-between w-full text-preset-7">
            <span className="">{day.high}°</span>
            <span className="text-neutral-200">{day.low}°</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecastList;
