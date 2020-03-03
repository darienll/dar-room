import React, { useState } from 'react';
import FormInput from '../ui-kit/FormInput';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/post.actions';

const PostForm = ({dispatch}) => {
    let id = 101;
    const [formData, setFormData] = useState({
        title: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter your email'}
            ],
            isValid: false,

        },
        body: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter password'},
            ],
            isValid:false
        }
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("In submit")
        const newPost = {
            userId: 1,
            id: id,
            title: formData['title'].value,
            body: formData['body'].value
        }
        dispatch(addPost(newPost));
        id++;

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
        <div className="PostForm">
            <form onSubmit={ handleSubmit } noValidate>
                <FormInput
                    name="title"
                    required={true}
                    placeholder="Enter titlte"
                    label="Title"
                    onInputChange = { inputChangeHandler }
                />
                <FormInput
                    name="body"
                    required={true}
                    placeholder="Enter body"
                    label="Body"
                    onInputChange = { inputChangeHandler }
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default connect()(PostForm)