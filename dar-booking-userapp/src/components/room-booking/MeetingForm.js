import React, { useEffect } from 'react';
import { Select, Input, Button, DatePicker, Form, message } from 'antd';
import { setUsers } from '../../redux/actions/users.action';
import { getUsers } from '../../redux/effects/users.effect';
import { connect } from 'react-redux';
import './MeetingForm.css'
const MeetingForm = ({ setUsers, getUsers, usersData, id }) => {
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    const handleSubmit = values => {
        message.success("Success")
        console.log(values)
        createMeeting(values)
    }

    const createMeeting = (values) => {
        let participants = []
        for (let i = 0; i < values.participants.length; i++) {
            console.log(values.participants[i]);
            participants.push({ "id": values.participants[i] });
        }
        console.log(participants)
        let data = {
            title: values.title,
            date: '2020-02-31',
            startTime: values.time[0].toDate(),
            endTime: values.time[1].toDate(),
            room: {
                id: id
            },
            participants: participants
        }
        console.log(data)
        const host = process.env.REACT_APP_HOST + 'meetings/'
        fetch(host, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    const optionUsers = [];
    for (let i = 0; i < usersData.length; i++) {
        optionUsers.push(<Option key={usersData[i].id}>{usersData[i].firstName + ' ' + usersData[i].lastName}</Option>);
    }
    useEffect(() => {
        getUsers();
    })
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <div className="meeting-form">
            <h2>Create meeting</h2>
            <Form onFinish={handleSubmit} layout='vertical' >
                <Form.Item label="Название" name="title">
                    <Input type="text" />
                </Form.Item>
                <Form.Item label="Выберите участников" name="participants">
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        onChange={handleChange}
                    >
                        {optionUsers}
                    </Select>
                </Form.Item>
                {/* <Form.Item label="Введите день" name="day">
                            <DatePicker/>
                    </Form.Item> */}
                <Form.Item label="Выберите время" name="time">
                    <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = state => ({
    usersData: state.users.usersData,
})

export default connect(mapStateToProps, { setUsers, getUsers })(MeetingForm);