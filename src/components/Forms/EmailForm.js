import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "./Button";
import * as Yup from "yup";

const getSchema = () => Yup.object().shape({
    emailForm: Yup.string()
        .email('Please enter a valid email address')
        .required('Please enter your email address')
});

class EmailForm extends Component {

    handleSubmit = data => {
        const body = {
                emailForm: data.emailForm,
            };
        console.log("FORM SUBMIT", body)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    emailForm: "",
                }}
                validationSchema={getSchema}
                onSubmit={this.handleSubmit}
                render={({ handleChange, handleBlur, values, errors, touched, isSubmitting, validateForm }) => (
                    <Form>
                        <div className="uk-grid-small" data-uk-grid>
                            <div className="uk-width-1-2@s">
                                <Field
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.emailForm}
                                    name="emailForm"
                                    label="Email address"
                                    placeholder={errors.emailForm && touched.emailForm ? errors.emailForm : "Email address"}
                                    className={`uk-input uk-form-large uk-border-rounded ${errors.emailForm && touched.emailForm ? "uk-form-danger" : "uk-form"}`}
                                    required
                                />
                            </div>
                            <div className="uk-width-1-2@s">
                                <Button type="submit" size="large" format="primary" disabled={isSubmitting}>Learn more</Button>
                            </div>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default EmailForm;
