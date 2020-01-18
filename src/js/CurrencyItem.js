
import React from 'react';
import UIkit from 'uikit';
import { connect } from 'react-redux';
import { toggleFavourite } from './actions/actions';
import Icons from 'uikit/dist/js/uikit-icons';
class CurrencyListItem extends React.Component {
    constructor(props) {
        super(props);
        UIkit.use(Icons); // use with 'uk-icon='
    }

    render() {
        const currency = this.props.currency;
        return (
            <li >
                <p className="uk-grid uk-text-center uk-child-width-1-5@s">
                    <strong className="uk-text-left">{currency.currency}</strong>
                    <span>{currency.code}</span>
                    <span>bid: {currency.bid}</span>
                    <span>ask: {currency.ask}</span>
                    <a title="Add to favourites" className="uk-text-right" onClick={() => {
                        this.props.toggleFavourite(currency.code)
                    }}>
                        {
                            (currency.favourite ? <span uk-icon="close"></span> : <span uk-icon="star"></span>)
                        }
                    </a>
                </p>
            </li>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch) => ({
    toggleFavourite(code) {
        dispatch(toggleFavourite(code))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListItem);