// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(peliculas => peliculas.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(dire => dire.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const initialValue = 0.00;
  let result = array.filter(dire => dire.director == director).reduce((sum, currentValue) => sum + currentValue.score, initialValue);
  let loops = array.filter(dire => dire.director == director).length;
  result = result/loops;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return 'undefined';
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  return 'undefined';
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {
  return 'undefined';
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {
  return 'undefined';
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  return 'undefined';
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
