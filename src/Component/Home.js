import React, {useContext} from 'react'
import Search from './Search'
import Card from './Card'
import AppContext from '../context/appContext/AppContext'


export default function Home() {
    const appContext = useContext(AppContext)
    const { Year , Name, Poster, Nomination} = appContext;

    
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
            
           {Year&& Name && Poster  !=null || undefined || "" ?<Card/>: null }
        </div>
    )
}
