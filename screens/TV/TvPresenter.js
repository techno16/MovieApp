import React from 'react';
import styled from 'styled-components/native';
import ScrollContainer from '../../components/ScrollContainer';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import HorizontalSlide from '../../components/HorizontalSlide';
import List from '../../components/List';

const Container = styled.View`
    margin-top: 30px;
`;

export default ({loading, popular, topRated, today, refreshFn}) => (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
        <Container>
        <HorizontalSlide title={"Popular TV Shows"}>
            {popular.map(show=> 
            <Vertical 
                isTv={true}
                key={show.id} 
                id={show.id} 
                poster={show.poster_path} 
                title={show.name} 
                votes={show.vote_average}
            />
            )}
        </HorizontalSlide>

        <HorizontalSlide title={"Top Rated TV Shows"}>
            {topRated.map(show=> 
            <Vertical 
                isTv={true}
                key={show.id} 
                id={show.id} 
                poster={show.poster_path} 
                title={show.name} 
                votes={show.vote_average}
            />
            )}
        </HorizontalSlide>

        <List title="Airing Today">
            {today.map(show => 
            <Horizontal
                isTv={true}
                key={show.id} 
                id={show.id} 
                poster={show.poster_path} 
                title={show.name}
                overview={show.overview} 
            />)}
        </List>
        </Container>
    </ScrollContainer>
)
    