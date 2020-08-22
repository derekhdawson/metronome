import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './pages/Home';

export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
