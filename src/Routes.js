import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import withTracker from "./lib/withTracker";
import ScrollToTopRoute from "./lib/ScrollToTopRoute";
import Home from "./containers/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

class Routes extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <main>
                    <Navigation />
                    <Switch>
                        <ScrollToTopRoute path="/contact" component={withTracker(Contact)} />
                        <ScrollToTopRoute path="/*" component={withTracker(Home)} />
                    </Switch>
                </main>
            </Router>
        )
    }
}

export default Routes;