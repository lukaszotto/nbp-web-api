
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
const CurrencyListItem = ({ currency }) => {
    UIkit.use(Icons);
    return (
        <li >
            <p className="uk-grid uk-text-center uk-child-width-1-5@s">
                <strong className="uk-text-left">{currency.currency}</strong>
                <span>{currency.code}</span>
                <span>bid: {currency.bid}</span>
                <span>ask: {currency.ask}</span>
                <a title="add to favourite" className="uk-text-right">
                    {
                        (currency.favourite ? <span uk-icon="close"></span> : <span uk-icon="star"></span>)
                    }
                </a>
            </p>
        </li>
    )
}
export default CurrencyListItem;