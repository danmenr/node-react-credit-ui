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
    return class NotificationContainer extends React.Component {


        componentDidMount() {
            this.notifySuccess('test','test');
        }

       notifySuccess = (title, message) => {
        // ButterToast.raise({
        //         content: ({ dismiss }) => <Notification dismiss success title message/>
        //     });
        ButterToast.raise({
            content: ({ toastId, dismiss }) => <div onClick={dismiss}>woohoo!</div>
        });
        }

        render() {

            return (
                <React.Fragment>
                    <WrappedComponent
                        {...this.props} />
                        <button onClick={() => this.notifySuccess('test','test')} />
                    <ButterToast ref={tray => this.tray = tray}  position={{
                        vertical: POS_TOP,
                        horizontal: POS_RIGHT
                    }} />
                </React.Fragment>
            )
        }
    }
};

export default WithToaster;

