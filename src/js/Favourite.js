
import React from 'react';
import CurrencyItem from './CurrencyItem';
class Favourite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const currencies = this.props.currencies;
        return (
            <>
                <ul class="uk-list uk-list-striped">
                    {currencies.map((item) => {
                        return <CurrencyItem key={item.code} currency={item}></CurrencyItem>
                    })}
                </ul>
            </>

        )
    }
}

export default Favourite;