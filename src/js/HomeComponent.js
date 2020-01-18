import React from 'react';
import Currencies from './Currencies';
import Favourite from './Favourite';
import { connect } from 'react-redux';
class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            rates: []
        }
    }
    render() {
        const currencies = this.props.rates;
        const favouriteCurrencies = currencies.filter((item) => { return item.favourite === true })
        return (
            <section className="uk-container">
                <h3>Favourites</h3>
                <Favourite currencies={favouriteCurrencies}></Favourite>
                <h3>NBP currencies</h3>
                <Currencies currencies={currencies}></Currencies>
            </section>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        rates: state.rates
    }
}
export default connect(mapStateToProps)(HomeComponent);