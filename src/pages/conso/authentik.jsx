
import { useState } from "react";
import url from './url'
function Authentick() {
    let [data, setData] = useState({})
    const  authentic = async ()=>{
        let api = url+"api/client/"
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


