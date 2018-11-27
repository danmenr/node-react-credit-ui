import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectCredit } from "selectors";
import { bindActionCreators } from "redux";

export const mapStateToProps = state => ({
    credit: selectCredit(state)
})

export const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export const CreditPaymentsContainer = (WrappedComponent) => {
  const CreditPaymentsComponent = ({ ...props }) => <WrappedComponent {...props} />

  CreditPaymentsComponent.propTypes = {
  }

  return CreditPaymentsComponent
}

export default WithCreditPayments => connect(mapStateToProps, mapDispatchToProps)(CreditPaymentsContainer(WithCreditPayments))
