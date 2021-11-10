
const initialmoviestate = {
    movielist:[],
    favorites:[],
    showfavorites:false
}
const initialsearchstate = {
    searchlist:[]
}
const initialrootstate = {
    movies:initialmoviestate,
    search:initialsearchstate   
}
function callRootreducer(state = initialrootstate,action){
    if(action.type === 'ADD_MOVIES')return {
        ...state,movies:{...state.movies,movielist:action.movies}
    }
    else if(action.type === 'ADD_FAVORITE')return {
        ...state,movies:{...state.movies,favorites:[action.favoritemovie,...state.movies.favorites]}
    }
    else if(action.type === 'SHOW_FAVORITES')return {
        ...state,movies:{...state.movies,showfavorites:action.val}
    }
    else if(action.type === 'SHOW_MOVIES')return {
        ...state,movies:{...state.movies,showfavorites:action.val}
    }
    else if(action.type === 'ADD_SEARCH')return{
        ...state,search:{
            searchlist:[...state.search.searchlist,action.searchmovies]
        }
    }
    else if(action.type === 'ADD_MOVIE_BTN')return {
        ...state,movies:{...state,movielist:[...state.movies.movielist,action.movies]}
    }
    else return state;
}
export default callRootreducer;