let search= ""
const moviesWrapper = document.querySelector(`.movies`);
moviesWrapper.classList += ` movies__loading`;
moviesWrapper.classList.remove(`movies__loading`);
const searchInput = document.querySelector(`.search__input`);
const loadingSpinner = document.querySelector(`.movies__loading`);
loadingSpinner.style.display = `none`;


async function renderMovies(filter)
{
    const query = searchInput.value;

    moviesWrapper.classList.add(`movies__loading`)

    const movies = await fetch(`https://www.omdbapi.com/?apikey=5c0a8d0&s=${query}`)
    const moviesData = await movies.json()
    const moviesArray = moviesData.Search.slice(0,6);
    
    if (filter === `NEW_TO_OLD`)
    {
        moviesArray.sort((a,b) => b.Year - a.Year)
    }
    if (filter === `OLD_TO_NEW`)
    {
        moviesArray.sort((a,b) => a.Year - b.Year)
    }

    moviesWrapper.innerHTML = moviesArray.map((movie) => getMoviesHTML(movie)).join("")

    moviesWrapper.classList.remove("movies__loading");
}

function filterMovies(event)
{
    renderMovies(event.target.value)
}


function getMoviesHTML(movie)
{
    return `<div class="popular__movie movie no__cursor">
    <figure class="movie__img--wrapper">
    <img src="${movie.Poster}" class="movie__img" alt="">
    </figure>
    <h2 class="popular__movie--title movie__title">${movie.Title}</h2>
    </div>`
}