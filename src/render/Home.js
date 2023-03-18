import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import styles from "./Home.module.css";

//import Movie from "../components/Movie";

function Home(){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=7.8&sort_by=year`)).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    console.log(movies);
    return <div>{loading ? <h1>Loading...</h1> :
      (<div>
        <h1 className={styles.title}>메인화면</h1>
        {movies.map(movie =>
           (<div className={styles.titleBox}>
            <div>
              <h2>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </h2>
                <img src={movie.medium_cover_image} alt={movie.title}/>
                <ul>
                    {movie.genres.map((g) => (
                        <li key={g}>{g}</li>
                        ))}
            </ul>
          </div>
          </div>
          )
        )}
      </div>
      )}
    </div>;
}

export default Home;
