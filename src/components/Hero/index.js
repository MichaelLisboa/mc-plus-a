import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSpring, useTransition, useChain, animated, config } from "react-spring";
import useRouter from "../../lib/UseRouter";
import heroImage from "../../images/hero-image.png";
import "./Hero.css";

const Anim = props => {
    return (
        props.transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            style={{ ...props }}
            className="uk-width-3-5@s uk-width-1-3@l">
            <h6 className="uk-margin-small-bottom" style={{fontWeight: "600", color: "#3D9DD6"}}>Users can buy what they can’t find</h6>
            <p className="section-title-primary uk-h2 uk-margin-remove-top">Unleash your <span className="uk-text-nowrap">e-commerce</span> potential
            with AI-powered Search and Merchandising</p>
            <p>Acquiring traffic in a competitive market like aftermarket auto parts is expensive.  You can’t afford to lose revenue from
                converting visitors into customers when they go somewhere else because they can’t find the product they are looking for.
                AI-powered search can give your site similar search and personalization features of e-commerce giants like Amazon,
                helping you keep more customers on your site and buying from you.  Get in touch with us today to schedule a demo.</p>
            <Link
                to={"/contact"}>
                Schedule a demo
            </Link>
        </animated.div>
        ))
    )
}

const Hero = props => {
    const { location } = useRouter();
    const springRef = useRef();
    useSpring({
        ref: springRef,
        delay: 250,
        initial: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' }
    })

    const transRef = useRef()
    const transitions = useTransition(location, (location) => location.pathname, {
        ref: transRef,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
        config: config.stiff
    });
    useChain([springRef, transRef]);

    return (
        <>
        <section
            className="uk-cover-container uk-flex uk-flex-middle top-wrap-height uk-visible@m"
            data-uk-height-viewport="true">
                <img
                    src={heroImage}
                    alt="MC+A"
                    data-uk-cover
                    data-uk-img
                />
            <div
                className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-large-bottom uk-margin-large-top uk-margin-small-top@m">
                <Anim transitions={transitions} />
            </div>
            <div className="uk-position-bottom-center uk-position-large uk-position-z-index uk-text-center uk-visible@m">
                <a href="#content" data-uk-scroll="duration: 500" data-uk-icon="icon: arrow-down; ratio: 2">&nbsp;</a>
            </div>
        </section>
        <section className="mobile-hero uk-hidden@m">
            <img
                src={heroImage}
                alt=""
            />
            <div
                className="uk-container uk-margin-large-bottom">
                <Anim transitions={transitions} />
            </div>
        </section>
        </>
    )
}

export default Hero;
