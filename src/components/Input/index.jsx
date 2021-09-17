import React from 'react';
import './Input.css';

const Input = ({ title, onChange, value, style, type, placeholder, onKeyPress }) => {
    let theInput;

    const appendNewEmail = () => {
        const newChoiceList = [...value];
        // Append new email to existing emails list
        newChoiceList.push('');
        onChange(newChoiceList); // Set new values array to old array
    };
    const removeEmail = (i) => {
        const newValues = [...value];
        console.log('array before', value);
        newValues.splice(i, 1);
        console.log('array after', value);
        // Append new email to existing emails list
        onChange(newValues); // Set new values array to old array
    };

    const saveValue = (index, val) => {
        const newValues = [...value];
        newValues[index] = val; // Set new value
        onChange(newValues); // Update array of emails
    };

    switch (type) {
        case 'password':
            theInput = <input type="password" value={ value } onKeyPress={onKeyPress} onChange={ onChange } style={ style } required />;
            break;
        case 'multiple':
            theInput = (
                <ul className="fields-list">
                    { value.map((email, i) => 
                        <li key={i}>
                            { i === 0 && <span className="add" onClick={() => appendNewEmail()}>+</span> }
                            <input type="text" onKeyPress={onKeyPress} value={ email } onChange={ e => saveValue(i, e.target.value) } style={ style } required />
                            { i !== 0 && <span className="add" onClick={() => removeEmail(i)}>-</span> }
                        </li>
                    )}
                </ul>
            );
            break;
        default:
            theInput = <input type="text" onKeyPress={onKeyPress} value={ value } onChange={ onChange } style={ style } placeholder={ placeholder } required />;
    }

    return (
        <div className="app-input">
            <label>{ title }</label>
            { theInput }
        </div>
    );
}

export default Input;
