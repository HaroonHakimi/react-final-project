import React from "react";
import Spongebob from '../assets/Spongebob.gif' 
import MovieBar from "../components/ui/MovieBar";
import SearchBar from "../components/ui/SearchBar";

function Home() {

   return (
    <>
      <section id="popular">
        <div className="container ">
            <div className="row popular__row">
            <h1 className="nav__main--title" id="search">
              Browse Our <span className="red">Movies.</span>
            </h1>
            <SearchBar/>
            <figure className="nav__gif--wrapper">
                <img className="nav__gif" src={Spongebob} alt=""/>
            </figure>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;


//     const [movies, setMovies] = useState()

// async function fetchData()
// {
//   const { data } = axios.get(``)
// }


{/* <MovieBar
                 title={"Popular"}
                 subTitle={"Movies"}
                 />
                <div className="movies">
                    
                </div> */}