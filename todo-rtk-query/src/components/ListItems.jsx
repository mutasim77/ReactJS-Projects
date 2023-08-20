import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';


// eslint-disable-next-line react/prop-types
const ListItems = ({ text, status, onDelete }) => {
    const [selected, setSelected] = useState(status);

    return (
        <>
            <Sheet>
                <Table
                    color="primary"
                    stripe="odd"
                    variant="outlined"
                />
            </Sheet>
            <ListItem >
                <IconButton
                    aria-label="delete"
                    onClick={() => setSelected(!selected)}
                    sx={{ width: '30px', height: '30px', border: '1px solid #000', bgcolor: selected ? 'green' : '' }}
                >
                    <CheckIcon />
                </IconButton>

                <ListItemText
                    className={selected ? 'line' : ''}
                    primary={text}
                    sx={{ ml: '1.3em' }}
                />

                <IconButton
                    aria-label="delete"
                    onClick={onDelete}
                >
                    <DeleteIcon color='error' />
                </IconButton>

            </ListItem>
        </>

    )
}


export default ListItems;
