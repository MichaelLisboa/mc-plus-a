import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Partners from "./Partners";
import About from "./About";
import PageStyles from "../components/presentation/PageStyles";

const Home = props => {
    return (
        <div style={PageStyles} className="uk-background-default">
            <Hero />
            <Content />
            <Partners />
            <About />
        </div>
    )
}

export default Home;
