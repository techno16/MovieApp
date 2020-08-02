import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import propTypes from 'prop-types';
import Poster from './Poster';
import {trimText} from '../utils';
import {useNavigation} from '@react-navigation/native';



const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
    align-items: flex-start;
`;

const Data = styled.View`
    align-items: flex-start;
    width: 60%;
    margin-left: 25px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    
`;

const Overview = styled.Text`
    color: white;
    margin-top: 10px;  
`;

const ReleaseDate = styled.Text`
    color: white;
    margin-vertical: 10px;
    font-size: 12px;
`;


const Horizontal = ({id,title,releaseDate,poster,overview, isTv=false}) => { 
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail",{id,title,releaseDate,poster,overview, isTv})
    }
    
    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster} />
                    <Data>
                        <Title>{trimText(title,30)}</Title>
                        {releaseDate ? <ReleaseDate>{releaseDate}</ReleaseDate> : null}
                        <Overview>{trimText(overview,100)}</Overview>
                    </Data>
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    ReleaseDate: propTypes.string,
    overview: propTypes.string.isRequired,
    poster: propTypes.string,
}
export default Horizontal;