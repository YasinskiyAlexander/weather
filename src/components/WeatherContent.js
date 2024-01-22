import {TabGroup} from "./TabGroup";
import {Box} from "@mui/material";
import {TabPanel} from "./TabPanel";
import {useState} from "react";

export const WeatherContent = ({weather})=>{
    const [tabId, setTabId] = useState(0);
    console.log('WeatherContent')
    console.log(weather)
    return (
        <Box sx={{width: '100%'}}>
            <TabGroup setTabId={setTabId} tabId={tabId} weather={weather}/>
            <Box>
                {
                    weather.length > 0 &&
                    weather.map((value, index) => {
                        return <TabPanel key={index} tabId={tabId} times={Object.values(value)[0]['times']} index={index}/>
                    })
                }
            </Box>
        </Box>
    );
}