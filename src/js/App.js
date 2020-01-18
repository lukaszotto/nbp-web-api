import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../styles/style.sass';
import HomeComponent from './HomeComponent';
import store from './store/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomeComponent></HomeComponent>
            </Provider>

        )
    }

};


ReactDOM.render(<App />, document.getElementById('app'));