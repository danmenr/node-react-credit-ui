import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "actions/user";

const mapStateToProps = state => ({
    userLogged:  ''
})
const mapDispatchToProps = {
    login
}
const AuthenticationContainer = (WrappedComponent) => {
  const authenticationComponent = ({ ...props }) => <WrappedComponent {...props} />

  authenticationComponent.propTypes = {
    userLogged: PropTypes.object,
    onLogin: PropTypes.func
  }

  return authenticationComponent;
}

export default WithAuthentication => connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer(WithAuthentication))
