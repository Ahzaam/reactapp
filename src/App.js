import {useEffect, useState} from 'react';
import './app.css'
import MovieCard from "./movieCard";
import SearchIcon from "./search.svg";

// 547d4cbc

const API_URL = 'https://www.omdbapi.com?apikey=547d4cbc';



const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setrSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovies('2022');
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
