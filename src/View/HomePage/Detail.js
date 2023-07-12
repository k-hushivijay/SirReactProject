// import { useState } from "react"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { mendresses } from "../data/data"

export default function Detail(){
    const loc=useLocation()
    const nav=useNavigate()
    const[product2,setproduct]=useState(mendresses)
    const[data,setdata]=useState(loc.state)
    console.log(data);
    console.log(mendresses);
    // const [detail,setdetail]= useState(detail)
    return(
      <>
      {/* <div className="detailPage">
        
          <button onClick={()=>nav('/Cart')}> Next-Screen</button>

      </div> */}
      <div className="datamain">
      <div className="data">
        <img src={data.image}  className="dataimg"/>
        <p className="dataname">{data.name}</p>
        <h1>{data.rate}</h1>
      </div>
      <button className="databtn"  onClick={()=>nav('/Cart',{state:data})}>Add-To-Cart</button>
      </div>
      <div>
{
    product2.map(e=>(
        <div className="product2 " onClick={()=>nav('/Cart',{state:e})}>
            <img src={e.image}/>
            <h1>{e.name}</h1>
            <h1>{e.rate}</h1>
        </div>
    ))
}

</div>
      </>
    )
}