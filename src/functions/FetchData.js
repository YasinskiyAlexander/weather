import axios from "axios";
import {validateData} from "./ValidateData";
import {ZERO} from "../constants/initial";

export const fetchCity = (city, setWeather) => {
    console.log("city")
    console.log(city)
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=e1a09322ff23599bb267b25c8b72294d`)
        .then(res=>{
            console.log("fetchCity");
            console.log(res);
            fetchWeather(res.data[ZERO].lat, res.data[ZERO].lon, setWeather)
        })
        .catch(error=>{
            console.log(error);
        })
}

const fetchWeather = (lat, lon, setWeather) => {
    console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e1a09322ff23599bb267b25c8b72294d&units=metric`)

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e1a09322ff23599bb267b25c8b72294d&units=metric`)
        .then(res=>{
            console.log("fetchWeather");
            console.log(res);
            validateData(res.data, setWeather)
            // setWeather(()=>res);

        })
        .catch(error=>{
            console.log(error);
        })
}
