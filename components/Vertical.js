import React from 'react';
import {TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import styled from 'styled-components/native';
import {trimText} from '../utils';
import Votes from './Votes';
import Poster from './Poster';
import {useNavigation} from '@react-navigation/native';


const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 5px;
`;
    

const Vertical = ({id,poster,title,votes,overview,isTv=false}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail",{id, poster, title, votes, overview, isTv})
    }
    return(
    <TouchableOpacity onPress={goToDetail}>
        <Container>
            <Poster url={poster} />
            <Title>{trimText(title, 10)}</Title>
            {votes > 0 && <Votes votes={votes} />}
        </Container>
    </TouchableOpacity>
)}

Vertical.propTypes = {
    id: propTypes.number.isRequired,
    poster: propTypes.string,
    title: propTypes.string.isRequired,
    votes: propTypes.number.isRequired
}

export default Vertical;