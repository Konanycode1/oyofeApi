import { Container, Col,Row, Form, Button } from "react-bootstrap"
import {Link,useNavigate} from "react-router-dom"
import './css/accueil.css'
import { useState } from "react";
function CreateClient(){

    let [result, setResult] = useState();
    let navigate = useNavigate(null);
    

    function submitDataClient(e) {
            e.preventDefault()
            let valeur = new FormData();
            valeur.append('nomClient',e.target.querySelector("#nomClient").value);
            valeur.append('localisation',e.target.querySelector("#localisation").value);
            valeur.append('numero',e.target.querySelector("#numero").value);
            valeur.append('ville',e.target.querySelector("#ville").value);
            valeur.append('email',e.target.querySelector("#email").value);
            valeur.append('image',e.target.querySelector("#image").files[0]);
            valeur.append('password',e.target.querySelector("#password").value);

            fetch("http://localhost:3000/api/client/", {
                    method: "POST",
                    body: valeur
            })
            .then((res)=> res.json())
            .then((newRes)=>{
                    setResult(newRes)
                    if(newRes.status == true){
                            navigate('/loginClient')
                    }
            } )
            .catch((e)=> console.log(e))
            
    }


    return (
       <Container className="d-flex justify-content-center align-content-center p-5">
            <div className="contentForCreat" >
                <Link to="/" className="link">
                    <div className="logo">
                            <p className='ds'></p>
                            <h2>ôyofê</h2>
                    </div>
                </Link>
               
                <p>Crée votre compte et passé vos commande</p>
                <Form  className="p-2" onSubmit={submitDataClient} encType="multipart/form-data">
                    <Row>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                    Nom & Prénom
                                    </Form.Label>
                                    <Form.Control type="text" id="nomClient" placeholder="Votre nom et prenom" name="nomResto" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                    Localisation
                                    </Form.Label>
                                    <Form.Control type="text" id="localisation" placeholder="cocody" name="localisation" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                   Numero
                                    </Form.Label>
                                    <Form.Control type="number" id="numero" name="numero" placeholder="0708889205" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                   Ville
                                    </Form.Label>
                                    <Form.Control type="text" id="ville" name="ville"  placeholder="Abidjan, Soubre" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                   Email
                                    </Form.Label> 
                                    <Form.Control type="email" id="email" name="email"  placeholder="exemple@gmail.com" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                        Une image de vous
                                    </Form.Label>
                                    <Form.Control type="file" id="image" name="image"   />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                       <Form.Group  className="mb-3">
                            <Form.Label >
                            Password
                            </Form.Label>
                            <Form.Control type="password" id="password" placeholder="Password" />
                        </Form.Group>
                       </Col>
                    </Row>
                    
                    <Row className="m-1">
                        <Col sm={8} md={6} lg={8}>
                            <Link to="/loginClient">Vous avez déjà un compte ?, connectez-Vous </Link>
                        </Col>
                        <Col sm={4} md={6} lg={4}>
                        <Button type="submit" >Enregistrer maintenant</Button>
                        </Col>
                    </Row>

                </Form>
                    <p>{result?result.message:""}</p>
                </div>
            
       </Container>
    )
}
export default CreateClient