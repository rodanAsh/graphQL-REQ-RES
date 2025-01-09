import React, { useState } from 'react'
import './DisplayUser.css'
import './DisplayUser.css'
import { gql, useMutation, useQuery } from '@apollo/client'

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

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            name
            age
            username
            nationality
        }
    }
`

const DisplayUser = () => {
    const [newUser,setNewUser] = useState({
        name: "",
        username: "",
        age: 0,
        nationality: ""
    })
    const { data,loading,error } = useQuery(QUERY_ALL_USERS)

    const [createNewUser, {}] = useMutation(CREATE_USER_MUTATION)
    
    if(loading){
        return <div>DATA IS LOADING...</div>
    }

    if(data){
        console.log(data);
        
    }

    const handleChange = (e) => {
        let value = e.target.value;
        const name = e.target.name;

        if(name === 'nationality'){
            value = e.target.value.toUpperCase();
        }

        if(name === 'age'){
            value = Number(e.target.value);
        }
        setNewUser((prev) => ({...prev,[name]:value}))
        console.log(newUser);
        
    }

  return (
    <div className='user-list-container'>
        <div className='create-user'>
            <input 
                type="text" 
                placeholder='Name...'
                name='name'
                value={newUser.name}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder='Username...' 
                name='username'
                value={newUser.username}
                onChange={handleChange}
            />
            <input 
                type="number" 
                placeholder='Age...' 
                name='age'
                value={newUser.age}
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder='Nationality...' 
                name='nationality'
                value={newUser.nationality}
                onChange={handleChange}
            />
            <button onClick={() => createNewUser({variables:{input: newUser}})}>Create User</button>
        </div>
        <h1>USERS LIST</h1>
        <div className='user-cards'>
            {
                data && data.users.map(user => (
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