import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/dar.svg'
import { Button } from 'antd' 
import { Link } from 'react-router-dom';
import { setUser } from '../../redux/actions/users.action';
import { getUser } from '../../redux/effects/users.effect';
import './Nav.css'
function Nav({ userData }) {
    const [logIn, setLogIn] = useState(localStorage.getItem("item")); 
    const [user, setUser] = useState()
    useEffect(() => {
      getUser();
      if (userData !== undefined){
        setLogIn(localStorage.getItem("username"))
        setUser(userData);
      }
    }, [userData])
    const logOut = () => {
      localStorage.clear();
      setLogIn(0);
    }
    return (
        <div className="header">
            <div className="header__logo">
                <Link to= { '/' }>
                  <img src= { logo } width="50" height="50%" />
                </Link>
            </div>
            <div className="header__login">
                <div>
                  { localStorage.getItem("token") == undefined ? (
                    <div>
                      <Button>
                        <Link to={'/login'}>Log in</Link>
                      </Button>
                      <Button>
                        <Link to={'/registration'}>Sign in</Link>
                      </Button>
                    </div>  
                  )
                  :
                  (
                  <div className="loginInfo">
                    <div className="user">{ userData == null ? ('') : ( userData.username ) }</div>
                    <div>
                      <Button onClick={ logOut }>
                          Log out
                        </Button>
                      </div>
                  </div>
                  )
                
                }
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
  userData: state.users.userData,
})
export default connect(mapStateToProps, { setUser, getUser })(Nav);