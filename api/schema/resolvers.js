const {userList,movieList} = require('../fakeData')
const {_} = require("lodash")

const resolvers = {
    Query: {

        // USER RESOLVERS
        users: () => {
            return userList;
        },
        user: (parent,args) => {
            const id = args.id;
            const user = _.find(userList, {id: Number(id)});
            return user;
        },

        // MOVIE RESOLVERS
        movies: () => {
            return movieList;
        },
        movie: (parent,args) => {
            const name = args.name;
            const movie = _.find(movieList,{name});
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(movieList, (movie) => {
                return movie.yearOfRelease > 2000 && movie.yearOfRelease <= 2010
            })
        }
    },
    Mutation: {
        createUser: (parent,args) => {
            const user = args.input;
            const lastId = userList[userList.length - 1].id;
            user.id = lastId + 1;
            userList.push(user);
            return user;
        },
        updateUsername: (parent,args) => {
            const {id,newUsername} = args.input;
            let userUpdated;

            userList.forEach((user) => {
                if(user.id === Number(id)) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            })

            return userUpdated;
        },
        deleteUser: (parent,args) => {
            const id = args.id;
            _.remove(userList, (user) => user.id === Number(id));
            return null;
        }
    }
}

module.exports = {resolvers}