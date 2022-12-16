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
  const copyArray = [...array];
  const result = copyArray.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase(); 
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  console.log("EXERCICE 4 ->"+result.slice(0, 20).map( title => {return title.title}))
  return result.slice(0, 20).map( title => {return title.title})
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const copyArray = [...array];
  const result = copyArray.sort((a, b) => {
    if(a.year == b.year && a.title != null && a.title != "" && a.title != undefined) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase(); 
      if (titleA < titleB) {
        return -1;
      }
      else if (titleA > titleB) {
        return 1;
      } 
    } else {
      return a.year - b.year;
    }
  });
  console.log("EXERCICE 5 ->"+result.map(movies => {return movies.year}));
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const copyArray = [...array];
  const initialValue = 0.00; 
  let result = copyArray.filter(cate => cate.genre == category).reduce((sum, currentValue) => sum + currentValue.score, initialValue);
  let loops = copyArray.filter(cate => {
    if(cate.score != null && cate.score != ''){
      return cate.genre == category}
    }).length;
  result = result/loops;
  result = Math.round(result * 100)/100;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const copyArray = [...array];
  const result = copyArray.map(peliculas => {
    let hours = 0;
    let min = 0;
    if(parseInt(peliculas.duration[1]) == 'h') {
      hours = peliculas.duration[0];
    } else {
      hours = peliculas.duration[0] + peliculas.duration[1];
    }
    hours = parseInt(hours);
    if(peliculas.duration.length > 2){
      if(parseInt(peliculas.duration.charAt(3, 5)) != NaN) {
        min = peliculas.duration.slice(3, 5);
      } else {
        min = peliculas.duration[3];
      }
    }
    min = parseInt(min);
    let hoursToMin = hours*60;
    return { duration : min += hoursToMin}
  });
  console.log('EXERCICE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const copyArray = [...array];
  const find_best_movie = copyArray.sort((a, b) => {
    if (a.year == year) {
      return a.score - b.score;
    }
  }).reverse();
  const result_array = [find_best_movie[0]];
  console.log('EXERCICE 8 ->', result_array);
  return result_array;
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
