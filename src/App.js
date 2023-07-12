// import  './View/Style/style.css'
// import Home from "./View/HomePage/Home"
// // import Name from "./View/HomePage/Name"
// // import Logo from "./View/HomePage/Logo"
// // import Product from "./View/HomePage/Product"
// export default function App(){
//   return(
//   //  Name()
//    Home()
//   // Logo()
//   // Product()
//   )

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Router from "./View/Router/Router";
import "./View/Style/style.css";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="*" Component={Router}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}