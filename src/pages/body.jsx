import plat1 from "../assets/plat1.jpg"
import ph from "../assets/ph.jpg"
import { AiOutlineFire, AiTwotoneDislike} from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import {Button , Card, Image, Row, Col, Container, Stack} from "react-bootstrap"
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
            <Container className=" p-2 ">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col lg={4} sm={12} className="">
                        <Card style={{width:'20rem', backgroundColor:'#37c27d'}} text="white" >
                            <Card.Header>
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
                            <Card.Footer>
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
                        <Card style={{width:'20rem', backgroundColor:'#feb345'}} text="white" >
                            <Card.Header>
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
                            <Card.Footer>
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
                    <Col lg={4} sm={12}>
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
                        <Stack gap={2} direction="horizontal">
                            <Button variant="info" style={{color:'white'}} onClick={pathInLog}> Resto</Button>
                            <Button variant="warning" style={{color:'white'}} onClick={pathInCli}>Clients</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
                
                
           
            
        </Container>
       
    )
}
export default Body