import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import RoomBooking from './components/room-booking/RoomBooking';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Nav from './components/navbar/Nav';
import store from './redux/store';
import { Provider } from 'react-redux';




const routing = (
  <Router>
    <Provider store={store}>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <App/>
          </Route>
          <Route path="/book/:id" component = { RoomBooking }>
            
          </Route>
          <Route path="/registration">
            <Registration/>  
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          {/* <Route component={Notfound} /> */}
        </Switch>
      </div>
    </Provider>

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
