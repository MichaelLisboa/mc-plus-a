import React, { useState } from "react";
import { useTransition, useTrail, useSprings, animated } from 'react-spring';
import EmailForm from "../components/presentation/EmailForm";

import heroImage from "../images/hero-image.png";

const items = ['Lorem', 'ipsum', 'dolor', 'sit']

const Hero = () => {
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: 1,
        x: 20,
        height: 300,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <animated.div
            className="uk-cover-container uk-flex uk-flex-middle uk-height-1-1"
            data-uk-height-viewport="true">
                <img
                    src={heroImage}
                    alt=""
                    data-sizes="100vw"
                    data-uk-cover
                    data-uk-img
                />
			<animated.div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-large-bottom uk-margin-large-top uk-margin-small-top@m">
				<div className="uk-width-3-5@s uk-width-1-2@l">
					<h6 className="uk-margin-small-bottom" style={{fontWeight: "600", color: "#3D9DD6"}}>Supercharge your business</h6>
					<h1 style={{fontSize: "3em"}} className="section-title-primary uk-margin-remove-top">Your parts business can be an <span className="uk-text-nowrap">e-commerce</span> giant.</h1>
					<p className="subtitle-text">Get in touch and we discuss how we have help businesses like yours drive more revenue through better search.</p>
                    <EmailForm />
				</div>
			</animated.div>
            <div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center uk-visible@m">
				<a href="#content" data-uk-scroll="duration: 500" data-uk-icon="icon: arrow-down; ratio: 2">&nbsp;</a>
			</div>
		</animated.div>
    )
}

export default Hero;
