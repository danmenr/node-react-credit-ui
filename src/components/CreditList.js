import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CreditList extends Component {
    static propTypes = {
        credits: PropTypes.array,
        getCredits: PropTypes.func
    }
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getCredits();
    }
    render() {
        const { credits } = this.props;
        return (
        <React.Fragment>
            <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Payments</th>
                    <th>Payments Amount</th>
                    <th>Frecuency</th>
                    <th>Rate</th>
                    <th>Credit Owner</th>
                    <th>Date Created</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { credits.map((credit) => {
                  return(  <tr>
                    <th>{credit.name}</th>
                    <th>{credit.amount}</th>
                    <th>{credit.payments}</th>
                    <th>{credit.paymentAmount}</th>
                    <th>{credit.frecuency}</th>
                    <th>{credit.rate}</th>
                    <th>{credit.creditOwner}</th>
                    <th>{credit.dateCreated}</th>
                    <th>{credit.active}</th>
                    <th>Checking</th>
                </tr>)
                })
                }
            </tbody>
            </table>
        </React.Fragment>
        )
    }
}
