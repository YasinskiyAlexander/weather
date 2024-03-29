import {Box, Tab, Tabs} from "@mui/material";
import {ZERO} from "../constants/initial";

export const TabGroup = ({setTabId, tabId, weather}) => {

    const handleChange = (event, value) => {
        setTabId(value);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabId} onChange={handleChange} variant="fullWidth" aria-label="tabs">
                {
                    weather.length>0 && weather.map((value, index)=>{
                        const val = Object.values(value)[ZERO];
                        return <Tab key={index} label = {`${val.dayOfWeek} ${val.month} ${val.day}`} />
                    })
                }
            </Tabs>
        </Box>
    );
}
