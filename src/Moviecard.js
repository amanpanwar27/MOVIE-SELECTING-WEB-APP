import react from 'react';
import {add_favorite} from './Actions/index';
class Moviecard extends react.Component
{
    ismovie_favorite=(movie)=>{
        const {favorites} = this.props.store.getState().movies;
        const index = favorites.indexOf(movie);
        if(index !== -1)return true;
        return false;
    }
    favorite_clickhandler=()=>
    {
        this.props.store.dispatch(add_favorite(this.props.movie));
    }
    unfavorite_clickhandler=()=>{}
    render()
    {
        return(
        <div className = 'moviecard-container'>
        <img src = {this.props.movie.Poster} alt='movie-poster'/>
        <div className = 'movie-data'>
        <div className = 'movie-title'>{this.props.movie.Title}</div>
        <div className = 'movie-description'>{this.props.movie.Plot}</div>
        <div className = 'movie-rating'>{this.props.movie.imdbRating}</div></div>
        {this.ismovie_favorite(this.props.movie)
        ?<button className='favorites' onClick = {this.unfavorite_clickhandler}>Unfavorite</button>
        :<button className = 'favorites' onClick = {this.favorite_clickhandler}> Add Favorite</button>
        }
        </div>
    );}
}
export default Moviecard;