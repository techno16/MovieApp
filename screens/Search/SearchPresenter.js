import React from 'react';
import styled from 'styled-components/native';
import Input from '../../components/Search/Input';
import HorizontalSlide from '../../components/HorizontalSlide';
import Vertical from '../../components/Vertical';
import ScrollContainer from '../../components/ScrollContainer';


export default ({movies, shows, results, keyword, onChange, onSubmit}) => (
    <ScrollContainer
        refreshFn={onSubmit}
        loading={false}
        contentContainerStyle={{paddingTop: 10}}
    >
        <Input 
            placeholder={"검색어를 입력해주세요."}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
       {movies.length !==0 && (
            <HorizontalSlide title={"Movie Results"}>
                {movies.map(movie=> 
                <Vertical 
                    key={movie.id} 
                    id={movie.id} 
                    title={movie.title} 
                    votes={movie.vote_average} 
                    poster={movie.poster_path}
                />)}
            </HorizontalSlide>
       )}
       {shows.length !==0 && (
           <HorizontalSlide title={"TV Results"}>
                {shows.map(show=> 
                <Vertical 
                    isTv={true}
                    key={show.id} 
                    id={show.id} 
                    title={show.name} 
                    votes={show.vote_average} 
                    poster={show.poster_path}
                />)}
           </HorizontalSlide>
       )} 
    </ScrollContainer>
)