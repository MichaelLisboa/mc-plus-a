import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "../Forms/Button";
import * as Yup from "yup";

const getSchema = () => Yup.object().shape({
    firstName: Yup.string()
        .required('Please enter your first name'),
    lastName: Yup.string()
        .required('Please enter your last name'),
    phone: Yup.string()
        .required('Please enter your phone number'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
    comment: Yup.string()
        .required('Please enter your message'),
});

class Contact extends Component {

    handleSubmit = data => {
        const body = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                company: data.company,
                comment: data.comment
            };
        console.log("FORM SUBMIT", body)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    company: "",
                    comment: ""
                }}
                validationSchema={getSchema}
                onSubmit={this.handleSubmit}
                render={({ handleChange, handleBlur, values, errors, touched, isSubmitting, validateForm }) => (
                    <Form>
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin-small-top uk-child-width-1-2" data-uk-grid>
                                <label htmlFor="firstName" className="uk-text-muted">First name
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        name="firstName"
                                        label={errors.firstName && touched.firstName ? errors.firstName : "First name"}
                                        placeholder={errors.firstName && touched.firstName && errors.firstName}
                                        className={`uk-input uk-form-large uk-border-rounded ${errors.firstName && touched.firstName ? "uk-form-danger" : "uk-form"}`}
                                        required
                                    />
                                </label>
                                <label htmlFor="lastName" className="uk-text-muted">Last name
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        name="lastName"
                                        label={errors.lastName && touched.lastName ? errors.lastName : "Last name"}
                                        placeholder={errors.lastName && touched.lastName && errors.lastName}
                                        className={`uk-input uk-form-large uk-border-rounded ${errors.lastName && touched.lastName ? "uk-form-danger" : "uk-form"}`}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="uk-margin-small-top uk-child-width-1-2" data-uk-grid>
                                <label htmlFor="email" className="uk-text-muted">Email address
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        name="email"
                                        label="Email address"
                                        placeholder={errors.email && touched.email && errors.email}
                                        className={`uk-input uk-form-large uk-border-rounded ${errors.email && touched.email ? "uk-form-danger" : "uk-form"}`}
                                        required
                                    />
                                </label>
                                <label htmlFor="phone" className="uk-text-muted">Phone number
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        name="phone"
                                        label={errors.phone && touched.phone ? errors.phone : "Phone number"}
                                        placeholder={errors.phone && touched.phone && errors.phone}
                                        className={`uk-input uk-form-large uk-border-rounded ${errors.phone && touched.phone ? "uk-form-danger" : "uk-form"}`}
                                        required
                                    />
                                </label>
                            </div>

                            <div className="uk-margin-small-top">
                                <label htmlFor="company" className="uk-text-muted">Company or organization
                                    <Field
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.company}
                                        name="company"
                                        label={errors.company && touched.company ? errors.company : "Company"}
                                        placeholder={errors.company && touched.company && errors.company}
                                        className={`uk-input uk-form-large uk-border-rounded ${errors.company && touched.company ? "uk-form-danger" : "uk-form"}`}
                                    />
                                </label>
                            </div>
                            <div className="uk-margin-small-top">
                                <label htmlFor="comment" className="uk-text-muted">Your message
                                <Field
                                    component="textarea"
                                    name="comment"
                                    label={errors.comment && touched.comment ? errors.comment : "Your message"}
                                    placeholder={errors.comment && touched.comment && errors.comment}
                                    rows="4"
                                    className={`uk-textarea uk-form-large uk-border-rounded ${errors.comment && touched.comment ? "uk-form-danger" : null}`}
                                    required
                                />
                                </label>
                            </div>

                            <div className="uk-margin-medium-top uk-text-right">
                                <Button type="submit" size="large" format="primary" disabled={isSubmitting}>Submit</Button>
                            </div>
                        </fieldset>
                    </Form>
                )}
            />
        )
    }
}

export default Contact;
