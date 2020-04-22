import React  from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Rooms from './components/rooms/Rooms'
import store from './redux/store';

function App() {
 
  return (

    <div className="App">
        
        <Provider store={store}>
          <Rooms />
        </Provider>
            
    </div>
  );
}

export default App;
