import React from "react";
import Hero from "../Hero";
import Content from "../Content";
import Partners from "../Partners";
import About from "../About";
import PageStyles from "../UI/PageStyles";

const Home = props =>
    <div style={PageStyles} className="top-wrap">
        <Hero />
        <Content />
        <Partners />
        <About />
    </div>

export default Home;
