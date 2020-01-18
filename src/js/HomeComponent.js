import React from 'react';
import { fetchCurrencies } from './api/config'
import Currencies from './Currencies';
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
                rates: data[0].rates
            })
        });
    }
    render() {
        const currencies = this.state.rates;
        return (
            <section>
                <h3>NBP currencies</h3>
                <Currencies currencies={currencies}></Currencies>
            </section>
        )
    }
};
export default HomeComponent;