import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Rooms.css"
import { setRooms } from '../../redux/actions/room.actions';
import { getRooms } from '../../redux/effects/room.effects';
import Room from '../room/Room';

const Rooms = ({ setRooms, getRooms, roomsData }) => {
  useEffect(() => {
    getRooms();
  })

  return (
    <div className="rooms">
      {roomsData.map((item, key) =>

        <Room key={key} item={item} />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  roomsData: state.rooms.roomsData,
})

export default connect(mapStateToProps, { setRooms, getRooms })(Rooms);