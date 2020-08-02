import React from 'react';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import { Dimensions, ScrollView } from 'react-native';
import Slide from '../../components/Movies/Slide';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';
import List from '../../components/List';



const {width:WIDTH, height: HEIGHT} = Dimensions.get("window");


const SliderContainer = styled.View`
    width: 100%;
    height: ${HEIGHT / 3}px;
    margin-bottom: 20px;
`;

const Container = styled.View`
    flex: 1;
    background-color: black;
    justify-content: center;
`;

export default ({loading, nowPlaying, popular, upcoming, refreshFn}) => (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        
        <SliderContainer>
            <Swiper controlsEnabled={false} loot timeout={3}>
                {nowPlaying.map(movie =>(
                    <Slide 
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        overview={movie.overview}
                        votes={movie.vote_average}
                        backgroundImage={movie.backdrop_path}
                        poster={movie.poster_path}
                    />
                ))}
            </Swiper>
        </SliderContainer>
        <Container>
           <Title title={"Popular Movies"}/>
           <ScrollView 
                style={{marginTop: 20, marginBottom: 40}}
                contentContainerStyle={{paddingLeft: 20}}
                horizontal>
           {popular.map(movie => (
            <Vertical   key={movie.id} 
                        id={movie.id} 
                        poster={movie.poster_path} 
                        title={movie.original_title} 
                        votes={movie.vote_average}/>))}
            </ScrollView>
            <List title="Coming Soon">
            {upcoming.map(movie=> (
                <Horizontal key={movie.id} 
                            id={movie.id} 
                            title={movie.title} 
                            releaseDate={movie.release_date}
                            poster={movie.poster_path}
                            overview={movie.overview}
                            />
            ))}
            </List>
        </Container>
        

    </ScrollContainer>   
    
    
    
)