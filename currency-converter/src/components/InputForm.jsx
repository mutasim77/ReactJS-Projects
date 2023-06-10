import React from 'react';
import { Input } from '@mui/material';

const InputForm = ({ inputValue, setInputValue }) => {

    const onHandleChange = (evt) => {
        if (isNaN(evt.target.value)) {
            return;
        }
        setInputValue(evt.target.value);
    }

    return (
        <Input
            onChange={onHandleChange}
            placeholder="Type here…"
            value={inputValue}
        />
    )
}

export default InputForm;
