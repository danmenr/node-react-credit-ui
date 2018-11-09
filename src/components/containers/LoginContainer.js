import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const mapStateToProps = state => ({
    userLogged:
})

export const mapDispatchToProps = {

}

export const WithAuthentication = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {
  }

  return hocComponent
}

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(WithAuthentication(WrapperComponent))
