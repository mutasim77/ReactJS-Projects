import React from 'react';
import { useState } from 'react';
import Spinner from "./Spinner"
import Dropdown from './Dropdown';
import InputForm from "./InputForm";
import useAxios from "../hooks/useAxios";
import { currencyFormat, calculateCurrency } from '../utils/index';

const Container = () => {
    const [fromCurrency, setFromCurrency] = useState('🇺🇸 USD');
    const [toCurrency, setToCurrency] = useState('🇷🇺 RUB');
    const [inputValue, setInputValue] = useState('1');

    const codeFromCurrency = fromCurrency.split(' ')[1];
    const codeToCurrency = toCurrency.split(' ')[1];

    const [data, error, loaded] = useAxios(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_API_KEY}/pair/${codeFromCurrency}/${codeToCurrency}`);

    const flag = toCurrency.split(' ')[0];
    const resultToCurrency = calculateCurrency(inputValue, data.conversion_rate);

    if (error) {
        return "Error";
    }

    return (
        <div className="m-auto mt-[15%] flex flex-col justify-center align-center max-w-[500px] card p-10">
            <h1 className="text-center text-2xl font-bold mb-5 text-black">Currency Convertor</h1>
            <InputForm inputValue={inputValue} setInputValue={setInputValue} />

            <div className="flex justify-between mt-10">
                <Dropdown value={fromCurrency} setValue={setFromCurrency} label="From" />
                <Dropdown value={toCurrency} setValue={setToCurrency} label="To" />
            </div>
            {
                loaded ?
                    <Spinner />
                    :
                    <div className="result text-black text-2xl text-center mt-10">
                        {inputValue} {fromCurrency} = {currencyFormat(resultToCurrency, codeToCurrency, flag)}
                    </div>
            }
        </div>

    )
}

export default Container;
