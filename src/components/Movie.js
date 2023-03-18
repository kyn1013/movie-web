import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImage, title}) {
    return (
        <div>
            <img src={coverImage} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
      </div>
    );
} 

Movie.propTypes = { //propTypes설정
    id:PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Movie;