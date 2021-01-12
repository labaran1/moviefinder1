import React, { useContext } from 'react'
import axios from 'axios'
import AppContext from '../context/appContext/AppContext'


export default function Home() {
    const appContext = useContext(AppContext)
let key = `5173ce93`
let urll = `http://www.omdbapi.com/?t=hello&apikey=5173ce93`
// res.data.title 
// res.data.Year
// res.data.Awards
// res.data.Poster
    const geti = ()=>{
        axios.get(urll).then( (res)=> {
            console.log(res.data.Poster);


        })
    }
    return (
        <div onClick={geti}>
            {/* Search Component */}
            {/* {Searh Result } */}
            {appContext.Year}
        </div>
    )
}
