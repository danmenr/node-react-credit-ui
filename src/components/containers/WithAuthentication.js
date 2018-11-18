import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login, signUp } from "actions/user";
import { selectUserLogged } from "selectors"
import { bindActionCreators } from "redux";
import { selectUserCreated } from "../../selectors";

const mapStateToProps = state => ({
  userLogged: selectUserLogged(state),
  userCreated: selectUserCreated(state)
})
const mapDispatchToProps =  dispatch => bindActionCreators({
  login,
  signUp
}, dispatch);
const AuthenticationContainer = (WrappedComponent) => {
  const authenticationComponent = ({ ...props }) => <WrappedComponent {...props} />

  authenticationComponent.propTypes = {
    userLogged: PropTypes.object,
    userCreated: PropTypes.object,
    login: PropTypes.func,
    signUp: PropTypes.func
  }

  return authenticationComponent;
}

export default WithAuthentication => connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer(WithAuthentication))
