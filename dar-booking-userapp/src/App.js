import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';

import './App.css';
import Rooms from './components/rooms/Rooms' 
import Room from './components/room/Room'
import store from './redux/store';
function App() {
  return (
    <div className="App">
        <Provider store={ store }>
            <Rooms/>
        </Provider>
    </div>
  );
}

export default App;
