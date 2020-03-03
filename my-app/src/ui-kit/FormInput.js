import React, { useState } from 'react';
export default (props) => {
    const [error, setError] = useState('');

    const [value, setValue] = useState('');

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        console.log(value);
        setValue(value);
        if (props.onChange) {
            props.onChange(e);
        }
        if (props.required ) {
            setError(!value ? 'Please fill this field' : '');
        }
        if (props.onInputChange) {
            props.onInputChange(e);
        }

    }
    return (
        <div className="form-control">
                    <label>{ props.label ? props.label : '' }</label>
                    <input type="text" 
                            name={ props.name }
                            className="form-input"
                            required = { props.required }
                            onBlur={inputChangeHandler}
                            placeholder= { props.placeholder ? props.placeholder : '' }
                            onChange={inputChangeHandler}
                            { ...props }
                            />
                    <div className="form-input-error">
                        { error ? error : '' }
                    </div>
         </div>
    );
}