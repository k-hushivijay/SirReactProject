
import {name,logo,product} from '../data/data'
export default function Home(){
    console.log(name);  
    console.log(logo);
    console.log(product);
    
    return(
       <div>
        <div className='top'>
        <img src={logo} className='img'/>
        <p>{name}</p>
        </div>
        <div className='mainproduct'>
            {
                product.map(d=>(
                    <div className='product'>
                        <img src={d.image} className='images'/>
                        <h1>{d.name}</h1>
                        <h2>{d.rate}</h2>

                    </div>
                ))
            }

        </div>
       </div>

        
    )
}