import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";

export const TabPanel = ({tabId, times, index}) => {
    const rowTitles = ['', '', 'Temperature, °C', 'feels like', 'Pressure, mm', 'Humidity, %'];

    return (
        <div role="tabpanel" hidden={tabId !== index} id={`tabpanel-${index}`}>
            {tabId === index && (
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}}>
                            <TableBody>
                                {
                                    times[0].map((value, propId) => {
                                            // console.log(`propId - ${propId}`);

                                            return (
                                                <TableRow key={propId}
                                                          sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                                    <TableCell component="th" scope="row">{rowTitles[propId]}</TableCell>
                                                    {
                                                        times.map((weatherTime, timeId) => {
                                                            if (times[timeId].length > 0) {
                                                                return <TableCell key={timeId} component="td" scope="row" sx={{width: '12.5%', fontSize: '12px'}}>
                                                                    {Object.values(times[timeId][propId])[0]}
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