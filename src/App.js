import react from 'react';
import {data} from './data';
import Navbar from './Navbar';
import {add_movies,click_favorite,click_movies} from './Actions/index';
import Moviecard from './Moviecard';
class App extends react.Component{

componentDidMount()
{
  console.log(this.props.store.getState());
  this.props.store.dispatch(add_movies(data));
  this.props.store.subscribe(()=>{
    console.log('State has been updated sucessfully');
    this.forceUpdate();
  });
this.forceUpdate();
}
movietab_clickhandler=()=>{
  this.props.store.dispatch(click_movies());
}
favoritetab_clickhandler= ()=>{
  this.props.store.dispatch(click_favorite());
}
render()
{
    const {movielist,favorites,showfavorites} = this.props.store.getState().movies;
    const showtab = showfavorites?favorites:movielist;
    console.log(this.props.store.getState());
    return(
    <div className='body'>
    <Navbar store = {this.props.store}/>
    <div className = 'tabs-container'>
    <button className = 'tabs' onClick = {this.movietab_clickhandler}>Movies</button>
    <button className = 'tabs' onClick = {this.favoritetab_clickhandler}>Favourites</button>
    </div>
    {
     <div className="main">
      {showtab.map((item,index)=>{
        return <Moviecard movie = {item} key = {index} store = {this.props.store}/>
      })}
      </div>
    }
    </div>
    );
  }
}
export default App;