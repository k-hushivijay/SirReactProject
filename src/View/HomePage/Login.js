import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { name, product } from "../data/data";
import axios from "axios";

export default function Login(){
   
    const nav = useNavigate()
    const[IFname,setIFname]=useState("");
    const[Iemail,setIemail]=useState("");
    const[Ipass,setIpass]=useState("");
   async function inputuser() {
        console.log("Input-User");
        console.log(IFname);
        console.log(Iemail);
        console.log(Ipass);

        const params ={
            "IFname":"hanu",
            "Iemail":"hanu@gmail.com",
            "Ipass":"123",
        }
        const res = await axios.post("http://ankursingh.xyz/api/Employeelogin.php",params)
        console.log(res.data); 

        if(IFname!=="" && Iemail!=="" && Ipass!==""){
            nav("/Home")
            setIFname("");
            setIemail("");
            setIpass("");
    
        }
        else{
            alert("complete signing-up")
        }
        
    }
   
    return(
        <>
        <div className="loogin">
            <div className="log-head">
            <div className="Sign-up">
                <h1>Sign Up</h1>
            </div>
            <div className="log-mid">
                <input type="text" value={IFname} onChange={name=>setIFname(name.target.value)} className="input-full-name" placeholder="Full-Name"/>
                <input type="email" value={Iemail} onChange={name=>setIemail(name.target.value)} className="input-email" placeholder="Email"/>
                <input type="password" value={Ipass} onChange={name=>setIpass(name.target.value)} className="input-password" placeholder="password"/>
            </div>
            <div className="log-footer">
                <input type="submit" onClick={inputuser} className="input-submit"/>
            </div>
            </div>

        </div>
        </>
    )
}