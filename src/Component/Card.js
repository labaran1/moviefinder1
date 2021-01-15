import React, {useContext} from 'react'
import AppContext from '../context/appContext/AppContext'
import './Card.css'

export default function Card() {
    const appContext = useContext(AppContext)
    const { Year , Name, Poster , fav} = appContext;
    return (
        // <center></center>
        <div className="card">
            <img src={Poster} alt=""/>
            <h2 style={{background:"#1d0f22"}}>{Name}</h2>
            <h4 style={{background:"#1d0f22", color: "#ccc"}}>{Year}</h4>
        
         <span style={{background:"#1d0f22", color:"red" , display: "flex", justifyContent:"space-between"}}>
<span  title="Nominate Movie"> <i className="fas fa-plus" style={{background:"#1d0f22", color: "red" , cursor:"pointer"}}></i>

</span> 

<span  title={(fav>=5)? "Can't Add movie to favourite": "Add Movie to favourite"}> <i className={(fav>=5)? "fas fa-ban" :"far fa-heart"} style={{background:"#1d0f22", color: "red" , cursor:`${(fav>=5)? "disabled": "pointer"}`       }}></i>

</span>

         </span>
        </div>
    )
}
