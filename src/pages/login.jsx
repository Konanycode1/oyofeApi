import { Container, Col,Row, Form, Button } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import './css/accueil.css'
import { useState } from "react"
import axios from "axios";
import url from './url'
function Login(){
    let navigate = useNavigate(null)
    // let [data, setData] = useState({"numero":"","password":""});
    let [result, setResult] = useState();

    function  submitDataLog(e) {
        e.preventDefault();
        let val ={
            "numero": e.target.querySelector("#numero").value,
            "password": e.target.querySelector("#password").value
        }
        
        console.log(val)
        let api = url+"api/restoLog/"
        axios.post(api,val)
        .then((newRes)=>{
            setResult(newRes.data)
            if(newRes.data.status == true){
                sessionStorage.setItem("cookieResto", JSON.stringify(newRes.data))

                setTimeout(()=>{
                    navigate("/homeResto");
                },2000)
            }else{
                navigate("/login");
            }
            
        })
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
               
                <p>Connectez votre restaurant</p>
                <Form onSubmit={submitDataLog}  className="p-2">
                    <Form.Group  className="mb-3" >
                        <Form.Label >
                        Numéro
                        </Form.Label>
                       
                        <Form.Control type="number"  name="numero" id="numero" placeholder="0708889205" />
                        
                    </Form.Group>

                    <Form.Group  className="mb-3" >
                        <Form.Label >
                        Password
                        </Form.Label>
                        <Form.Control type="password" name="password" id="password" placeholder="Password" />
                    </Form.Group>
                    <Row className="m-1">
                        <Col sm={6} md={6} lg={6}>
                            <Link>Mot de passe oublié?</Link>
                        </Col>
                        <Col sm={6} md={6} lg={6}>
                            <Link to="/createResto">Créer un compte</Link>
                        </Col>
                    </Row>
                    <Button type="submit"  >Connexion</Button>
                </Form>
                <p>{result?result.message:""}</p>
                </div>
            
       </Container>
    )
}
export default Login