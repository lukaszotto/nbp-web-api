import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/style.sass';
import HomeComponent from './HomeComponent';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

class App extends React.Component {
    constructor(props) {
        super(props);
        UIkit.use(Icons);
    }
    render() {
        return (
            <>
                <HomeComponent></HomeComponent>
            </>
        )
    }

};


ReactDOM.render(<App />, document.getElementById('app'));