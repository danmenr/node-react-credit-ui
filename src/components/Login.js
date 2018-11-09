import * as Yup from 'yup';
import React from "react";
import { Formik } from "formik";
import classnames from "classnames";
import { Link } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

class Login extends React.Component {
    render() {
        return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-grey">Login</h3>
                    <p className="subtitle has-text-grey">Please login to proceed.</p>
                    <div className="box">
                        <Formik
                            initialValues={{ email: '', password: ''}}
                            validationSchema={LoginSchema}
                            onSubmit={values => {
                              // same shape as initial values
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
                                        name="email"
                                        className={classnames('input','is-large',{'is-danger':errors.email})}
                                        type="email"
                                        placeholder="Your Email"
                                        autoFocus
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
                                        className={classnames('input','is-large',{'is-danger':errors.password})}
                                        type="password"
                                        placeholder="Your Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        />
                                    </div>
                                    {errors.password && <p className="help is-danger is-pulled-right">{errors.password}</p> }
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-block is-info is-large is-fullwidth">Login</button>
                                </div>
                            </form>
                            )}
                        </Formik>
                    </div>
                    <p className="has-text-grey">
                        <Link to="/signup">Sign Up</Link> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                    </p>
                </div>
            </div>
        </div>
    </section>)
    }
}
export default Login;