import react from 'react';
import {handlesearchtext,handleaddmovies} from './Actions/index';
class Navbar extends react.Component
{
    constructor()
    {
        super();
        this.state = {
            searchtext : '',
            showsearchtext : false
        }
    }
    changehandler = (e)=>
    {
        this.setState({
            searchtext : e.target.value
        });
    }
    addmoviebtn_handler = (movie)=>{
        this.props.store.dispatch(handleaddmovies(movie));
    }
    searchhandler=()=>
    {
        const {searchtext} = this.state; 
        this.props.store.dispatch(handlesearchtext(searchtext));
    }
    render()
    {
        const {search}= this.props.store.getState();
        console.log(search);
        return(
        <div className = 'nav'>
        <div className = 'nav-container'>
        <input type='text' className = 'searchbar' onChange = {this.changehandler}></input>
        <div className = 'search-button' onClick = {this.searchhandler}>Search</div>
        // {search.searchlist.map((movie)=>{
            return (<div className = 'searched-tabs'>
                <div className='container'>
                <img className='movie-logo2' src={movie.Poster}/>
                <div>{movie.Title}</div>
                <button type='button' onClick = {()=>this.addmoviebtn_handler(movie)}>ADD TO MOVIES</button></div>
            </div>)
        })}
        </div>
        </div>
    );}
}
export default Navbar;