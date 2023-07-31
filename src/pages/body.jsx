import plat1 from "../assets/plat1.jpg"
import ph from "../assets/ph.jpg"
import { AiOutlineFire, AiTwotoneDislike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {Button , Card, Image, Row, Col, Container, Stack} from "react-bootstrap"
import couscous from "../assets/couscous.jpeg"
import Jollof from "../assets/jollof.jpg"
import mafe from "../assets/Le mafé.jpg"
import tajine from "../assets/Leajine.jpeg"
import ndole from "../assets/ndole.jpeg"
import konkonde from "../assets/kon.jpeg"

function Body(){
let navigate = useNavigate()

    function pathInLog() {
        navigate('/login')   
    }
    function pathInCli() {
        navigate('/loginClient')
    }
    

    return (
        <Container fluid className="bodyB">
           
            <Container>
                <Row>
                    <Col lg={6} sm={12} xs={6} >
                    <h1 className="titleBlo">ôyofê, Votre plateforme qui vous propose que les Meilleurs plat de l&apos;Afrique dont vous avez la possibilité de commander</h1>
                    <Button className="btns">Commencer</Button>
                    </Col>
                    <Col lg={6} xs={6} className="">
                    <img src={plat1} alt="" className="imgBloc"  />
                    </Col>
                </Row>
            </Container>
            <Container  fluid className="p-2" style={{marginBottom:'1rem',marginTop:'1rem'}}>
                    <Row>
                        <Col lg={12} className="d-flex justify-content-center align-items-center">
                            <h1> Quelque Plats disponible</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="p-2">
                                <Card.Img variant="top" src={mafe} />
                                <Card.Body>
                                    <Card.Title>Le mafé </Card.Title>
                                    <Card.Text>
                                    Le mafé est un plat typique du Sénégal qui allie une viande généralement blanche à une préparation
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }}  className="p-2">
                                <Card.Img variant="top" src={tajine} />
                                <Card.Body>
                                    <Card.Title>Le tajine </Card.Title>
                                    <Card.Text>
                                    Assorti de sa garniture de carottes fondantes, ce plat mijoté résolument aromatique recouvrira avec délice un dôme de semoule.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="p-2">
                                <Card.Img variant="top" src={Jollof} />
                                <Card.Body>
                                    <Card.Title>Le succulent riz Jolof </Card.Title>
                                    <Card.Text>
                                    Avec son arôme séduisant, sa couleur rouge profond et sa saveur épicée, le Jollof est la reine incontestée des cuisines d'Afrique de l'Ouest
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="p-2">
                                <Card.Img variant="top" src={couscous} />
                                <Card.Body>
                                    <Card.Title>L'authentique couscous </Card.Title>
                                    <Card.Text>
                                    L’AUTHENTIQUE COUSCOUS DE NINA ACCOMPAGNÉ D’UN SAUTÉ DE POULET À LA MAROCAINE
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="p-2">
                                <Card.Img variant="top" src={ndole} />
                                <Card.Body>
                                    <Card.Title>Le Ndole</Card.Title>
                                    <Card.Text>
                                    Il est fait à base de plantes amères appelés Ndole (d’où son nom) mais aussi d’un mélange de noix cuites, de poisson, de boeuf et/ou de crevettes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card style={{ width: '18rem' }} className="p-2">
                                <Card.Img variant="top" src={konkonde} />
                                <Card.Body>
                                    <Card.Title>Le konkonde</Card.Title>
                                    <Card.Text>
                                    Il est fait à base de plantes amères appelés Ndole (d’où son nom) mais aussi d’un mélange de noix cuites, de poisson, de boeuf et/ou de crevettes. On le mange souvent avec des bananes plantains.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
            <Container className=" p-2 ">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={12} sm={12}>
                        <h2>Annonces </h2>
                    </Col>
                    <Col lg={4} sm={12} className="">
                        <Card style={{width:'20rem',}} text="black" >
                            <Card.Header style={{ backgroundColor:'#feb345'}}>
                                <Row>
                                    <Col xl={4} xs={4} md={4}>
                                    <Image className="img" src={ph}  roundedCircle />
                                    </Col>
                                    <Col xl={6} xs={8} md={8}>
                                        <h4>Abraham konan</h4>
                                        <p>Abidjan, cocody</p>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Infoline</Card.Title>
                                <Card.Text>
                                    Vous disposez de Meilleur plat Africain
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor:'#2C2C2C', color:'white'}} >
                                <Row>
                                    <Col lg={4} >
                                        <AiOutlineFire /> 160
                                    </Col>
                                    <Col lg={4}>
                                        <FcLike /> 2000
                                    </Col> 
                                    <Col>
                                    <AiTwotoneDislike /> 10
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12} className="">
                        <Card style={{width:'20rem' }} text="black" >
                            <Card.Header style={{backgroundColor:'#feb345'}}>
                                <Row>
                                    <Col xl={4} xs={4} md={4}>
                                    <Image className="img" src={ph}  roundedCircle />
                                    </Col>
                                    <Col xl={6} xs={8} md={8}>
                                        <h4>Koné ZORO</h4>
                                        <p>Abidjan, cocody</p>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Infoline</Card.Title>
                                <Card.Text>
                                    Merci pour la valorisation de notre culture
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor:'#2C2C2C', color:'white'}} >
                                <Row>
                                    <Col lg={4}>
                                        <AiOutlineFire /> 160
                                    </Col>
                                    <Col lg={4}>
                                        <FcLike /> 2000
                                    </Col> 
                                    <Col>
                                    <AiTwotoneDislike /> 10
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12} className="">
                        <Card style={{width:'20rem' }} text="black" >
                            <Card.Header style={{backgroundColor:'#feb345'}}>
                                <Row>
                                    <Col xl={4} xs={4} md={4}>
                                    <Image className="img" src={ph}  roundedCircle />
                                    </Col>
                                    <Col xl={6} xs={8} md={8}>
                                        <h4>Diara Mamadou</h4>
                                        <p>Abidjan, cocody</p>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Infoline</Card.Title>
                                <Card.Text>
                                    Grace votre plateforme j'ai pu manger le KabaTo de mon village
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ backgroundColor:'#2C2C2C', color:'white'}} >
                                <Row>
                                    <Col lg={4}>
                                        <AiOutlineFire /> 160
                                    </Col>
                                    <Col lg={4}>
                                        <FcLike /> 2000
                                    </Col> 
                                    <Col>
                                    <AiTwotoneDislike /> 10
                                    </Col>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} sm={12} className="p-3">
                        <Row>
                            <Col lg={4} sm={4}>
                                <h2>+120</h2>
                                <p>RestaurantS</p>
                            </Col>
                            <Col lg={4} sm={4}>
                                <h2>+1000</h2>
                                <p>Clients</p>
                            </Col>
                            <Col lg={4} sm={4}>
                                <h2>+200</h2>
                                <p>Plats Africain</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} sm={12}>
                                <p>Cliquez pour créer un compte</p>
                            </Col>
                        </Row>
                        <Stack gap={2} direction="horizontal">
                            <Button variant="info" style={{color:'white'}} onClick={pathInLog}> Resto</Button>
                            <Button variant="warning" style={{color:'white'}} onClick={pathInCli}>Clients</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            <Container className="bg-secondary">
                <Row>
                    <Col lg={12} className="d-flex justify-content-center align-items-center">
                        <p>KonanyCode @ 2023</p>
                    </Col>
                </Row>
            </Container>
        </Container>
       
    )
}
export default Body