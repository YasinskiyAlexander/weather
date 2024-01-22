export const validateData = (weather, setWeather) => {
    let tempWeather = [];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (const weatherKey in weather.list) {
        const [date, time] = weather.list[weatherKey].dt_txt.split(" ");

        if (!tempWeather.length || !tempWeather[tempWeather.length-1].hasOwnProperty(date)) {
            tempWeather.push({});
            const weatherLastId = tempWeather.length-1;
            tempWeather[weatherLastId][date] = {};
            tempWeather[weatherLastId][date].dayOfWeek = daysOfWeek[new Date(date).getDay()];
            tempWeather[weatherLastId][date].year = new Date(date).getFullYear();
            tempWeather[weatherLastId][date].month = new Date(date).toLocaleString('en-GB', { month: 'long' });
            tempWeather[weatherLastId][date].day = new Date(date).getDate();
        }

        const weatherLastId = tempWeather.length-1;
        if (!tempWeather[weatherLastId][date].hasOwnProperty('times'))
            tempWeather[weatherLastId][date].times = [];

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

    for (const tempWeatherId in tempWeather) {
        const day = Object.values(tempWeather[tempWeatherId])[0];

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
    console.log("tempWeather")
    console.log(tempWeather)
    setWeather(()=>tempWeather);
}
