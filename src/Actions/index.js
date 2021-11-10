export function add_movies(movie){
    return {type:'ADD_MOVIES',
    movies:movie}
}
export function add_favorite(movie){
    return {
        type:'ADD_FAVORITE',
        favoritemovie:movie
    }
}
export function click_favorite(){
    return {
        type:'SHOW_FAVORITES',  
        val:true
    }
}
export function click_movies()
{
    return {
        type:'SHOW_MOVIES',
        val:false
    }
}
export function handlesearchtext(movie)
{
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
   return  (dispatch)=>
    { fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log("res : ",res);
        dispatch({
            type : 'ADD_SEARCH',
            searchmovies : res
        });
    });}
}
export function handleaddmovies(movie){
    return {
        type : 'ADD_MOVIE_BTN',
        movies : movie
    }
}