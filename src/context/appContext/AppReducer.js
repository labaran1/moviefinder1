import {GET_MOVIE, UPDATE_lOADING , UPDATE_ERROR} from '../types'

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
    case UPDATE_ERROR:{
        return {
            ...state,
           
            Error:{
                status:action.payload.Error.status,
                message:action.payload.Error.message,
            }
        }
    }


    default:{
return{
    ...state,
}
    }
  
}















}


export default AppReducer

