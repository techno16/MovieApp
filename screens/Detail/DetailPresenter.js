import React from 'react';
import styled from 'styled-components/native';
import ScrollContainer from '../../components/ScrollContainer';
import {apiImage} from '../../api';
import {Dimensions, ActivityIndicator, ScrollView, TouchableOpacity} from 'react-native';
import Poster from '../../components/Poster';
import Votes from '../../components/Votes';
import Link from '../../components/Detail/Link';
import {trimText} from '../../utils';


const BG = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`;

const Header = styled.View`
    height: ${Dimensions.get("window").height / 3}px;
    align-items: center;
    justify-content: flex-end;
`;

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    top: 50px;
`;

const Info = styled.View`
   width: 50%;
   margin-left: 40px;
`;

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
`;

const Data = styled.View`
    margin-top: 30px
    padding: 0px 30px;
`;

const DataName = styled.Text`
    color: white;
    font-weight: 800;
    margin-bottom: 15px;
    font-size: 17px;
    margin-top: 30px
`;

const DataValue = styled.Text`
   color: white;
   font-weight: 500;
   line-height: 20px;
`;

const Section = styled.View`
    padding: 0px 30px;
`;

export default({result, loading, openBrowser}) => (
        <ScrollContainer 
        contentContainerStyle={{flex: 1}}
        loading={false}>
            <ScrollView>
            <Header>
                <BG source={{uri: apiImage(result.backgroundImage,"2")}}/>
                <Container>
                <Poster url={result.poster} />
                    <Info>
                        <Title>{result.title}</Title>
                        {result.votes && <Votes votes={result.votes}/>}
                    </Info>
                </Container>
            </Header>
            <Data>
                {result.overview ? (
                    <>
                    <DataName>Overview</DataName>
                    <DataValue>{result.overview}</DataValue>
                   </>
                ) : null}
            {loading ? (<ActivityIndicator style={{marginTop: 30}} color={"white"} size={"small"} />): null}
            </Data>

            {result.spoken_languages ? (<Section>
            <DataName>Languages</DataName>
            <DataValue>{result.spoken_languages.map(l=>`${l.name} `)}</DataValue>
            </Section>) : null}

            {result.release_date ? <Section>
            <DataName>Release Date</DataName>
            <DataValue>{result.release_date}</DataValue>
            </Section> : null}

            {result.status ? <Section>
            <DataName>Status</DataName>
            <DataValue>{result.status}</DataValue>
            </Section> : null}

            {result.runtime ? <Section>
            <DataName>Runtime</DataName>
            <DataValue>{result.runtime} minutes</DataValue>
            </Section> : null}

            {result.first_air_date ? <Section>
            <DataName>First Air Date</DataName>
            <DataValue>{result.first_air_date}</DataValue>
            </Section> : null}

            {result.genres ? <Section>
            <DataName>Genres</DataName>
            <DataValue>{result.genres.map(g=>`${g.name} `)}</DataValue>
            </Section> : null}

            {result.number_of_episodes ? <Section>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>{result.number_of_seasons} / {result.number_of_episodes}</DataValue>
            </Section> : null}

            {result.imdb_id ? <Section>
            <DataName>Links</DataName>
             <Link
                onPress={()=> 
                    openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)}
                text={"IMDB Page"}
                icon={"imdb"}
             />
            </Section> : null}
                
                {result.videos?.results?.length > 0 ? (
                    <Section>
                        <DataName>Videos</DataName>
                        {result.videos.results.map(video=> (
                            <Link
                                text={trimText(video.name, 30)}
                                key={video.id}
                                icon="youtube"
                                onPress={()=> 
                                    openBrowser(`https://www.youtube.com/watch?v=${video.key}`)}
                            />
                        ))}
                    </Section> 
                ) : null }
            

            </ScrollView>
        </ScrollContainer>
)