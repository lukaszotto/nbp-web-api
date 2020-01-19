
import React from 'react';
import CurrencyListItem from './CurrencyItem';
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
                <input placeholder="filter by" onChange={this.updateFilter} type="text" className="uk-input" />
                <ul className="uk-list uk-list-striped">
                    {currencies.filter((item) => {
                        const searchIn = item.code.toLowerCase() + ' ' + item.currency.toLowerCase();
                        return searchIn.includes(this.state.filterBy.toLowerCase())
                    }).map((item) => {
                        return <CurrencyListItem customStyle="aside" key={item.code} currency={item}></CurrencyListItem>
                    })}
                </ul>
            </>
        )
    }
}

export default Currencies;