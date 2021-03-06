import React,{useContext, useState} from 'react'
import AppContext from '../context/appContext/AppContext'


export default function Search() {
    const [searchValue, setSearchValue] = useState("")

    const appContext = useContext(AppContext)
    const {updateError} = appContext;
    const submitNow = (e)=>{
        e.preventDefault()
    
        // alert(searchValue)
        // console.log(appContext.Year);
        if(searchValue=== ""|| null || undefined || " "){
            appContext.updateError(true,"Enter Any movie title")
        // console.log(appContext.Err);
            
        }
        appContext.updateLoad(true)
        appContext.searchResult(searchValue)
        // console.log(appContext.updateError(true, "love"));
        // console.log(appContext.Err);
    // console.log(appContext.Year);

    }
    const change = (e)=>{
        e.preventDefault()
        setSearchValue(e.target.value)
        
    }
    return (
        <div className="search">
        <form className="search-form" onSubmit={submitNow}>
            <input type="text" placeholder="Search by movie title ...." value={searchValue}  onChange={change}
            />
            <input type="submit" value="Search"/>
        </form>

       
    </div>
    )
}
