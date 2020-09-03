import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Metronome from './components/MetronomePageComponent';
import configureStore from './store/configureStore';
import './App.scss';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                    <Link to="/">Metronome</Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={Metronome} />
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
