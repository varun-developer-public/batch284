import './moviecard.css'
import MovieList, { DemoList } from './movielist';
import MOVIES from '../../../datas.js';

const MovieCard = () => {

  return (
    <div className="movie-card">
      {
        MOVIES.map((i)=>{
          return(
            <div className='movie-card-item'>
              <DemoList/>
              <MovieList movie={i} />
            </div>
          )
        })
      }
    </div>
  );
};

export default MovieCard;