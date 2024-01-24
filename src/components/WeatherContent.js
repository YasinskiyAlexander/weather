import {TabGroup} from "./TabGroup";
import {Box} from "@mui/material";
import {TabPanel} from "./TabPanel";
import {useState} from "react";
import {ZERO} from "../constants/initial";
import {isWeather} from "../functions/isWeather";

export const WeatherContent = ({weather})=>{
    const [tabId, setTabId] = useState(ZERO);
    console.log('WeatherContent')
    console.log(weather)
    return (
        <Box sx={{width: '100%'}}>
            <TabGroup setTabId={setTabId} tabId={tabId} weather={weather}/>
            <Box>
                {
                    isWeather(weather) &&
                    weather.map((value, index) => {
                        return <TabPanel key={index} tabId={tabId} times={Object.values(value)[ZERO]['times']} index={index}/>
                    })
                }
            </Box>
        </Box>
    );
}
