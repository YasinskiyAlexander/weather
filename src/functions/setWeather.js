import {DAYS_OF_WEEK} from "../constants/initial";

export const configureWeather = (date) =>{
    let newWeather = {};
    newWeather.dayOfWeek = DAYS_OF_WEEK[new Date(date).getDay()];
    newWeather.year = new Date(date).getFullYear();
    newWeather.month = new Date(date).toLocaleString('en-GB', { month: 'long' });
    newWeather.day = new Date(date).getDate();
    return newWeather
}

export const pushedWeather = (tempWeather, weatherLastId, date, time, weather, weatherKey) =>{
    tempWeather[weatherLastId][date].times[tempWeather[weatherLastId][date].times.length] = {}
    const timesLastId = tempWeather[weatherLastId][date].times.length - 1;
    tempWeather[weatherLastId][date].times[timesLastId] = [];
    tempWeather[weatherLastId][date].times[timesLastId].push({'time': time});
    tempWeather[weatherLastId][date].times[timesLastId].push({'weather': weather.list[weatherKey].weather[0].main});
    tempWeather[weatherLastId][date].times[timesLastId].push({'temp': Math.round(weather.list[weatherKey].main.temp)});
    tempWeather[weatherLastId][date].times[timesLastId].push({'feels_like': Math.round(weather.list[weatherKey].main.feels_like)});
    tempWeather[weatherLastId][date].times[timesLastId].push({'pressure': weather.list[weatherKey].main.pressure});
    tempWeather[weatherLastId][date].times[timesLastId].push({'humidity': weather.list[weatherKey].main.humidity});
}

export const emptyWeather = (day, tempWeatherId, tempWeather) =>{
    while (true){
        let defTimeValues = [];
        defTimeValues.push({'time': ''});
        defTimeValues.push({'weather': ''});
        defTimeValues.push({'temp': ''});
        defTimeValues.push({'feels_like': ''});
        defTimeValues.push({'pressure': ''});
        defTimeValues.push({'humidity': ''});
        if (day.times.length>=8)
            break;
        if (tempWeatherId < tempWeather.length-1)
            day.times.unshift(defTimeValues)
        else
            day.times.push(defTimeValues)
    }
}
