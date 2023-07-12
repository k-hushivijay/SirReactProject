import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


export default function Cart(){
    const nav=useNavigate()
    const loc=useLocation()
    const[data,setdata]=useState(loc.state)
    console.log(data);
    

    
    return(
      <>

<div>
        <img src={data.image}/>
        <p>{data.Name}</p>
        <h1>{data.rate}</h1>
      </div>

      
    
      
      <button onClick={()=>nav('/Payment')}>Payment</button>
      </>
    )
}
