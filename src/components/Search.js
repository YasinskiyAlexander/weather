import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {

    return <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Назва населеного пункту, країни або регіону"
            inputProps={{ 'aria-label': 'search maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
}
