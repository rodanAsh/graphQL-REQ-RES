const userList = [
    {
        id: 1,
        name: "Luffy",
        username: "Straw Hat",
        age: 19,
        nationality: "MEXICAN",
        friends: [
            {
                id: 2,
                name: "Sanji",
                username: "Baka cook",
                age: 21,
                nationality: "FRENCH" 
            },
            {
                id: 5,
                name: "Ussop",
                username: "Long Nose",
                age: 20,
                nationality: "AFRICAN"
            }
        ]
    },
    {
        id: 2,
        name: "Sanji",
        username: "Baka cook",
        age: 21,
        nationality: "FRENCH"
    },
    {
        id: 3,
        name: "Zoro",
        username: "Moss Head",
        age: 21,
        nationality: "JAPANESE",
        friends: [
            {
                id: 4,
                name: "Chopper",
                username: "Emergency Food",
                age: 15,
                nationality: "AMAZONIAN"
            }
        ]
    },
    {
        id: 4,
        name: "Chopper",
        username: "Emergency Food",
        age: 15,
        nationality: "AMAZONIAN"
    },
    {
        id: 5,
        name: "Ussop",
        username: "Long Nose",
        age: 20,
        nationality: "AFRICAN"
    }
]

const movieList = [
    {
        id: 1,
        name: "Kanguva",
        yearOfRelease: 2024,
        isInTheater: true
    },
    {
        id: 2,
        name: "Soorarai Pottru",
        yearOfRelease: 2020,
        isInTheater: false
    },
    {
        id: 3,
        name: "Retro",
        yearOfRelease: 2025,
        isInTheater: true
    },
    {
        id: 4,
        name: "Jai Bhim",
        yearOfRelease: 2021,
        isInTheater: false
    },
    {
        id: 5,
        name: "Nandha",
        yearOfRelease: 2002,
        isInTheater: true
    },
    {
        id: 6,
        name: "khaka Khaka",
        yearOfRelease: 2004,
        isInTheater: false
    }
]

module.exports = {userList, movieList}