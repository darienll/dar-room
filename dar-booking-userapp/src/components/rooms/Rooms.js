import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Rooms.css"
import { setRooms } from '../../redux/actions/room.actions';
import { getRooms } from '../../redux/effects/room.effects';
import Modal from '../modal/modal'
import Room from '../room/Room';
import Example from '../modal/modal';
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const Rooms = ({ setRooms, getRooms, roomsData }) =>  {
      useEffect(() => {
        getRooms();
      }, [])

      return (
        <div className="rooms">
          { roomsData.map((item, key) => 
            
            <Room key = { key } item = { item }/>
          )}
        </div>
      )
}

const mapStateToProps = state => ({
  roomsData: state.rooms.roomsData,
})  

export default connect (mapStateToProps, { setRooms, getRooms })(Rooms);