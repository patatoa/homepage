import { useEffect, useState } from "react";

interface WeatherData {
  current: {
    cloud: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
  };
  location: {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
  };
};
const fetchData = async (): Promise<WeatherData> => {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.PUBLIC_WEATHER_API_KEY}&q=78250`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`Weather API error: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    fetchData()
      .then((response) => setWeatherData(response))
      .catch(() => setWeatherData(null));
  }, []);

    if (weatherData === null) {
      return <div></div>;
    }

  const current_temp = weatherData.current.temp_f;
  const condition = weatherData.current.condition.text;
  const current_time = weatherData.location.localtime;
  const city = weatherData.location.name;
  const icon = weatherData.current.condition.icon;
  const weatherstring = "Currently: " + current_temp + " and "+ condition + " in " + city + " at " + current_time;
  return <div className="p-20 text-center text-gray-200">
    <img src={icon} alt={condition} className="inline"/>
    {weatherstring}
  </div>;
}
export default Weather;
