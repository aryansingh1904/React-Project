import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const[weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 31.04,
        temp: 26.96,
        tempMin: 26.05,
        tempMax: 26.96,
        humidity: 94,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center"} }>
            <br></br>
            <h2>Weather App by Aryan</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}