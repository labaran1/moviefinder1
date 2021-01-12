import React, {useReducer} from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import {GET_MOVIE} from  '../types'


const AppState = props => {
const initialState = {
    Poster: "",
    Name: "",
    Year: "",
    Nomination: "",
}

const [state, dispatch] = useReducer(AppReducer, initialState)





    const searchResult = async word => {
        let urll = `https://www.omdbapi.com/?t=${word}&apikey=5173ce93`
    
        const res = await axios.get(

urll            );
    
        dispatch({
          type: GET_MOVIE,
               payload:{
                Poster: res.data.Poster,
                Name:res.data.Title,
                Year:res.data.Year,
                Nomination:res.data.Awards,

            }
        });
      };

return (
    <AppContext.Provider value={{
 Poster: state.Poster,
 Name: state.Name,
 Year: state.Year,
 Nomination: state.Nomination,
  searchResult,
//  SearchValue: state.SearchValue,

    }}>

    {props.children}
    
    </AppContext.Provider>
)
}

export default AppState