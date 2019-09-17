import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import {useTransition, animated} from "react-spring";

import withTracker from "./lib/withTracker";
import Home from "./containers/Home";
import Content from "./containers/Content";
import Whitepaper from "./containers/Whitepaper";
import Webinar from "./containers/Webinar";
import About from "./containers/About";

import "./css/normalize.css";
import "./css/Main.css";

const useRouter = () => {
  return useContext(__RouterContext)
}

export default function App() {
    const {location} = useRouter();

	const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(0, 80vh, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(0, -50vh, 0)' },
	});

    return transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/contact" component={withTracker(About)} />
                <Route path="/whitepaper" component={withTracker(Whitepaper)} />
                <Route path="/webinar" component={withTracker(Webinar)} />
                <Route path="/services" component={withTracker(Content)} />
                <Route path="/home" component={withTracker(Home)} />
                <Route path="/*" component={withTracker(Home)} />
            </Switch>
        </animated.div>
    )
)}
