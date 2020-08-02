import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components/native';
import {apiImage} from '../api';

const Image = styled.Image`
    width: 100px;
    height: 160px;
    border-radius: 5px;
`;

const Poster = ({url}) => <Image source={{uri: apiImage(url)}}/>


Poster.propTypes = {
    url: propTypes.string
}

export default Poster;