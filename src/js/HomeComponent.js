import React from 'react';
import { fetchCurrencies } from './api/config'
import Currencies from './Currencies';
import Favourite from './Favourite';
class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            rates: []
        }
    }
    componentDidMount() {
        fetchCurrencies.then(({ data }) => {
            this.setState({
                rates: data[0].rates.map((item) => {
                    return { ...item, favourite: false }
                })
            })
        });
    }
    render() {
        const currencies = this.state.rates;
        const favouriteRates = currencies.filter((item) => { return item.favourite === true })
        return (
            <section className="uk-container">
                <h3>Favourite</h3>
                <Favourite currencies={favouriteRates}></Favourite>
                <h3>NBP currencies</h3>
                <Currencies currencies={currencies}></Currencies>

            </section>
        )
    }
};
export default HomeComponent;