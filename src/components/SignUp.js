import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import classnames from "classnames";
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
    .min(2,'Minimun length is 2 characters')
    .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
    password2: Yup.string()
        .oneOf([Yup.ref('password')],'passwords not match')
        .required('Required')
});
class SignUp extends React.Component {
    render() {

        const { signup } = this.props;

        return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-grey">Sign Up</h3>
                    <p className="subtitle has-text-grey">Please fill form to proceed.</p>
                    <div className="box">
                    <Formik
                            initialValues={{ name: '', email: '', password: '', passwrod2: ''}}
                            validationSchema={SignUpSchema}
                            onSubmit={values => {
                                signup(values);
                                console.log(values);
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <div className="control">
                                    <input
                                        name="name"
                                        className={
                                            classnames(
                                                'input',
                                                'is-large',
                                                {'is-danger':errors.name}
                                                )}
                                        type="text"
                                        maxLength="30"
                                        placeholder="Your Name"
                                        autoFocus
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}/>
                                </div>
                                {errors.name && <p className="help is-danger is-pulled-right">{errors.name}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                    name="email"
                                    className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            {'is-danger':errors.email}
                                            )}
                                    type="email"
                                    placeholder="Your Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}/>
                                </div>
                                {errors.email && <p className="help is-danger is-pulled-right">{errors.email}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="password"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            {'is-danger':errors.password}
                                            )}
                                        type="password"
                                        placeholder="Your password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}/>
                                </div>
                                {errors.password && <p className="help is-danger is-pulled-right">{errors.password}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="password2"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            {'is-danger':errors.password2}
                                            )}
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password2}/>
                                </div>
                                {errors.password2 && <p className="help is-danger is-pulled-right">{errors.password2}</p> }
                            </div>

                            <button type="submit" className="button is-block is-info is-large is-fullwidth">Sign Up</button>
                        </form>
                        )}
                        </Formik>
                    </div>
                    <p className="has-text-grey">
                        <Link to="/login">Log In</Link> &nbsp;·&nbsp;
                        <Link to="/forgotpassword">Forgot Password</Link> &nbsp;·&nbsp;
                        <Link to="/help">Need Help?</Link>
                    </p>
                </div>
            </div>
        </div>
    </section>)
    }
}
export default SignUp;