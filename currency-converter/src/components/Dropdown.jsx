import React from 'react';
import { Autocomplete, TextField } from "@mui/material";
import useAxios from "../hooks/useAxios";

const Dropdown = ({ label, value, setValue }) => {
    const [data, error, loaded] = useAxios("https://restcountries.com/v3.1/all");

    const dataFilter = data.filter((item) => "currencies" in item);
    const dataCountries = dataFilter.map(item => `${item.flag} ${Object.keys(item.currencies)[0]}`);

    return (
        <Autocomplete
            value={value}
            disableClearable
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            options={dataCountries}
            sx={{ width: 170, }}
            renderInput={(params) => <TextField {...params} label={label} />}
        />
    )
}

export default Dropdown
