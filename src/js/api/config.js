import axios from 'axios';
export const fetchExchangerates = axios({
    method: 'get',
    url: 'http://api.nbp.pl/api/exchangerates/tables/C'
})