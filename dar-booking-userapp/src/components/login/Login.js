import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/users.action';
import { getUser } from '../../redux/effects/users.effect';


function Login({ getUser, setUser }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter your username'}
            ],
            isValid: false,

        },
        password: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter password'},
            ],
            isValid:false
        }
    });
    const [formError, setFormError] = useState(true);
    const [userError, setUserError] = useState();
    let error = false;

    const handeSubmit = e => {
        e.preventDefault();
        
        const newUser = {
            'username' : formData.username.value,
            'password' : formData.password.value
        }    

        for (let key in formData) {
            let obj = formData[key].isValid;
            if (obj === false) setFormError(true)
        }
        error = false;

        for (let key in formData) {
            let obj = formData[key].isValid;
            let data = formData[key] 
            for (let rule of data.rules) {
                switch(rule.name) {
                    case 'required': 
                        data.isValid = !!data.value;
                        break;
                    case 'minLength':
                        data.isValid = data.value && data.value.length >= 6;
                        break;
                    case 'match':
                        data.isValid = data.value && data.value === formData.password.value
                        break;
                    default: break;
               } 
               if (!data.isValid) {
                    data.error = rule.message;
                    error = true;
                    break;
               }
            }
            setFormData({
                ...formData,
                [key]: data
            })
        }
        
        if (!error) {
            const host = process.env.REACT_APP_HOST + 'users/auth'
            fetch(host, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser)
            })
            .then((response) => {
                if (!response.ok) throw new Error("err");
                return response.json()
            })
            .then(res => {
                getUser(res.userId);
                localStorage.setItem("token", res.token);
                history.push('/');
                
            })
            .catch(err => {
                setUserError("ERROR. USER DOES NOT EXIST OR PASSWORD IS INCORRECT");
            })
        }
        
        
        
    }
    
    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        const updatedControl = {...formData[name]};
        updatedControl.value = value;
        error = false;

        for (let rule of updatedControl.rules) {
            switch(rule.name) {
                case 'required': 
                    updatedControl.isValid = !!updatedControl.value;
                    break;
                case 'minLength':
                    updatedControl.isValid = updatedControl.value && updatedControl.value.length >= 6;
                    break;
                case 'match':
                    updatedControl.isValid = updatedControl.value && updatedControl.value === formData.password.value
                    break;
                default: break;
           } 
           if (!updatedControl.isValid) {
                updatedControl.error = rule.message;
                error = true;
                break;
           }
        }

        setFormData({
            ...formData,
            [name]: updatedControl
        })
        setFormError(false)
    }

    return (
        <div>
            <form className="login-form" onSubmit={ handeSubmit }>
                <div className="form-control">
                    <label>Login</label>
                    <input  name="username" 
                            type="text" 
                            placeholder="Enter your login"
                            onChange={inputChangeHandler}
                    />
                    <div className="form-input-error">
                        { !formData['username'].isValid ? formData['username'].error : '' }
                    </div>

                </div>
               
                <div className="form-control">
                    <label>Password</label>
                    <input  name = "password"
                            type="password"  
                            placeholder="Enter your password"
                            onChange = { inputChangeHandler }
                    />
                    <div className="form-input-error">
                        { !formData['password'].isValid ? formData['password'].error : '' }
                    </div>
                </div>
                
                <button type="submit">Login</button>
                <div className="form-input-error">
                    { userError }
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    userData: state.users.userData,
  })
  
export default connect(mapStateToProps, { setUser, getUser })(Login);