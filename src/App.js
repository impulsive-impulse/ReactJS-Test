import React, { Component } from 'react';
import Main from './Components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

const store = ConfigureStore();

class App extends Component {

    render() {
        const Root = () => {
            return ( <
                React.Fragment >
                <
                BrowserRouter >
                <
                Main / >
                <
                /BrowserRouter> <
                /React.Fragment>
            );
        }

        return ( <
            Provider store = { store } >
            <
            Root / >
            <
            /Provider>   
        );
    }
}

export default App;