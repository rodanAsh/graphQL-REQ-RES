import React, { useState } from 'react'
import './MovieList.css'
import { gql, useLazyQuery, useQuery } from '@apollo/client'

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

const QUERY_MOVIE_BY_NAME = gql`
    query Movie($name: String!) {
        movie(name: $name) {
            id
            name
            yearOfRelease
        }
    }
`

const MovieList = () => {
    const [movieInput,setMovieInput] = useState("")
    const { data,loading,error } = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie,{data:movieData,error:movieError}] = useLazyQuery(QUERY_MOVIE_BY_NAME)

    if(data){
        console.log(data);
        
    }

    if(loading){
        return <h1>Movie data loading...</h1>
    }
  return (
    <div className='movie-list-container'>
        <h1>MOVIES LIST</h1>
        <div className='user-cards'>
            {
                data && data.movies.map(movie => (
                    <div className='user-card' key={movie.id}>
                        <p>Movie name: {movie.name}</p>
                        <p>Year of Release: {movie.yearOfRelease}</p>
                        <p>{movie.isInTheater ? "Released in Theater" : "Released in OTT"}</p>  
                    </div>
                ))
            }
        </div>

        <div className='movie-input'>
            <input
                type="text" 
                placeholder='Enter movie name...' 
                value={movieInput}
                onChange={(e) => setMovieInput(e.target.value)}
            />
            <button onClick={() => {
                fetchMovie({
                    variables: {
                        name: movieInput,
                    }
                })
            }}>Fetch Movie</button>
        </div>

        <div>
            {
                movieData && (
                    <div key={movieData.movie.id}>
                        <h1>Movie Name: {movieData.movie.name}</h1>
                        <p>Year of Release: {movieData.movie.yearOfRelease}</p>
                    </div>
                )
            }
        </div>

        <div>
            {
                movieError && (
                    <h1>Movie name you are searching are not available here!</h1>
                )
            }
        </div>
    </div>
  )
}

export default MovieList