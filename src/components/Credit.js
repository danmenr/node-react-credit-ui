import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import classnames from "classnames";
import * as Yup from 'yup';

const CreditSchema = Yup.object().shape({
    name: Yup.string()
    .min(2,'Minimun length is 2 characters')
    .required('Required'),
    amount: Yup.number()
        .moreThan(0,'credit amount can not be zero')
        .required('Required'),
    payments: Yup.number()
        .moreThan(0,'payments can not be zero')
        .required('Required'),
    paymentAmount: Yup.number()
        .moreThan(0,'payment amount can not be zero')
        .required('Required'),
    frecuency: Yup.number()
        .moreThan(0,'frecuency can not be zero'),
    rate: Yup.number()
        .moreThan(0,'rate can not be zero'),
    creditOwner: Yup.string()
        .min(2,'Minimun length is 2 characters')
});
class SignUp extends React.Component {
    render() {

        const { saveCredit } = this.props;

        return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title has-text-grey">Credit</h3>
                    <p className="subtitle has-text-grey">Please fill form to proceed.</p>
                    <div className="box">
                    <Formik
                            initialValues={{ name: '', amount: 0, payments: 0, paymentAmount: 0, frecuency: 0, rate: 0, creditOwner: ''}}
                            validationSchema={CreditSchema}
                            onSubmit={values => {
                                saveCredit(values);
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
                                        placeholder="Credit Name"
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
                                    name="amount"
                                    className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            'has-text-right',
                                            {'is-danger':errors.amount}
                                            )}
                                    type="number"
                                    placeholder="Credit Amount"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.amount}/>
                                </div>
                                {errors.amount && <p className="help is-danger is-pulled-right">{errors.amount}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="payments"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            'has-text-right',
                                            {'is-danger':errors.payments}
                                            )}
                                        type="number"
                                        placeholder="# Payments"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.payments}/>
                                </div>
                                {errors.payments && <p className="help is-danger is-pulled-right">{errors.payments}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="paymentAmount"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            'has-text-right',
                                            {'is-danger':errors.paymentAmount}
                                            )}
                                        type="number"
                                        placeholder="Confirm Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.paymentAmount}/>
                                </div>
                                {errors.paymentAmount && <p className="help is-danger is-pulled-right">{errors.paymentAmount}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="frecuency"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            'has-text-right',
                                            {'is-danger':errors.frecuency}
                                            )}
                                        type="number"
                                        placeholder="Frecuency"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.frecuency}/>
                                </div>
                                {errors.frecuency && <p className="help is-danger is-pulled-right">{errors.frecuency}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="rate"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            'has-text-right',
                                            {'is-danger':errors.rate}
                                            )}
                                        type="number"
                                        placeholder="Rate"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.rate}/>
                                </div>
                                {errors.rate && <p className="help is-danger is-pulled-right">{errors.rate}</p> }
                            </div>

                            <div className="field">
                                <div className="control">
                                    <input
                                        name="creditOwner"
                                        className={
                                        classnames(
                                            'input',
                                            'is-large',
                                            {'is-danger':errors.creditOwner}
                                            )}
                                        type="text"
                                        placeholder="Credit Owner"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.creditOwner}/>
                                </div>
                                {errors.creditOwner && <p className="help is-danger is-pulled-right">{errors.creditOwner}</p> }
                            </div>

                            <button type="submit" className="button is-block is-info is-large is-fullwidth">Create Credit</button>
                        </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </section>)
    }
}
export default SignUp;