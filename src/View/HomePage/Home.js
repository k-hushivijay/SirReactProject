
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {name,logo,product} from '../data/data'
import { useState } from 'react';
import axios from 'axios';


export default function Home(){
    useEffect(
        ()=>
        {
            async function show()
            {
                    const res = await axios.get("http://ankursingh.xyz/api/productshow.php")
                    console.log(res.data.body);
                    setproduct(res.data.body)
                
                    
            } show()

            
        }
        ,[] ) 
      


    const nav=useNavigate()
    console.log(name);  
    console.log(logo);
    console.log(product);
   
    const[product1,setproduct]=useState(product)
   

    
    return(
        <>
       <div>
        <div className='top'>
        <img src={logo} className='img'/>
        <p>{name}</p>
        </div>
        <div className='mainproduct'>
            {
              product1 &&  product1.map(d=>(
                    <div className='product'  onClick={()=>nav('/Detail',{state:d})}>
                        {<div>
                            <img src={d.image} className='images'/>
                            <p className='datatext'>{d.name}</p>
                            <p className='datarate'>{d.rate}</p>
                          
                      </div>
               
                        }
              
                    </div>
                    
                    
                ))
            }

        </div>




       </div>

     </>   
    )
}