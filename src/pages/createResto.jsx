import { Container, Col,Row, Form, Button } from "react-bootstrap"
import {Link, useNavigate} from "react-router-dom"
import './css/accueil.css'

import {useState} from "react"
function CreateResto(){
        let [result, setResult] = useState();
        let navigate = useNavigate(null);
        

        function submitData(e) {
                e.preventDefault()
                let valeur = new FormData();
                valeur.append('nomResto',e.target.querySelector("#nomResto").value);
                valeur.append('localisation',e.target.querySelector("#localisation").value);
                valeur.append('numero',e.target.querySelector("#numero").value);
                valeur.append('ville',e.target.querySelector("#ville").value);
                valeur.append('libelle',e.target.querySelector("#libelle").value);
                valeur.append('heureOuvre',e.target.querySelector("#heureOuvre").value);
                valeur.append('heureFerme',e.target.querySelector("#heureFerme").value);
                valeur.append('image',e.target.querySelector("#image").files[0]);
                valeur.append('password',e.target.querySelector("#password").value);

                console.log(valeur.get("image"))
                console.log(valeur.get("nomResto"))
                // val
                // let cori = Object.fromEntries(valeur.entries())
                // console.log(cori)
                // let {image, ...val} = cori
                // setData({image,...val})

                fetch("http://localhost:3000/api/resto/", {
                        method: "POST",
                        body: valeur
                })
                .then((res)=> res.json())
                .then((newRes)=>{
                        setResult(newRes)
                        if(newRes.status == true){
                                navigate('/login')
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
               
                <p>Enregistrer votre restaurant</p>
                <Form  className="p-2" onSubmit={submitData} encType="multipart/form-data">
                        
                    <Row>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                    Nom du restaurant
                                    </Form.Label>
                                    <Form.Control type="text" id="nomResto" placeholder="Ivoire resto" name="nomResto" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                    Localisation
                                    </Form.Label>
                                    <Form.Control type="text" id="localisation" placeholder="cocody" name="localisation" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                   Numero
                                    </Form.Label>
                                    <Form.Control type="number" id="numero" name="numero" placeholder="0708889205" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                   Ville
                                    </Form.Label>
                                    <Form.Control type="text" name="ville" id="ville"  placeholder="Abidjan, Soubre" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                   Vos preference
                                    </Form.Label>
                                    <Form.Control type="text" name="libelle" id="libelle"  placeholder="spécialité" />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                  Heure open
                                    </Form.Label>
                                    <Form.Control type="time" id="heureOuvre" name="heureOuvre"  />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3" >
                                    <Form.Label >
                                  Heure close
                                    </Form.Label>
                                    <Form.Control type="time" id="heureFerme" name="heureFerme"   />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                            <Form.Group  className="mb-3"  >
                                    <Form.Label >
                                        Logo
                                    </Form.Label>
                                    <Form.Control type="file" id="image" name="image"   />
                            </Form.Group>
                       </Col>
                       <Col lg={4}>
                       <Form.Group  className="mb-3" >
                            <Form.Label >
                            Password
                            </Form.Label>
                            <Form.Control type="password" name="password"  id="password" placeholder="Password" />
                        </Form.Group>
                       </Col>
                    </Row>
                    
                    <Row className="m-1">
                        <Col sm={8} md={6} lg={8}>
                            <Link to="/login">Vous avez déjà un compte ?, connectez-Vous </Link>
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
export default CreateResto