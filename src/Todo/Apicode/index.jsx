import React, { useState } from "react";
const API = {
  key: "bae9bd97c9a35dd14911d60db608a5c5",
  base: "https://api.openweathermap.org/data/2.5/",
};
function Apicode() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: "",
    },
    weather: [{ description: "" }],
  });
  const searchPressed = () => {
    fetch(`${API.base}weather?q=${search}&units=metric&&APPID=${API.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };
  return (
    <div className="bg-slate-700 w-full h-full p-8">
      <h1 className="text-white font-bold text-3xl my-7">Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Search...."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>
      <p className="text-white">{weather.name}</p>
      <p className="text-white">{weather.main.temp}</p>
      <p className="text-white">{weather.weather[0].description}</p>
    </div>
  );
}

export default Apicode;
