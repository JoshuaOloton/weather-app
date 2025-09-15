import SearchBar from "./SearchBar"

const WeatherSearch = () => {
  return (
    <div className="p-4 text-center max-w-xl m-auto">
      <h1 className="font-bold font-bricolage-grotesque text-4xl mb-8">How&apos;s the sky looking today?</h1>
      <SearchBar />
    </div>
  )
}

export default WeatherSearch