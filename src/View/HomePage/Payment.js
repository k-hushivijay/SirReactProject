import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Payment(){
    const nav=useNavigate()
    const[fname,setfname]=useState("");
    const[email,setemail]=useState("");
    const[lname,setlname]=useState("");
    const[pass,setpass]=useState("");
   
    async function userregister(){
        console.log("User-Details");
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(pass);
        const params ={
            "fname":"hanu",
            "lname":"saini",
            "email":"hanu@gmail.com",
            "pass":"12345",
           

        }
        const res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
        console.log(res.data); 
        
         if (fname!==""&& lname!==""&& email!=="" && pass!==""){
            nav("/Login")
           setfname("");
           setlname("");
            setemail("");
            setpass("");
                }
                else{
                    alert("enter form")
                }
    }
    return(
       <>
       <div className="paymenthead">
        <div className="paymentform">
            <h1>Registration Form</h1>
            <div className="payementmain">
                <h3>Enter Your First Name:</h3>
                <input type="text" value={fname} onChange={name=>setfname(name.target.value)} placeholder="Enter Your First Name" className="nameinput"/>
                <h3 className="h3">Enter Your Last Name:</h3>
                <input type="text" value={lname} onChange={name=>setlname(name.target.value)} placeholder="Enter Your Last  Name" className="name-input"/>
                <h3 className="pay-email">Enter-Email</h3>
                <input type="email" value={email} onChange={name=>setemail(name.target.value)} className="input-email" placeholder="Enter-email"/>
                <h3 className="pay-pass">Enter Password</h3>
                <input type="password" value={pass} onChange={name=>setpass(name.target.value)} placeholder="enter-password" className="enter-pass"/>
                
                </div>
            <input type="button"   className="submitbtn" onClick={userregister} value="register"/>
        </div>
      
       </div>
       
        
        </>
    )
}