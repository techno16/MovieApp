import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import propTypes from 'prop-types';
import { apiImage } from '../../api';
import Votes from '../Votes';
import Poster from '../../components/Poster';
import {trimText} from '../../utils';
import {useNavigation} from '@react-navigation/native';


const Container = styled.View`
    width: 100%;
    height: 100%;
`;

const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Content = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Data = styled.View`
    width: 50%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 7px;
`;

const VoteContainer = styled.View`
    margin-bottom: 7px;
`;


const Overview = styled.Text`
    color: rgb(220,220,220);
    opacity: 0.7;
    font-weight: 500;
    font-size: 14px;

`;

const Button = styled.KeyboardAvoidingView`
    background-color: #e74c3c;
    width: auto;
    padding: 10px;
    margin-top: 10px;
    border-radius: 3px;
`;

const ButtonText = styled.Text`
    color: white;

`;

const Slide = ({id, title, backgroundImage, votes, overview, poster}) => {
    const navigation = useNavigation();
    const goToDetail = () => {
        navigation.navigate("Detail",{id, title, backgroundImage, votes, overview, poster})
    }
    return (
        <Container>
            <BG source={{uri: apiImage(backgroundImage)}}/>
            <Content>
                <Poster url={poster}/>
                <Data>
                    <Title>{trimText(title, 15)}</Title>
                    <VoteContainer> 
                        <Votes votes={votes} />
                    </VoteContainer>
                    <Overview>{trimText(overview, 80)}...</Overview>
                    <TouchableOpacity onPress={goToDetail}>
                        <Button>
                            <ButtonText>View details</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    )
}

Slide.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    backgroundImage: propTypes.string,
    votes: propTypes.number.isRequired,
    overview: propTypes.string.isRequired,
    poster: propTypes.string,
}

export default Slide;