import React, { useState, useEffect } from 'react';
import {movieApi} from '../../api';
import MoviesPresenter from './MoviesPresenter';

export default() => {

    const [movies, setMovies] = useState({
        loading: true,
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        pupularError: null,
        upcomingError: null
    })
   
    const getData = async()=> {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, pupularError] = await movieApi.popular();
        const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
            loading: false,
            nowPlaying,
            popular,
            upcoming,
            nowPlayingError,
            pupularError,
            upcomingError
        })
        
        
    }
    useEffect(()=>{
        getData()
    },[]);

    return(
        <MoviesPresenter refreshFn={getData} {...movies}/>
    )
   
}