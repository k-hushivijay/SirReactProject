// export default function Router(){
//     return(
//         <h1>
//             Khushi
//         </h1>
//     )src/View/Router/Router.js
// }
import { Routes,Route, useNavigate,Link } from "react-router-dom";
import Home from "../HomePage/Home";
import Detail from "../HomePage/Detail";
import Cart from "../HomePage/Cart";
import Payment from "../HomePage/Payment";
import Logout from "../HomePage/Logout";
import Login from "../HomePage/Login";
export default function Router(){
    const nav=useNavigate()
    return(

        
        <>
            <Link to="/Home">Home</Link>
            
            

        <Routes>
            <Route path="/Home" Component={Home}/>
            <Route path="/Detail" Component={Detail}/>
            <Route path="/Cart" Component={Cart}/>
            <Route path="/Payment" Component={Payment}/>
            <Route path="/Logout" Component={Logout}/>
            <Route path="/Login" Component={Login}/>
        </Routes>
    
        </>
    )
}