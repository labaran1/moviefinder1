import {GET_MOVIE} from '../types'

 const  AppReducer = (state, action)=> {
switch (action.type) {
    case GET_MOVIE:{
        return {
            
            ...state,
            Poster:action.payload.Poster,
    Name: action.payload.Name,
    Year: action.payload.Year,
    Nomination: action.payload.Nomination,
        }
    }
  
}















}


export default AppReducer

