import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

// Function to fetch movies from the API
const fetchMovies = async (searched, apiKey, baseApiUrl, authHeader) => {
    try {
        // Construct the API request URL with the searched query
        const url = `${baseApiUrl}/search/movie?query=${searched}&api_key=${apiKey}`;
        // Config object for axios request, including the authorization header
        const config = {
            headers: { 'Content-Type': 'application/json', Authorization: authHeader },
        };
        // Making the API request
        const response = await axios.get(url, config);
        // Return the fetched data
        return response.data.results;
    } catch (err) {
        // Throw an error in case of an error
        throw new Error('Error fetching data');
    }
};

// Component to render each movie item
const MovieItem = ({ movie }) => (
    <section className='search-container'>
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`Poster of ${movie.original_title}`} />
        <p>{movie.original_title}</p>
        <section className='description'>
            <p>{movie.overview}</p>
            <p id='movieDate'>Release date: {movie.release_date}</p>
        </section>
    </section>
);

// Main component for the movie search functionality
export default function Medium() {
    const apiKey = 'd66d4602dd24d33db6655c2ace0fda18';
    const baseApiUrl = 'https://api.themoviedb.org/3';
    const authHeader = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjZkNDYwMmRkMjRkMzNkYjY2NTVjMmFjZTBmZGExOCIsInN1YiI6IjY1N2Y3NmViMzIzZWJahNjIzMTg3YTkyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QDtbzAhjs286zSE2zBc-2bih4vp5UymxmTpi2FwHzdk';

    const [movies, setMovies] = useState([]);
    const [searched, setSearched] = useState('');
    const [error, setError] = useState('');

    // useEffect hook to perform API call when `searched` changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searched) {
                    const data = await fetchMovies(searched, apiKey, baseApiUrl, authHeader);
                    setMovies(data);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [searched, apiKey, baseApiUrl, authHeader]);

    // Handler for search input changes
    const handleInput = (e) => {
        setSearched(e.target.value);
    };

    return (
        <div>
            <Link to="/">
                <p>Home</p>
            </Link>
            <section className='searchBar'>
                <input
                    type='text'
                    value={searched}
                    onChange={handleInput}
                />
            </section>

            {error && <p className="error">{error}</p>}

            <section className='grid'>
                {/* Mapping over movies state to render each movie */}
                {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
            </section>
        </div>
    );
}
