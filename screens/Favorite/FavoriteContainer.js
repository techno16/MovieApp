import React, {useState, useEffect} from 'react';
import FavoritePresenter from './FavoritePresenter';
import {movieApi} from '../../api';

export default () => {
    const [movies,setMovies] = useState({
        results: [],
        error: null
    })

    const getData = async() => {
        const [results, error] = await movieApi.discover();
        setMovies({
            results,
            error
        })

    }
    useEffect(()=> {
        getData()
    },[])

    return <FavoritePresenter {...movies}/>
}