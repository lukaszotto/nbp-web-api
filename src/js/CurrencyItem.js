
import React from 'react';
import UIkit from 'uikit';
import { connect } from 'react-redux';
import { toggleFavourite } from './actions/actions';
import Icons from 'uikit/dist/js/uikit-icons';
import { CurrencyItemWrap } from './styles/styles'
class CurrencyListItem extends React.Component {
    constructor(props) {
        super(props);
        UIkit.use(Icons); // use with 'uk-icon='
    }

    render() {
        const currency = this.props.currency;
        return (
            <li>
                <CurrencyItemWrap customStyle={this.props.customStyle}>
                    <strong className="uk-text-left">{currency.currency}</strong>
                    <strong>{currency.code}</strong>
                    <span>bid: {currency.bid}</span>
                    <span>ask: {currency.ask}</span>
                    <a title="Add to favourites" className="uk-text-right" onClick={() => {
                        this.props.toggleFavourite(currency.code)
                    }}>
                        {
                            (currency.favourite ? <span uk-icon="close"></span> : <span uk-icon="star"></span>)
                        }
                    </a>
                </CurrencyItemWrap>
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