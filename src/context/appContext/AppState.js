import React, {useReducer} from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import AppReducer from './AppReducer'
import {GET_MOVIE} from  '../types'


const AppState = props => {
const initialState = {
    Poster: null,
    Name: null,
    Year: 2016,
    Nomination: null,
}

const [state, dispatch] = useReducer(AppReducer, initialState)



return (
    <AppContext.Provider value={{
 Poster: state.Poster,
 Name: state.Name,
 Year: state.Year,
 Nomination: state.Nomination,

    }}>

    {props.children}
    
    </AppContext.Provider>
)
}

export default AppState