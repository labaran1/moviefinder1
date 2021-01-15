import React, {useContext} from 'react'
import Search from './Search'
import Card from './Card'
import AppContext from '../context/appContext/AppContext'
import Load from '../Images/rings.svg'
import Error from './Error'


export default function Home() {
    const appContext = useContext(AppContext)
    const { Year , Name, Poster,Loading , Err} = appContext;

    
    return (
        <div>
            <center className="Head">
                <div>
                    <h1> Movie Finder</h1>
                    <h5>Try below !</h5>
                </div>
            </center>

            {/* Search Component */}
            <Search/>
            
            {Loading? <center> <img src={Load} style={{width:"500px"}} /></center>: (Year&& Name && Poster)  !==(null || undefined || "") ?<Card/>: (Err.status)? <Error/>:null}
           {/* {(Year&& Name && Poster)  !==(null || undefined || "") ?<Card/>:  null } */}
        </div>
    )   
}
