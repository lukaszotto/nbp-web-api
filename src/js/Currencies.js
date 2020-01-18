
import React from 'react';
import CurrencyItem from './CurrencyItem';
class Currencies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterBy: ''
        }
    }
    updateFilter = (event) => {
        this.setState({
            filterBy: event.target.value
        });
    }
    render() {
        const currencies = this.props.currencies;
        return (
            <>
                <input onChange={this.updateFilter}></input>
                {currencies.filter((item) => {
                    const searchIn = item.code.toLowerCase() + ' ' + item.currency.toLowerCase();
                    return searchIn.includes(this.state.filterBy.toLowerCase())
                }).map((item) => {
                    return <CurrencyItem key={item.code} currency={item}></CurrencyItem>
                })}
            </>
        )
    }
}

export default Currencies;