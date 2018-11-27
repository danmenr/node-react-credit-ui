import React, { Component } from "react";
import {Calendar, CalendarControls} from "react-yearly-calendar";
import "./CreditDetail.scss"

export default class CreditDetail extends Component {

  render() {
    return (
     <React.Fragment>
<Calendar
    year={2018}

  />
     </React.Fragment>
    )
  }
}
