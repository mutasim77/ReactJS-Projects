export const currencyFormat = (number, currency, flag) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(number) + ` ${flag}`;
}

export const calculateCurrency = (input, currency) => {
    return (parseInt(input) * currency).toFixed(2);
}