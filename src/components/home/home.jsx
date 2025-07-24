import { useEffect, useState } from 'react';
import NavBar from '../navbar/navbar'
import './home.css'
import MovieCard from '../moviecard';

function Home() {
     let [movieName,setMovieName] = useState(0)

     useEffect(()=>{
      setInterval(()=>{
        setMovieName(movieName+ 1)
      },2000)

      return () => {
        clearInterval();
      }
     },[movieName])
  return (
    <>
    <div className="home">
        <NavBar link1={"cejbe"} link2="gallery"/>
        { movieName }
          <button>change </button>
        <div className='movie-cards'>
          {/* <MovieCard/> */}
        </div>
    </div>
    </>
  )
}

export default Home