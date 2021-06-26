'use strict';

var characters= []
var movies= [];
var genders= [];

/*  
Asumí que cada objeto vendria en este formato:
character= {id: value, name: value, image: value, age: value, weight: value, story: value, movies: [movie1, movie2,...]}
movie= {id: value, title: value, date: value, score: value, characters: [character1, character2,...]}
genre= {id: value, name:value, image: value, movies:[movie1, movie2, ..]}
*/


module.exports= {
    listCharacters: function(name, age, idMovie) {
        let array= characters
        if(name) array= characters.filter(character => character.name===name)
        if(age) array= characters.filter(character => character.age===age)
        if(idMovie) array= movies.filter(movie=> movie.id===idMovie)
        return array
    },
    showCharacters: function() {
        let toShow= characters.map(function(c){
            return {name: c.name, image: c.image}
        })
        return toShow
    },
    editCharacter: function(characterId, newData) {
        characters = characters.forEach(element => {
            if(element.id===characterId) {
                element = {...element, ...newData} 
            } 
        });
    },
    deleteCharacter: function(idCharacter) {
        characters = characters.filter(character=> character.id!==idCharacter)
    },
    addCharacter: function(character) {
        let arrayCharacters =  Object.keys(character)
        if(!arrayCharacters.includes(character)) {
            characters = [...characters, character];
        }
    },
    listMovies: function(title, idGenre) {
        let array= movies
        if(title) array= movies.filter(movie => movie.title ==title)
        if(idGenre) {
            genders.forEach(element => {
                if (element.id== idGenre) {
                    array = element.movies
                    return array
                }
            });
        }
        return array
    },
    showMovies: function() {
        let toShow= movies.map(function(movie){
            return {title: movie.title, image: movie.image, date: movie.date}
        })
        return toShow;
    },
    editMovies: function(movieId, newData) {
        movies = movies.forEach(element => {
            if(element.id===movieId) {
                element = {...element, ...newData} 
            } 
        });
    },
    addMovies: function(movie) {
        let arrayMovies =  Object.keys(movies)
        if(!arrayMovies.includes(movie)){ 
            movies = [...movies, movie];
        }
    },
    deleteMovie: function(idMovie) {
        movies = movies.filter(movie=> movie.id!==idMovie)
    }
};

