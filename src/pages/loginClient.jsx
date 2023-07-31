import { Container, Col,Row, Form, Button } from "react-bootstrap"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './css/accueil.css'
import axios from "axios"
import Cookies from "js-cookie"
import url from './url'
function LoginClient(){
    let api = url+"api/clientLogin/"
    let [result, setResult] = useState();
    let navigate = useNavigate(null);

    function submitLogCl(e){
        e.preventDefault();
        let data = {
            "email": e.target.querySelector('#email').value,
            "password": e.target.querySelector('#password').value
        }
        console.log(data)

        fetch(api,{
            method:"POST",
            body: JSON.stringify(data),
            headers:{
                "Content-Type": "application/json", 
            },
        })
        .then((res)=> res.json())
        .then((response)=>{
            if(response.status === true){
                // Cookies.set("token", response.token, {expires:24*3600, path:"/"})
                // Cookies.set("userId", response.userId, {expires:24*3600, path:"/"})
                // Cookies.set("statut", response.statut, {expires:24*3600, path:"/"})
                sessionStorage.setItem("cookieClient", JSON.stringify(response))
                setTimeout(()=>{
                    navigate("/homeClient")
                },2000)
            }
            
        })
        .catch((e)=> console.log(e))
    }

    return (
       <Container className="d-flex justify-content-center align-content-center p-5">
            <div className="contentFor" >
                <Link to="/" className="link">
                    <div className="logo">
                            <p className='ds'></p>
                            <h2>ôyofê</h2>
                    </div>
                </Link>
               <p>Connectez vous pour deguster les meilleurs plats Africain</p>
                <Form  className="p-2" onSubmit={submitLogCl}>
                    <Form.Group  className="mb-3">
                        <Form.Label >
                        Email
                        </Form.Label>
                       
                        <Form.Control type="text" id="email"  name="email" placeholder="email@example.com" />
                        
                    </Form.Group>

                    <Form.Group  className="mb-3" c>
                        <Form.Label >
                        Password
                        </Form.Label>
                        <Form.Control type="password" name="password" id="password" placeholder="Password" />
                    </Form.Group>
                    <Row className="m-1">
                        <Col sm={6} md={6} lg={6}>
                            <Link >Mot de passe oublié?</Link>
                            <a href=""></a>
                        </Col>
                        <Col sm={6} md={6} lg={6}>
                            <Link to="/createClient">Créer un compte</Link>
                        </Col>
                    </Row>
                    <Button type="submit" >Connexion</Button>
                </Form>
                    <p>{result?result.message:""}</p>
                </div>
            
       </Container>
    )
}
export default LoginClient