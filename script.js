"use strict";

let numberOfFilms;
function start() {
    numberOfFilms = +prompt(`How many films have you seen?`, ``).trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`How many films have you seen?`, ``).trim();
    }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    private: false,
};

// const a = prompt(`What is one of last films, which you have seen`, ``),
//         b = prompt(`What is your mark for this film?`, ``),
//         c = prompt(`What is one of last films, which you have seen`, ``),
//         d = prompt(`What is your mark for this film?`, ``);

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`What is one of last films, which you have seen`, ``).trim(),
                b = prompt(`What is your mark for this film?`, ``).trim();
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log('You have seen too little films!');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log('Wonderful! Too many films!');
    } else if (personaMovieDB.count >= 30) {
        console.log('You are kinoman');
    } else {
        console.log('Mistake');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

showMyDB(personaMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personaMovieDB.genders[i - 1] = prompt(`Your favourite genre under number ${i}`);
    }
}

writeYourGenres();


console.log(personaMovieDB);


