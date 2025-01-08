import React from 'react'
import './App.css'
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import DisplayUser from './components/displayUser/DisplayUser'
import MovieList from './components/movieList/MovieList'

const App = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <div className='app'>
        <DisplayUser />
        <MovieList />
      </div>
    </ApolloProvider>
    
  )
}

export default App