import React, { Component } from 'react';
import './modal.css'
import { Modal } from 'antd';

class RoomsModal extends Component {
  state = { visible: false };

  showModal = () => {
    if (localStorage.getItem("token") != undefined)
      this.setState({
        visible: true,
      });
    else {
      alert("Initially, you have to log in")
    }
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>

        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
export default RoomsModal;