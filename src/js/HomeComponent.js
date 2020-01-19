import React from 'react';
import Currencies from './Currencies';
import Favourite from './Favourite';
import { connect } from 'react-redux';
import { Sidebar, Container } from './styles/styles'

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
            <>
                <Container>
                    <h3>Favourites</h3>
                    <Favourite currencies={favouriteCurrencies}></Favourite>
                </Container>
                <Sidebar>
                    <h3>NBP currencies</h3>
                    <Currencies currencies={currencies}></Currencies>
                </Sidebar>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        rates: state.rates
    }
}
export default connect(mapStateToProps)(HomeComponent);