const symbols = ['GBP', 'EUR', 'USD', 'JPY', 'CHF', 'CAD', 'AUD', 'NZD', 'RUB', 'ZAR', 'MXN'];
const symbolsString = symbols.toString();

export const getCurrencyNames = () => symbols;

export const getExchangeRates = () => {
    let requests = symbols.map(symbol => fetch(`https://api.exchangeratesapi.io/latest?base=${symbol}&symbols=${symbolsString}`));
    return Promise.all(requests)
        .then(responses => responses)
        // map array of responses into array of response.json() to read their content
        .then(responses => Promise.all(responses.map(r => r.json())))
        // all JSON objects are parsed; "rates" in the array of them
        .then(rates => rates );
};
