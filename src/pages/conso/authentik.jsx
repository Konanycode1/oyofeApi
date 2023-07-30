
import { useState } from "react";
function Authentick() {
    let [data, setData] = useState({})
    const  authentic = async ()=>{
        let api = "http://localhost:3000/api/client/"
        const cookie = JSON.parse(sessionStorage.getItem("cookie"));
        fetch(api, {
            method:"GET",
            headers: {
               "authorization":`token ${cookie.token}`
            }
        })
        .then((res)=>res.json())
        .then((response)=>{
    
             if( response.status == true){
                setData(response.message)
                
            }
        })
        .catch((e)=> {return console.log(e)})
        
    }
    authentic

    return data
    
}
export default Authentick


