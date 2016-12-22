import React, {Component} from 'react';

import './style.css'

class TextInput extends Component {

    render() {

        const { label, type, name, value, error, placeholder, onChange, onFocus, onBlur } = this.props

        return (
            <div className="form-group">
                <label className="form-label">{label}</label>
                <input
                    className="input-text"
                    placeholder={placeholder}
                    type={type} 
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                /> 
                <span className="error-msg">{error}</span>
            </div>
        );
    }
}


export default TextInput;