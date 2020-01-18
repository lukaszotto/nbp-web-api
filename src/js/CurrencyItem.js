
import React from 'react';

const CurrencyItem = ({ currency }) => {
    return (
        <>
            <h2>{currency.currency}</h2>
            <h3>{currency.code}</h3>
            <p>
                <span>bid: {currency.bid}</span> / <span>ask: {currency.ask}</span>
            </p>
        </>
    )
}
export default CurrencyItem;