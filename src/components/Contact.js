import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <form id="contactForm" className="uk-form">
                <fieldset className="uk-fieldset">
                    <div className="uk-margin-small-top uk-child-width-1-2" data-uk-grid>
                        <label htmlFor="first_name" className="uk-text-muted">First name<input name="first_name" type="text" className="uk-input uk-form-large " maxLength="75" required="" value="" /></label>
                        <label htmlFor="last_name" className="uk-text-muted">Last name<input name="last_name" type="text" className="uk-input uk-form-large " maxLength="75" required="" value="" /></label>
                    </div>
                    <div className="uk-margin-small-top uk-child-width-1-2" data-uk-grid>
                        <label htmlFor="from_email" className="uk-text-muted">Email address<input name="from_email" type="text" className="uk-input uk-form-large " maxLength="100" required="" value="" /></label>
                        <label htmlFor="from_phone" className="uk-text-muted">Phone number<input name="from_phone" type="text" className="uk-input uk-form-large " maxLength="100" required="" value="" /></label>
                    </div>

                    <div className="uk-margin-small-top">
                        <label htmlFor="company" className="uk-text-muted">Your company<input name="company" type="text" className="uk-input uk-form-large " maxLength="100" required="" value="" /></label>
                    </div>
                    <div className="uk-margin-small-top">
                        <label htmlFor="comment" className="uk-text-muted">Your message<textarea name="comment" rows="3" className="uk-textarea uk-form-large " maxLength="1000" required=""></textarea></label>
                    </div>
                    <div className="uk-margin-large-bottom uk-margin-medium-top uk-text-right">
                        <button type="submit" className="uk-button uk-button-secondary uk-width-1-2 uk-width-1-3@s" disabled="">Send</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Contact;
