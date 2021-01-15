import React, {useContext} from 'react'
import AppContext from '../context/appContext/AppContext'
import './Card.css'

export default function Card() {
    const appContext = useContext(AppContext)
    const { Year , Name, Poster} = appContext;
    return (
        // <center></center>
        <div className="card">
            <img src={Poster} alt=""/>
            <h2 style={{background:"#1d0f22"}}>{Name}</h2>
            <h4 style={{background:"#1d0f22", color: "#ccc"}}>{Year}</h4>
        
         <span style={{background:"#1d0f22", color:"red" , display: "flex", justifyContent:"space-between"}}>
<span  title="Nominate Movie"> <i class="fas fa-plus" style={{background:"#1d0f22", color: "red" , cursor:"pointer"}}></i>

</span>
<span  title="Add Movie to favourite"> <i class="far fa-heart" style={{background:"#1d0f22", color: "red" , cursor:"pointer"}}></i>

</span>

         </span>
        </div>
    )
}
