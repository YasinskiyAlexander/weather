import {useEffect, useState} from "react";
import {fetchCity} from "../functions/FetchData";
import {WeatherContent} from "./WeatherContent";
import styles from "../css/Weather.module.css"
import {INITIAL_WEATHER} from "../constants/initial";

/*const qwerty = {
    "cod":"200",
    "message":0,
    "cnt":40,
    "list":[
        {
            "dt":1705093200,
            "main":{"temp":277.8,"feels_like":277.8,"temp_min":276.45,"temp_max":277.8,"pressure":1032,"sea_level":1032,"grnd_level":1030,"humidity":85,"temp_kf":1.35},
            "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
            "clouds":{"all":100},
            "wind":{"speed":0.08,"deg":251,"gust":0.17},
            "visibility":10000,
            "pop":0,
            "sys":{"pod":"n"},
            "dt_txt":"2024-01-12 21:00:00"},
        {"dt":1705104000,"main":{"temp":277.09,"feels_like":275.78,"temp_min":275.67,"temp_max":277.09,"pressure":1032,"sea_level":1032,"grnd_level":1028,"humidity":88,"temp_kf":1.42},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":72},"wind":{"speed":1.58,"deg":254,"gust":1.77},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-13 00:00:00"},
        {"dt":1705114800,"main":{"temp":275.84,"feels_like":274.11,"temp_min":274.86,"temp_max":275.84,"pressure":1031,"sea_level":1031,"grnd_level":1027,"humidity":91,"temp_kf":0.98},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":37},"wind":{"speed":1.76,"deg":255,"gust":3.32},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-13 03:00:00"},
        {"dt":1705125600,"main":{"temp":274.31,"feels_like":271.86,"temp_min":274.31,"temp_max":274.31,"pressure":1028,"sea_level":1028,"grnd_level":1025,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":7},"wind":{"speed":2.16,"deg":299,"gust":6.59},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-13 06:00:00"},
        {"dt":1705136400,"main":{"temp":274.4,"feels_like":271.9,"temp_min":274.4,"temp_max":274.4,"pressure":1027,"sea_level":1027,"grnd_level":1024,"humidity":88,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.22,"deg":270,"gust":6.71},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-13 09:00:00"},
        {"dt":1705147200,"main":{"temp":277.44,"feels_like":275.64,"temp_min":277.44,"temp_max":277.44,"pressure":1025,"sea_level":1025,"grnd_level":1023,"humidity":77,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":1},"wind":{"speed":2.05,"deg":303,"gust":3.63},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-13 12:00:00"},
        {"dt":1705158000,"main":{"temp":278.27,"feels_like":276.79,"temp_min":278.27,"temp_max":278.27,"pressure":1023,"sea_level":1023,"grnd_level":1020,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":4},"wind":{"speed":1.87,"deg":273,"gust":4.05},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-13 15:00:00"},
        {"dt":1705168800,"main":{"temp":276.4,"feels_like":274.82,"temp_min":276.4,"temp_max":276.4,"pressure":1022,"sea_level":1022,"grnd_level":1019,"humidity":89,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":6},"wind":{"speed":1.71,"deg":282,"gust":3.11},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-13 18:00:00"},
        {"dt":1705179600,"main":{"temp":275.78,"feels_like":274.23,"temp_min":275.78,"temp_max":275.78,"pressure":1021,"sea_level":1021,"grnd_level":1019,"humidity":94,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":14},"wind":{"speed":1.62,"deg":289,"gust":2.49},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-13 21:00:00"},
        {"dt":1705190400,"main":{"temp":276.27,"feels_like":274.62,"temp_min":276.27,"temp_max":276.27,"pressure":1020,"sea_level":1020,"grnd_level":1017,"humidity":90,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":1.75,"deg":241,"gust":3.18},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-14 00:00:00"},
        {"dt":1705201200,"main":{"temp":276.87,"feels_like":275.54,"temp_min":276.87,"temp_max":276.87,"pressure":1018,"sea_level":1018,"grnd_level":1015,"humidity":86,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.57,"deg":292,"gust":5.76},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-14 03:00:00"},
        {"dt":1705212000,"main":{"temp":277.02,"feels_like":275.79,"temp_min":277.02,"temp_max":277.02,"pressure":1017,"sea_level":1017,"grnd_level":1014,"humidity":80,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.51,"deg":302,"gust":6.2},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-14 06:00:00"},
        {"dt":1705222800,"main":{"temp":277.2,"feels_like":275.65,"temp_min":277.2,"temp_max":277.2,"pressure":1016,"sea_level":1016,"grnd_level":1013,"humidity":72,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.79,"deg":269,"gust":5.69},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-14 09:00:00"},
        {"dt":1705233600,"main":{"temp":278.77,"feels_like":276,"temp_min":278.77,"temp_max":278.77,"pressure":1015,"sea_level":1015,"grnd_level":1012,"humidity":59,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":3.61,"deg":275,"gust":7.48},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-14 12:00:00"},
        {"dt":1705244400,"main":{"temp":278.89,"feels_like":276.49,"temp_min":278.89,"temp_max":278.89,"pressure":1013,"sea_level":1013,"grnd_level":1010,"humidity":60,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":53},"wind":{"speed":3.08,"deg":319,"gust":6.94},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-14 15:00:00"},
        {"dt":1705255200,"main":{"temp":276.74,"feels_like":274.79,"temp_min":276.74,"temp_max":276.74,"pressure":1012,"sea_level":1012,"grnd_level":1009,"humidity":79,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":66},"wind":{"speed":2.08,"deg":291,"gust":6.5},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-14 18:00:00"},
        {"dt":1705266000,"main":{"temp":276.06,"feels_like":273.86,"temp_min":276.06,"temp_max":276.06,"pressure":1012,"sea_level":1012,"grnd_level":1009,"humidity":85,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":66},"wind":{"speed":2.21,"deg":286,"gust":5.72},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-14 21:00:00"},
        {"dt":1705276800,"main":{"temp":276.15,"feels_like":272.86,"temp_min":276.15,"temp_max":276.15,"pressure":1011,"sea_level":1011,"grnd_level":1009,"humidity":79,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":83},"wind":{"speed":3.53,"deg":313,"gust":6.01},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-15 00:00:00"},
        {"dt":1705287600,"main":{"temp":274.6,"feels_like":271.49,"temp_min":274.6,"temp_max":274.6,"pressure":1011,"sea_level":1011,"grnd_level":1008,"humidity":78,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":82},"wind":{"speed":2.89,"deg":332,"gust":7.59},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-15 03:00:00"},
        {"dt":1705298400,"main":{"temp":273.65,"feels_like":270.44,"temp_min":273.65,"temp_max":273.65,"pressure":1011,"sea_level":1011,"grnd_level":1008,"humidity":83,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":46},"wind":{"speed":2.79,"deg":309,"gust":7.66},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-15 06:00:00"},
        {"dt":1705309200,"main":{"temp":273.4,"feels_like":269.56,"temp_min":273.4,"temp_max":273.4,"pressure":1012,"sea_level":1012,"grnd_level":1009,"humidity":69,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":10},"wind":{"speed":3.47,"deg":326,"gust":8.45},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-15 09:00:00"},
        {"dt":1705320000,"main":{"temp":275.35,"feels_like":271.33,"temp_min":275.35,"temp_max":275.35,"pressure":1013,"sea_level":1013,"grnd_level":1010,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":7},"wind":{"speed":4.39,"deg":336,"gust":7.43},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-15 12:00:00"},
        {"dt":1705330800,"main":{"temp":275.77,"feels_like":272.38,"temp_min":275.77,"temp_max":275.77,"pressure":1013,"sea_level":1013,"grnd_level":1011,"humidity":48,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":10},"wind":{"speed":3.55,"deg":335,"gust":6.08},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-15 15:00:00"},
        {"dt":1705341600,"main":{"temp":274.44,"feels_like":271.82,"temp_min":274.44,"temp_max":274.44,"pressure":1015,"sea_level":1015,"grnd_level":1012,"humidity":55,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":54},"wind":{"speed":2.34,"deg":324,"gust":6.1},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-15 18:00:00"},
        {"dt":1705352400,"main":{"temp":273.3,"feels_like":270.78,"temp_min":273.3,"temp_max":273.3,"pressure":1016,"sea_level":1016,"grnd_level":1014,"humidity":56,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":99},"wind":{"speed":2.07,"deg":343,"gust":6.09},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-15 21:00:00"},
        {"dt":1705363200,"main":{"temp":272.83,"feels_like":272.83,"temp_min":272.83,"temp_max":272.83,"pressure":1017,"sea_level":1017,"grnd_level":1014,"humidity":51,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":89},"wind":{"speed":1.33,"deg":313,"gust":3.23},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-16 00:00:00"},
        {"dt":1705374000,"main":{"temp":272.72,"feels_like":272.72,"temp_min":272.72,"temp_max":272.72,"pressure":1017,"sea_level":1017,"grnd_level":1014,"humidity":49,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.2,"deg":270,"gust":2.2},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-16 03:00:00"},
        {"dt":1705384800,"main":{"temp":272.38,"feels_like":270.52,"temp_min":272.38,"temp_max":272.38,"pressure":1016,"sea_level":1016,"grnd_level":1013,"humidity":48,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":71},"wind":{"speed":1.5,"deg":248,"gust":3.25},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-16 06:00:00"},
        {"dt":1705395600,"main":{"temp":272.65,"feels_like":270.34,"temp_min":272.65,"temp_max":272.65,"pressure":1016,"sea_level":1016,"grnd_level":1013,"humidity":44,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":26},"wind":{"speed":1.83,"deg":227,"gust":3.17},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-16 09:00:00"},
        {"dt":1705406400,"main":{"temp":274.39,"feels_like":271.81,"temp_min":274.39,"temp_max":274.39,"pressure":1013,"sea_level":1013,"grnd_level":1011,"humidity":37,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":63},"wind":{"speed":2.29,"deg":215,"gust":3.79},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-16 12:00:00"},
        {"dt":1705417200,"main":{"temp":274.93,"feels_like":272.69,"temp_min":274.93,"temp_max":274.93,"pressure":1010,"sea_level":1010,"grnd_level":1008,"humidity":39,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":27},"wind":{"speed":2.07,"deg":212,"gust":4.83},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-01-16 15:00:00"},
        {"dt":1705428000,"main":{"temp":273.13,"feels_like":271,"temp_min":273.13,"temp_max":273.13,"pressure":1008,"sea_level":1008,"grnd_level":1005,"humidity":50,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":14},"wind":{"speed":1.75,"deg":194,"gust":4.51},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-16 18:00:00"},
        {"dt":1705438800,"main":{"temp":273.15,"feels_like":271.54,"temp_min":273.15,"temp_max":273.15,"pressure":1006,"sea_level":1006,"grnd_level":1003,"humidity":59,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":98},"wind":{"speed":1.41,"deg":175,"gust":2.35},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-16 21:00:00"},
        {"dt":1705449600,"main":{"temp":273.25,"feels_like":271.36,"temp_min":273.25,"temp_max":273.25,"pressure":1003,"sea_level":1003,"grnd_level":1000,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":99},"wind":{"speed":1.6,"deg":159,"gust":4.57},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-17 00:00:00"},
        {"dt":1705460400,"main":{"temp":273.41,"feels_like":271.76,"temp_min":273.41,"temp_max":273.41,"pressure":999,"sea_level":999,"grnd_level":996,"humidity":75,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.46,"deg":136,"gust":3.75},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-17 03:00:00"},
        {"dt":1705471200,"main":{"temp":273.63,"feels_like":271.87,"temp_min":273.63,"temp_max":273.63,"pressure":995,"sea_level":995,"grnd_level":992,"humidity":73,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":1.55,"deg":85,"gust":2.58},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-01-17 06:00:00"},
        {"dt":1705482000,"main":{"temp":273.99,"feels_like":271.93,"temp_min":273.99,"temp_max":273.99,"pressure":993,"sea_level":993,"grnd_level":990,"humidity":74,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.8,"deg":74,"gust":4.68},"visibility":10000,"pop":0.37,"sys":{"pod":"d"},"dt_txt":"2024-01-17 09:00:00"},
        {"dt":1705492800,"main":{"temp":273.96,"feels_like":271.37,"temp_min":273.96,"temp_max":273.96,"pressure":990,"sea_level":990,"grnd_level":987,"humidity":91,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":2.23,"deg":44,"gust":4.78},"visibility":2062,"pop":0.45,"snow":{"3h":0.49},"sys":{"pod":"d"},"dt_txt":"2024-01-17 12:00:00"},
        {"dt":1705503600,"main":{"temp":273.99,"feels_like":270.94,"temp_min":273.99,"temp_max":273.99,"pressure":989,"sea_level":989,"grnd_level":986,"humidity":95,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":2.69,"deg":32,"gust":6.88},"visibility":2156,"pop":0.65,"snow":{"3h":1.27},"sys":{"pod":"d"},"dt_txt":"2024-01-17 15:00:00"},
        {"dt":1705514400,"main":{"temp":274.05,"feels_like":271.38,"temp_min":274.05,"temp_max":274.05,"pressure":989,"sea_level":989,"grnd_level":987,"humidity":86,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"clouds":{"all":100},"wind":{"speed":2.32,"deg":23,"gust":6.81},"visibility":10000,"pop":0.59,"snow":{"3h":0.24},"sys":{"pod":"n"},"dt_txt":"2024-01-17 18:00:00"}],
    "city":{
        "id":2643743,
        "name":"London",
        "coord":{"lat":51.5073,"lon":-0.1276},
        "country":"GB",
        "population":1000000,
        "timezone":0,
        "sunrise":1705046526,
        "sunset":1705076075
    }
}*/

export function Weather({city = 'London'}) {
    const [weather, setWeather] = useState(INITIAL_WEATHER);

    useEffect(() => {
        fetchCity(city, setWeather);

    }, []);

    return (
        <div>
            <h1 className={styles.title}>The weather in {city}</h1>
            <div className={styles.weather_block}>
                <WeatherContent weather={weather}/>
            </div>
        </div>
    );
}
