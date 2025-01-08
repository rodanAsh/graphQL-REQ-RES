import React from 'react'
import './MovieList.css'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_MOVIES = gql`
    query getAllMovies {
        movies {
            id
            name
            isInTheater
            yearOfRelease
        }
    }
`

const MovieList = () => {

    const { data,loading,error } = useQuery(QUERY_ALL_MOVIES)

    if(data){
        console.log(data);
        
    }
  return (
    <div className='movie-list-container'>
        <h1>MOVIES LIST</h1>
        <div className='user-cards'>
            {
                data.movies.map(movie => (
                    <div className='user-card' key={movie.id}>
                        <p>Movie name: {movie.name}</p>
                        <p>Year of Release: {movie.yearOfRelease}</p>
                        <p>{movie.isInTheater ? "Released in Theater" : "Released in OTT"}</p>  
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList