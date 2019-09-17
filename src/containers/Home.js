import React, { Component } from "react";
import Hero from "./Hero";
import Content from "./Content";
import Partners from "./Partners";
import About from "./About";
import PageStyles from "../components/presentation/PageStyles";

class Home extends Component {
    render() {
        return (
            <div style={PageStyles} className="uk-background-default">
                <Hero />
                <Content />
                <Partners />
                <About />
            </div>
        )
    }
}

export default Home;
