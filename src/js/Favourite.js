
import React from 'react';
import UIkit from 'uikit';
import CurrencyItem from './CurrencyItem';
import { connect } from 'react-redux';
import { clearAllFavourites } from './actions/actions';
import Icons from 'uikit/dist/js/uikit-icons';

class Favourite extends React.Component {
    constructor(props) {
        super(props);
        UIkit.use(Icons); // use with 'uk-icon='
    }
    render() {
        const currencies = this.props.currencies;
        return (
            <>
                <ul className="uk-list uk-list-striped">
                    {currencies.map((item) => {
                        return <CurrencyItem key={item.code} currency={item}></CurrencyItem>
                    })}
                </ul>
                {currencies.length ? <a className="uk-float-right" onClick={this.props.clearAllFavourites}>Remove all <span uk-icon="trash"></span></a> : ""}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const mapDispatchToProps = (dispatch) => ({
    clearAllFavourites() {
        dispatch(clearAllFavourites())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Favourite);