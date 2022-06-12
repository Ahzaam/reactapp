import {useEffect, useState} from 'react';
import './app.css'
import MovieCard from "./movieCard";
import SearchIcon from "./search.svg";

// 547d4cbc

const API_URL = 'https://www.omdbapi.com?apikey=547d4cbc';

const movie1 = {Title: 'Maverick', 
    Year: '1994', 
    imdbID: 'tt0110478', 
    Type: 'movie', 
    Poster: "https://m.media-amazon.com/images/M/MV5BY2I1OTY2NmUtMGVlZi00NjNmLThkNTgtMjExMzRhOTM2MDJiXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    }


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setrSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('inception');
    }, [])

    return(
        
        <div className="app">
            <h1>GLiDE Movies</h1>
            <div className='search'>
                <input
                 placeholder='Search for movies'
                 value={searchTerm}
                 onChange={(e) => {
                    setrSearchTerm(e.target.value)
                 }}
                 />

                <img 
                    src={SearchIcon}    
                    alt='Search'
                    onClick={() => {searchMovies(searchTerm)}}
                />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className='container'>
                     {movies.map((movie) => 
                        <MovieCard movie={movie} />
                     )}
                    </div>
                ): (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }


            
        </div>
    );
}

export default App;
