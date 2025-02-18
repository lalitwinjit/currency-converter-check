import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_XkAPuyoV3XZ3e8kJDAEvS0UTdluICkKL8PwjZdGC');


export async function convertCurrency(fromCurrency, toCurrency, units) {
   const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const mutliplier = res.data[toCurrency]
    return mutliplier*units;
}


