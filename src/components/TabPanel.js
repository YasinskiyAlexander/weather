import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import {ROW_TITLES, ZERO} from "../constants/initial";
import {isWeather} from "../functions/isWeather";
import {isTheSame} from "../functions/isTheSame";

export const TabPanel = ({tabId, times, index}) => {


    return (
        <div role="tabpanel" hidden={!isTheSame(tabId, index)} id={`tabpanel-${index}`}>
            {isTheSame(tabId, index) && (
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}}>
                            <TableBody>
                                {
                                    times[ZERO].map((value, propId) => {
                                            // console.log(`propId - ${propId}`);

                                            return (
                                                <TableRow key={propId}
                                                          sx={{'&:last-child td, &:last-child th': {border: ZERO}}}>
                                                    <TableCell component="th" scope="row">{ROW_TITLES[propId]}</TableCell>
                                                    {
                                                        times.map((weatherTime, timeId) => {
                                                            if (isWeather(times[timeId])) {
                                                                return <TableCell key={timeId} component="td" scope="row" sx={{width: '12.5%', fontSize: '12px'}}>
                                                                    {Object.values(times[timeId][propId])[ZERO]}
                                                                </TableCell>
                                                            }
                                                        })
                                                    }
                                                </TableRow>
                                            )
                                        }
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </div>
    );
}
