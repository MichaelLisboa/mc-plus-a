import React, { Component } from "react";
import { Input } from "./presentation/Input";
import { Button } from "./presentation/Button";

import Content from "./Content";
import Partners from "./Partners";
import Footer from "./Footer";

import heroImage from "../images/hero-image.png"
import heroSrcImage from "../images/hero-image.png"

class Hero extends Component {
    render() {
        return (
            <>
            <div className="uk-cover-container uk-flex uk-flex-middle uk-height-1-1"
                data-uk-height-viewport="true">
                    <img
                        src={heroImage}
                        alt=""
                        data-sizes="100vw"
                        data-uk-cover
                        data-uk-img
                        data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
                    />
				<div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-large-bottom uk-margin-large-top uk-margin-small-top@m"
                    data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: div > *; delay: 250">
					<div className="uk-width-3-5@s uk-width-1-2@l">
						<h6 className="uk-margin-small-bottom" style={{fontWeight: "600", color: "#3D9DD6"}}>Supercharge your business</h6>
						<h1 style={{fontSize: "3em !important"}} className="section-title-primary uk-margin-remove-top">Your parts business can be an <span className="uk-text-nowrap">e-commerce</span> giant.</h1>
						<p className="subtitle-text">Get in touch and we discuss how we have help businesses like yours drive more revenue through better search.</p>
                        <form className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-1-2@s">
                                <Input
                                    type="text"
                                    placeholder="Email address"
                                    size="large"
                                    format="default"
                                    />
                            </div>
                            <div className="uk-width-1-2@s">
                                <Button type="text" size="large" format="primary">
                                    LEARN MORE
                                </Button>
                            </div>
                        </form>
					</div>
				</div>
                <div className="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center uk-visible@m">
    				<a href="#content" data-uk-scroll="duration: 500" data-uk-icon="icon: arrow-down; ratio: 2"></a>
    			</div>
			</div>
            <Content />
            <Partners />
            <Footer />
            </>
        )
    }
}

export default Hero;
