import React from "react";
import Spongebob from '../assets/Spongebob.gif' 
import MovieBar from "../components/ui/MovieBar";

function Home() {
//     const [movies, setMovies] = useState()

// async function fetchData()
// {
//   const { data } = axios.get(``)
// }

   return (
    <>
      <section id="popular">
        <div className="container ">
            <div className="row popular__row">
            <figure className="nav__gif--wrapper">
                <img className="nav__gif" src={Spongebob} alt=""/>
            </figure>
                <MovieBar
                 title={"Popular"}
                 subTitle={"Movies"}
                 />
                <div className="movies">
                    
                </div>

                <div className="movies__loading">
                    <i className="fa-solid fa-spinner"></i>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Home;
