import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login }

export const mapStateToProps = state => ({
    userLogged: selectUser(state)
})

export const mapDispatchToProps = dispatch = ({
    onLogin: () => dispatch(login)
})

export const ContainerAuthentication = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {
  }

  return hocComponent
}

export default WithAuthentication => connect(mapStateToProps, mapDispatchToProps)(ContainerAuthentication(WithAuthentication))
