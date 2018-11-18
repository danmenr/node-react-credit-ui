import React from 'react'
import PropTypes from 'prop-types'
import ButterToast, { POS_TOP, POS_RIGHT } from "butter-toast";
import classnames from "classnames";

export const Notification = props => {
  return (
    <div
        className={
            classnames('notification',
                {'is-success': props.success},
                {'is-warning': props.warning},
                {'is-danger': props.danger}
            )
        }
    >
        <button className="delete" onClick={() => props.dismiss()}></button>
        <strong>{props.title}}</strong>
        {props.message}
    </div>
  )
}
const position = {
    vertical: POS_TOP,
    horizontal: POS_RIGHT
};

const WithToaster = WrappedComponent => {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />
    hocComponent.propTypes = {
    }

    return hocComponent
};

export default WithToaster;


