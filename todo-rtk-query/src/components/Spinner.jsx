import { Skeleton } from "@mui/material";
import Box from '@mui/material/Box';


const Spinner = () => {
    return (
        <Box sx={{ maxWidth: 300, m: 'auto' }}>
            <Skeleton animation="wave" height={70} />
            <Skeleton animation="wave" height={70} />
            <Skeleton animation="wave" height={70} />
        </Box>
    )
}

export default Spinner;
