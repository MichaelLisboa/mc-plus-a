import React from "react";
import { Route, Switch } from "react-router-dom";
import {useTransition, animated} from "react-spring";
import useRouter from "./lib/UseRouter";

import withTracker from "./lib/withTracker";
import Home from "./containers/Home";
import Content from "./containers/Content";
import Whitepaper from "./containers/Whitepaper";
import Webinar from "./containers/Webinar";
import About from "./containers/About";

import "./css/normalize.css";
import "./css/Main.css";

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
                <Route path="/contact" component={(About)} />
                <Route path="/whitepaper" component={(Whitepaper)} />
                <Route path="/webinar" component={(Webinar)} />
                <Route path="/services" component={(Content)} />
                <Route path="/" component={(Home)} />
            </Switch>
        </animated.div>
    )
)}
