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

    useEffect(() => {
        getData();
    })

    const getData = () => {
        let id = props.match.params.id;
        const host = process.env.REACT_APP_HOST + 'meetings/' + id;
        fetch(host)
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setMeetings(result);
            })
    }

    return (
        <div className="meeting">
            <Provider store={store}>
                <RoomsCalendar meetings={meetings} />
                <RoomsModal id={props.match.params.id} ref={childRef}>
                    <MeetingForm id={props.match.params.id} />
                </RoomsModal>
                <Button type="primary" onClick={() => childRef.current.showModal()}>Book room</Button>

                {/* <MeetingForm id = { props.match.params.id }/> */}
            </Provider>

        </div>
    )
}
export default RoomBooking;