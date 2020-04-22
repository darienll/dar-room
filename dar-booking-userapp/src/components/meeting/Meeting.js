import React, { useEffect, useState } from 'react';
import Moment from 'moment';

function Meeting({ id }) {
    useEffect(() => {
        const getUsers = () => {
            const host = process.env.REACT_APP_HOST + 'users/meetings/' + id;
            fetch(host)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setMeeting(res);
                    setParticipants(res.participants)
                })
        }
        getUsers();
    }, [id])
    const [meetings, setMeeting] = useState([]);
    const [participants, setParticipants] = useState([])
    return (
        <div className="meeting">
            <div className="heading">
                <h2>
                    {meetings.title}
                </h2>
            </div>
            <div className="content">
                <p> Start:  {Moment(meetings.startTime).format('YYYY-MM-DD hh:mm a')} </p>
                <p> End: {Moment(meetings.endTime).format('YYYY-MM-DD hh:mm a')}</p>

                {(participants.length > 0) ? (
                    <div>
                        <p>Participants:</p>
                        <ul>
                            {participants.map(participant => (
                                <li key={participant.id}> {participant.firstName}</li>
                            ))
                            }
                        </ul>
                    </div>
                ) : (<div></div>)

                }
            </div>
        </div>
    )
}
export default Meeting;