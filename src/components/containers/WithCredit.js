import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { saveCredit } from "actions/credit";
import { selectCreditCreated } from "../../selectors";

export const mapStateToProps = state => ({
    creditCreated: selectCreditCreated(state)
})

export const mapDispatchToProps = dispatch => bindActionCreators({
    saveCredit
}, dispatch);

export const CreditContainer = (WrappedComponent) => {
  const hocCredit = ({ ...props }) => <WrappedComponent {...props} />

  hocCredit.propTypes = {
    creditCreated: PropTypes.object,
    saveCredit: PropTypes.func
  }

  return hocCredit
}

export default WithCredit => connect(mapStateToProps, mapDispatchToProps)(CreditContainer(WithCredit))
