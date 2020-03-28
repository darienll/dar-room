import React from 'react';
import './Room.css';
import room_img from '../../assets/room1.jpg';
import Modal from 'react-modal';
import RoomsModal from '../modal/modal';

function Room({ item }) {
    return (
        <div className="room">
            <div className="room__image">   
            <figure>
                <img src={ room_img } width="100%"/>
            </figure>
            </div>
            <div className="room__text">
                <h4>{ item.name } </h4>
            </div>
            <RoomsModal room = { item }/>
        </div>
    )
}
export default Room;