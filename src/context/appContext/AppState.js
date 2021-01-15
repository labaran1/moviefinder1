import React, {useReducer} from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import {GET_MOVIE , UPDATE_lOADING, UPDATE_ERROR} from  '../types'


const AppState = props => {
const initialState = {
    Poster: "",
    Name: "",
    Year: "",
    Nomination: "",
    Loading: false,
    Error:{
        status:false,
        message: "",
    },
}

const [state, dispatch] = useReducer(AppReducer, initialState)





    const searchResult = async word => {
        let urll = `https://www.omdbapi.com/?t=${word}&apikey=5173ce93`
    
let res;
        try {
        res = await axios.get(urll)
            if(res.data.Response==="False"){
                // console.log(res.data.Response);
                updateError(true, `${res.data.Response.Error}`)
            }
            dispatch({
                type: GET_MOVIE,
                     payload:{
                      Poster: res.data.Poster,
                      Name:res.data.Title,
                      Year:res.data.Year,
                      Nomination:res.data.Awards,
      
                  }
              });
              updateError(false, "")
              updateLoad(false)
        } catch (error) {
            // console.log(e);
                            updateError(true, "Invalid Response")

        }

// })
    
      
      };

      const updateLoad = (value) =>{

        dispatch({
            type:UPDATE_lOADING,
            payload:{
                Loading:value
            }
    
        })
    }


    const updateError = (stat,mess)=>{
      dispatch({
          type:UPDATE_ERROR,
          payload:{
              Error:{
                status:stat,
                message: mess,
              }
          }
      })
    }
return (
    <AppContext.Provider value={{
 Poster: state.Poster,
 Name: state.Name,
 Year: state.Year,
 Nomination: state.Nomination,
 Loading:state.Loading,
 Err:state.Error,
  searchResult,
  updateLoad,
  updateError,
//  SearchValue: state.SearchValue,

    }}>

    {props.children}
    
    </AppContext.Provider>
)
}

export default AppState