import React, { useState } from "react";

const API = {
  key: "bae9bd97c9a35dd14911d60db608a5c5",
  base: "https://api.openweathermap.org/data/2.5/",
};

async function Apicode() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    main: {
      temp: "",
    },
    weather: [{ description: "" }],
  });

  const searchPressed = async () => {
    try {
      const response = await fetch(
        `${API.base}weather?q=${search}&units=metric&&APPID=${API.key}`
      );

      if (!response.ok) {
        console.error("Error fetching weather data");
        return;
      }
      const result = await response.json();
      setWeather(result);
      console.log(result);
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
