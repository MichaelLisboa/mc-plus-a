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
                        <fieldset className="uk-fieldset">
                            <div className="uk-margin">
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
                            <Button type="submit" size="large" format="primary" disabled={isSubmitting}>Submit</Button>
                        </fieldset>
                    </Form>
                )}
            />
        )
    }
}

export default EmailForm;
