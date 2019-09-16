import React, { useContext } from "react";
import { Route, Switch, __RouterContext } from "react-router-dom";
import {useTransition, animated} from "react-spring";

import withTracker from "./lib/withTracker";
import Home from "./containers/Home";
import Content from "./components/Content";
import Whitepaper from "./components/Whitepaper";
import Webinar from "./components/Webinar";
import Footer from "./components/Footer";

import "./css/normalize.css";
import "./css/Main.css";

const useRouter = () => {
  return useContext(__RouterContext)
}

export default function App() {
    const {location} = useRouter();

	const transitions = useTransition(location, location => location.pathname, {
        initial: {
            // opacity: 1,
            transform: 'translate3d(0, 0%, 0)'
        },
        from: {
            opacity: 0,
            transform: 'translate3d(0, 100%, 0)'
        },
        enter: {
            opacity: 1,
            transform: 'translate3d(0, 0%, 0)'
        },
        leave: {
            opacity: 0,
            transform: 'translate3d(0, -70%, 0)'
        }
	});

    return transitions.map(({item, props, key}) => (
        <animated.div key={key} style={props}>
            <Switch location={item}>
                <Route path="/contact" component={withTracker(Footer)} />
                <Route path="/whitepaper" component={withTracker(Whitepaper)} />
                <Route path="/webinar" component={withTracker(Webinar)} />
                <Route path="/services" component={withTracker(Content)} />
                <Route path="/home" component={withTracker(Home)} />
                <Route path="/*" component={withTracker(Home)} />
            </Switch>
        </animated.div>
    )
)}
