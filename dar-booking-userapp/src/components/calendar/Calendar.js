import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Meeting from '../meeting/Meeting';
import RoomsModal from "../modal/modal";
const localizer = momentLocalizer(moment);

class RoomsCalendar extends Component {

  state = {
    "id": 1
  }

  constructor() {
    super();
    this.child = React.createRef();
  }
  eventHandler = (e) => {
    console.log("there");
    console.log(e);
    console.log(e.id)
    this.setState({
      id: e.id
    });
    this.child.current.showModal();
  }

  render() {
    let events = []
    for (let i = 0; i < this.props.meetings.length; i++) {
      if (this.props.meetings[i] !== undefined) {
        let meetings_time = {
          id: this.props.meetings[i].id,
          start: new Date(this.props.meetings[i].startTime),
          end: new Date(this.props.meetings[i].endTime),
          title: this.props.meetings[i].title
        }
        events.push(meetings_time)
      }
    }
    return (
      <div className="RoomsCalendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="day"
          events={events}
          style={{ height: "600px" }}
          onSelectEvent={this.eventHandler}
        />
        <RoomsModal ref={this.child}>
          <Meeting id={this.state.id} />
        </RoomsModal>
      </div>
    );
  }
}

export default RoomsCalendar;