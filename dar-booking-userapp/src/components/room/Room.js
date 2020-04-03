import React from 'react';
import './Room.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Room({ item }) {
    return (
        <div className="room">
            <div className="room__image">
                <figure>
                    <img src={process.env.REACT_APP_HOST + item.imageUrl} alt="room" width="100%" />
                </figure>
            </div>
            <div className="room__text">
                <h3>{item.name} </h3>
                <Button>
                    <Link to={'/book/' + item.id}>Забронировать</Link>
                </Button>
            </div>
        </div>
    )
}
export default Room;