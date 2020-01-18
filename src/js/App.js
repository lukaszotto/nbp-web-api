import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.sass';
import HomeComponent from './HomeComponent';

class App extends React.Component {

    render() {
        return (
            <>
                <HomeComponent></HomeComponent>
            </>
        )
    }

};


ReactDOM.render(<App />, document.getElementById('app'));