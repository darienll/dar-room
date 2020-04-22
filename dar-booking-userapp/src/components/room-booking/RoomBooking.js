import React, { useEffect, useState } from 'react';
import RoomsModal from '../modal/modal';
import './RoomBooking.css'
import RoomsCalendar from '../calendar/Calendar';
import { Button } from 'antd';
import MeetingForm from './MeetingForm';
import { Provider } from 'react-redux';
import store from '../../redux/store';
const { useRef } = React;



function RoomBooking(props) {

    const [meetings, setMeetings] = useState([])
    const childRef = useRef();


    const getData = () => {
        let id = props.match.params.id;
        const host = process.env.REACT_APP_HOST + 'meetings/' + id;
        fetch(host)
            .then(res => res.json())
            .then((result) => {
                setMeetings(result);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    const updateData = () => {
        getData();
    }

    

    return (
        <div className="meeting">
            <Provider store={store}>
                <RoomsCalendar meetings={meetings} />
                <RoomsModal ref={childRef}>
                    <MeetingForm id={props.match.params.id} dataChanged = { updateData }/>
                </RoomsModal>
                <div className="meeting__button">
                    <Button type="primary" onClick={() => childRef.current.showModal()} block>Book room</Button>
                </div>
            </Provider>

        </div>
    )
}
export default RoomBooking;