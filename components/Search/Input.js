import React from 'react';
import styled from 'styled-components/native';
import propTypes from 'prop-types';

const TextInput = styled.TextInput`
    background-color: white;
    margin: 0px 30px;
    padding: 10px 20px;
    border-radius: 15px;
    margin-bottom: 50px;
`;

const Input = ({placeholder, value, onChange, onSubmit}) => (
    <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onSubmitEditing={onSubmit}
        returnKeyType={"search"}
    
    />
);

Input.propTypes = {
    placeholder: propTypes.string.isRequired,
    value: propTypes.string.isRequired, 
    onChange: propTypes.func.isRequired, 
    onSubmit: propTypes.func.isRequired
}

export default Input;