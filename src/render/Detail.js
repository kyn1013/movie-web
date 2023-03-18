import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async() => {
        const json = await( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
        .json(); //id를 알고 있으니 api로부터 정보를 fetch해올 수 있음
        setMovies(json.data.movie);
        setLoading(false);
    }; 
    useEffect(()=>{
        getMovie();
    },[])
    console.log(movie);
    return <div>{loading ? <h1>Loading...</h1> :
      (<div>
        <div>
            <h1>{movie.title_long}</h1>
            <h2>download count:{movie.download_count}</h2>
            <h2>like count:{movie.like_count}</h2>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <h3>{movie.description_full}</h3>
            <ul>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                    ))}
        </ul>
      </div>
      </div>
      )}
    </div>;
}

export default Detail;