import Image from "next/image";
import { hourlyForecast } from "@/app/data";
import { weatherIcons } from "@/app/data";


const HourlyForecastList = () => {
  return (
    <div className="flex flex-col gap-3">
      {hourlyForecast.map((hour, id) => (
        <div key={id} className="flex items-center gap-2 p-2 border border-neutral-600 bg-neutral-700 rounded-lg">
          <span className="text-base">
            <Image
              src={`/assets/images/${weatherIcons[hour.condition]}`}
              alt="weather icon"
              width={38}
              height={38}
            />
          </span>
          <span className="text-sm mr-auto">{hour.time}</span>
          <span className="text-sm text-preset-7">{hour.temperature}°</span>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecastList;
