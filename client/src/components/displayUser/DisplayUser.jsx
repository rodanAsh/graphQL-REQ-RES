import React from 'react'
import './DisplayUser.css'
import './DisplayUser.css'
import { gql, useQuery } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query getAllUsers {
        users {
            id
            name
            username
            age
            nationality
        }
    }
`

const DisplayUser = () => {
    const { data,loading,error } = useQuery(QUERY_ALL_USERS)
    
    if(loading){
        return <div>DATA IS LOADING...</div>
    }

    if(data){
        console.log(data);
        
    }
  return (
    <div className='user-list-container'>
        <h1>USERS LIST</h1>
        <div className='user-cards'>
            {
                data.users.map(user => (
                    <div className='user-card' key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Username: {user.username}</p>
                        <p>Age: {user.age}</p>
                        <p>Nationality: {user.nationality}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default DisplayUser