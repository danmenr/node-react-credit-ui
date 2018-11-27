import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getCredits } from "actions/credit";
import { selectCredits } from "../../selectors";

export const mapStateToProps = state => ({
    credits: selectCredits(state)
})

export const mapDispatchToProps = dispatch => bindActionCreators({
  getCredits
}, dispatch);

export const CreditContainer = (WrappedComponent) => {
  const creditComponent = ({ ...props }) => <WrappedComponent {...props} />

  creditComponent.propTypes = {
    credits: PropTypes.array,
    getCredits: PropTypes.func
  }

  return creditComponent
}

export default WithCreditList => connect(mapStateToProps, mapDispatchToProps)(CreditContainer(WithCreditList))
