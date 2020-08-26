import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Metronome from './pages/MetronomePage/containers/MetronomePageContainer';
import configureStore from './store/configureStore';
import './App.scss';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
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
    }
}
