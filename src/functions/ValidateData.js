import {DAYS_OF_WEEK} from "../constants/initial";
import {configureWeather, emptyWeather, pushedWeather} from "./setWeather";

export const validateData = (weather, setWeather) => {
    let tempWeather = [];

    for (const weatherKey in weather.list) {
        const [date, time] = weather.list[weatherKey].dt_txt.split(" ");

        if (!tempWeather.length || !tempWeather[tempWeather.length-1].hasOwnProperty(date)) {
            tempWeather.push({});
            const weatherLastId = tempWeather.length-1;
            tempWeather[weatherLastId][date] = configureWeather(date)
        }

        const weatherLastId = tempWeather.length-1;
        if (!tempWeather[weatherLastId][date].hasOwnProperty('times'))
            tempWeather[weatherLastId][date].times = [];

        pushedWeather()
    }

    for (const tempWeatherId in tempWeather) {
        const day = Object.values(tempWeather[tempWeatherId])[0];

       emptyWeather(day, tempWeatherId, tempWeather)
    }
    console.log("tempWeather")
    console.log(tempWeather)
    setWeather(()=>tempWeather);
}
