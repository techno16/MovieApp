import React from 'react';
import styled from 'styled-components/native';
import { Foundation } from '@expo/vector-icons';

const Container = styled.Text`
    color: rgb(220,220,220);
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 500;
`;

const Votes = ({votes}) => 

<Container>
    <Foundation style={{flexDirection: "column"}} name="star" size={12} color="yellow" /> {votes} / 10
</Container>

export default Votes;