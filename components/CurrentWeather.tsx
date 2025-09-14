
import { weatherData } from "@/app/data"
import Image from "next/image"

type Props = {}

const CurrentWeather = (props: Props) => {
  return (
    <div className="col-span-1 md:col-span-2 h-52 p-4 flex flex-col md:flex-row justify-between items-center bg-[url(../public/assets/images/bg-today-large.svg)] bg-cover bg-center rounded-lg text-white">
      <div>
        <h3 className="text-preset-4 mb-1">{weatherData.location}</h3>
        <p className="text-preset-6 text-neutral-0/80">{weatherData.date}</p>
      </div>
      <div className="flex items-center">
        <Image
          src="/assets/images/icon-sunny.webp"
          alt="weather icon"
          width={100}
          height={100}
        />
        <h3 className="text-7xl italic font-semibold">{weatherData.currentTemperature}°</h3>
      </div>
    </div>
  )
}

export default CurrentWeather