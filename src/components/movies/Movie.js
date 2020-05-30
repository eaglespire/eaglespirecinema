import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './movie.css'
import '../../index.css'


const Movie = (props)=>{
    const img_path = "https://image.tmdb.org/t/p/w500";
    let movieId = props.match.params.movie_id;
    const apiKey = '8eaf4ba011be8e9f534e5aac9aa33cd6'

    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
    const [movie,setMovie] = useState({});
    const [genres,setGenres] = useState([]);
    useEffect(()=>{
        axios.get(apiUrl)
            .then(res=>{
                console.log(res.data.genres)
                setGenres(res.data.genres)
                setMovie(res.data);
            })
            .catch(error=>{
                console.log(error);
            });

    },[])
    console.log(props.match.params.movie_id)
    const {backdrop_path,poster_path,original_title,release_date,vote_average,tagline,overview,status} = movie;
    console.log(genres)

    return (
        <React.Fragment>
            {movie.length !==0 ? (
                    <div className="row" style={{
                        backgroundImage:`url(${img_path + backdrop_path})`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center'
                    }}>


                        <div className="col-lg-12">
                            <div className="jumbotron jumbotron-fluid bg-dark">

                                <div className="jumbotron-background">
                                    <img src={img_path + poster_path} className="blur " alt={''}/>
                                </div>

                                <div className="container text-white poppins-medium">

                                    <h1 className="h1 poppins-bold">{original_title}</h1>
                                    <h6 className="h6"><span>Date of Release</span> <span>{release_date}</span> </h6>
                                    <h6 className="h6"><span>Rating</span> <span>{vote_average}</span> </h6>
                                    <h6 className="h6"><span>Status</span> <span>{status}</span> </h6>
                                    <h5 className="h5 poppins-bold">{tagline}</h5>

                                    <hr className="my-4"/>
                                        <h4 className="h4 poppins-bold">Overview</h4>
                                        <p>{overview}</p>
                                    <hr className="my-4"/>
                                    <h4 className="h4 poppins-bold">Genre</h4>
                                    <ul className="list-group list-group-horizontal text-dark">
                                        {genres.map(genre=>{
                                            return (
                                                <li style={{backgroundColor:'#000'}}
                                                    key={genre.id} className="list-group-item list-group-item-light">{genre.name}</li>
                                            )
                                        })}
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>

            ):(
                <p>loading...</p>

            )}

        </React.Fragment>
    )
}


export default Movie