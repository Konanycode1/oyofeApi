import { useEffect, useState } from "react";
import { Col, Image, Button,Row  } from "react-bootstrap"
import { BsFillBagCheckFill,BsFillBellFill,BsFillCartPlusFill} from "react-icons/bs";
import {useNavigate} from "react-router-dom"
import user from "../assets/user.png"
import url from './url'
function MenuClient() {
    let [data, setData] = useState({})
    let pannier = JSON.parse(localStorage.getItem('dataCom')) 
    let navigate = useNavigate(null)
        useEffect( ()=>{
        
                let api = url+"api/client/"
                const cookie = JSON.parse(sessionStorage.getItem("cookieClient"));
                if(cookie == null) navigate('/loginCLient');
                fetch(api, {
                    method:"GET",
                    headers: {
                    "authorization":`token ${cookie.token}`
                    }
                })
                .then((res)=>{
                    if(res.redirected){
                        navigate('/loginCLient')
                    }
                    return res.json()
                })
                .then((response)=>{
        
                    if( response.status == true){
                        setData(response.message)
                    
                    }
                })
                .catch((e)=> console.log(e))
                
                
        }, [])
    return (
        <>
             <Row  >
                            <Col lg={12} sm={12} md={12} className=" d-flex align-items-center justify-content-center p-2">
                            <Image src={user} className="myLogo" roundedCircle />
                            </Col>
                            <Col lg={12} sm={12} md={12} className=" d-flex align-items-center justify-content-center">
                                <h5>{data.nomClient}</h5>
                            </Col>
                            <Col lg={12} sm={4} md={4} className="p-1">
                               <p>Emain: {data.email}</p> 
                            </Col>
                            <Col lg={12} sm={4} md={4}  className="p-1">
                                <p>Telephone: {data.numero}</p>
                            </Col>
                            <Col lg={12} sm={4} md={4} >
                                <p>lieu: {data.localisation},{data.ville} </p>    
                            </Col>
                            <Col lg={6} sm={3} md={3} >
                                <Button variant="outline-primary" size="sm" disabled>
                                  <BsFillBellFill/>: 2
                                </Button>
                            </Col>
                            <Col lg={6} sm={3} md={3}  className="p-1">
                                <Button variant="outline-info" size="sm" disabled>
                                <BsFillBagCheckFill /> :{data.commande?.length}
                                </Button>
                            </Col>
                            <Col lg={6} sm={3} md={3}  className="p-1">
                                <Button variant="outline-info" size="sm" disabled>
                                <BsFillCartPlusFill /> :{pannier?.length}
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={3}  className="p-1">
                                <h6>Status: </h6> 
                            </Col>
                            <Col lg={6} sm={4} md={3}  className="p-1">
                                <p>Standard</p>
                            </Col>
                        </Row>
        </>
    )
    
}
export default MenuClient