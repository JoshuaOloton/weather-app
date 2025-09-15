import { weatherHighlights } from "@/app/data"


const WeatherHighlight = () => {
  return (
    <div className="col-span-1 md:col-span-2 grid grid-cols-2 lg:grid-cols-4 items-center gap-4 py-4">
      {weatherHighlights.map((highlight, id) => (
        <div key={id} className="flex-1 space-y-4 bg-neutral-800 rounded-lg p-4 text-white h-fit">
          <h3 className="text-preset-6 text-neutral-200">{highlight.label}</h3>
          <p className="text-preset-3">{highlight.value}</p>
        </div>
      ))}
    </div>
  )
}

export default WeatherHighlight