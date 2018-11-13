import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "actions/user";
import { selectUserLogged } from "selectors"
import { bindActionCreators } from "redux";

const mapStateToProps = state => ({
  userLogged: selectUserLogged(state)
})
const mapDispatchToProps =  dispatch => bindActionCreators({
  login
}, dispatch);
const AuthenticationContainer = (WrappedComponent) => {
  const authenticationComponent = ({ ...props }) => <WrappedComponent {...props} />

  authenticationComponent.propTypes = {
    userLogged: PropTypes.object,
    onLogin: PropTypes.func
  }

  return authenticationComponent;
}

export default WithAuthentication => connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer(WithAuthentication))
