import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from "./card/Card";
import {Link} from "react-router-dom";

const Search = ()=>{
    const apiKey = '8eaf4ba011be8e9f534e5aac9aa33cd6'
    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=King%20Kong&page=1&include_adult=true`;


    const [movies,setMovies] = useState([])

    const [query,setQuery] = useState('')
    useEffect(()=>{
        axios.get(apiUrl)
            .then(res=>{
                console.log(res.data.results)
            })
            .catch(error=>{
                console.log(error);
            })
    },[]);

  const handleSearch = (e)=>{
      const apiUrl2 = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=true`;
        setQuery(e.target.value)
      axios.get(apiUrl2)
          .then(res=>{
              console.log(res.data.results);
              setMovies(res.data.results);
          })
          .catch(error=>{
              console.log(error);
          })
    }
    return (
        <React.Fragment>
            <div className="row my-3">
                <div className="col-12">
                    <form className='mt-2'>
                        <input value={query}  onChange={handleSearch} className="form-control mr-sm-2" type="search" placeholder="Search EagleSpireCinema DB" aria-label="Search"/>
                    </form>
                </div>

            </div>

            <div className="row">
                <div className="col-12">
                    {movies.length !==0 ? movies.map(movie=>{
                        const img_path = "https://image.tmdb.org/t/p/original";
                        const {id, title, poster_path, overview, popularity} = movie;
                        return (
                            <div className="row mt-4" key={id}>
                                <div className="col-lg-8 col-md-6">
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src={img_path + poster_path} className="card-img" alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <Link to={'/movies/' + id}>
                                                        <h5 className="card-title">{title}</h5>
                                                    </Link>
                                                    <p className="card-text">{overview}</p>
                                                    <p className="card-text"><small className="text-muted">{popularity}</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }): (
                        <div className="jumbotron text-white poppins-medium" style={{backgroundColor:'#EE4836'}}>
                            <h1 className="display-4">Please, enter a search term above ...</h1>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>

    )
}
export default Search