import axios from 'axios';
export const fetchCurrencies = axios({
    method: 'get',
    url: 'http://api.nbp.pl/api/exchangerates/tables/C'
})