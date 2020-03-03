import React, { useState } from 'react';
import FormInput from '../ui-kit/FormInput';
export default () => {

    const [formData, setFormData] = useState({
        email: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter your email'}
            ],
            isValid: false,

        },
        password: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter password'},
                {name: 'minLength', message: 'Minimum lenght is 6'}
            ],
            isValid:false
        }
    });

    const [formError, setFormError] = useState({}); 

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted");
        console.log(formData);
         
    }

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        const updatedControl = {...formData[name]};
    
        console.log(updatedControl)
        updatedControl.value = value;
        for (let rule of updatedControl.rules) {
            switch(rule.name) {
                case 'required': 
                    updatedControl.isValid = !!updatedControl.value;
                    break;
                case 'minLength':
                    updatedControl.isValid = updatedControl.value && updatedControl.value.length >= 6;
                    break;
           } 
           if (!updatedControl.isValid) {
                updatedControl.error = rule.message;
                break;
           }
        }
        setFormData({
            ...formData,
            [name]: updatedControl
        })
    }
    return (
        <div className="UserForm">
            <form onSubmit= {handlerSubmit} noValidate>
                <FormInput  
                    name="email"
                    required={true}
                    placeholder="Enter email"
                    label = "Email"
                    onInputChange = { inputChangeHandler }
                />
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" 
                            name="password"
                            className="form-input"
                            onBlur={inputChangeHandler}
                            required
                            placeholder="Enter password"
                            onChange={inputChangeHandler}/>

                    <div className="form-input-error">
                        { !formData['password'].isValid ? formData['password'].error : '' }
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}