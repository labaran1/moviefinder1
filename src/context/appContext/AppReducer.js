import {GET_MOVIE, UPDATE_lOADING} from '../types'

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
    case UPDATE_lOADING:{
        return {
            ...state,
            Loading: action.payload.Loading
        }


    }
  
}















}


export default AppReducer

