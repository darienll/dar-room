import React, { Component } from 'react';
import './modal.css'
import { Modal } from 'antd';

class RoomsModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        {/* <Button type="primary" onClick={this.showModal}>
          Book room
        </Button> */}
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.children}
          {/* <MeetingForm id = { this.props.id }/> */}
        </Modal>
      </div>
    );
  }
}
export default RoomsModal;