import logo from '../assets/ph.jpg'
import { Container, Row,Col,Image, Button, Navbar, Nav,Card } from "react-bootstrap"
import { BsPower,BsFillRocketFill,BsFillRocketTakeoffFill,BsFillCartCheckFill } from "react-icons/bs";
import {useState, useEffect} from "react"
import Menu from './menu';
import url from './url'
function Vues() {
    let postApi = `${url}api/postAll/`
    
    const [allPost, setAllpost] = useState([])
    let cookie = JSON.parse(sessionStorage.getItem("cookieResto"))
    useEffect(()=>{
        fetch(postApi, {
            method: "GET",
            headers:{
                "authorization":`token ${cookie.token}`,
            }
        })
        .then((res)=> res.json())
        .then((val)=>{
            if(val.status == true){
                setAllpost(val.message)
            }
            else{
                 setAllpost([])
            }          
        })
        .catch((e)=> console.log(e.message))
    }, [])
    return(
        <>
            <Container fluid className="Menu">
            <Navbar expand="xl" className="bg-body-tertiary">
                <Container>
                    <div className="logo">
                        <p className='ds'></p>
                        <h2>ôyofê</h2>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav variant="tabs" defaultActiveKey="/vues">
                        <Nav.Item>
                            <Nav.Link href="/homeResto">All Acitivité</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/publier">Publier</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/vues" >
                            Vue
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                <BsPower />
                            </Nav.Link>
                            
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                   
                </Container>
            </Navbar>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={2} sm={12} md={12} className="barreMenu">
                        <Menu/>
                    </Col>
                    <Col lg={10}>
                        <Row className="">
                            <Col lg={12} className='d-flex justify-content-center align-items-center p-2'>
                                <h5>Mon plat </h5>
                            </Col>
                            <Col lg={12} >
                                <Row>
                                    {
                                         

                                            allPost.map(item=>{
                                                console.log(item.image.split("3000")[0]+`5173`+item.image.split("3000")[1])
                                               return (
                                                <Col lg={3} sm={6} className='p-1' key={item._id}>
                                                <Card style={{ width: '18rem' }}>
                                                    {/* <Card.Img variant="top" src={item.image.split("3000")[0]+`5173`+item.image.split("3000")[1]} /> */}
                                                    <Card.Img variant="top" src={item.image}/>
                                                    <Card.Body>
                                                        <Card.Title>{item.plat}</Card.Title>
                                                        <Card.Text>
                                                            {item.libelle}
                                                        </Card.Text>
                                                        <Row>
                                                            <Col lg={4} sm={4}>
                                                                <p><BsFillRocketFill /> 2</p>
                                                            </Col>
                                                            <Col lg={4} sm={4}>
                                                                 <p><BsFillRocketTakeoffFill  />2</p>
                                                            </Col>
                                                            <Col lg={4} sm={4}>
                                                                <p><BsFillCartCheckFill/> {item?.commande.length}</p>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                                );
                                            })
                                        
                                    }
                                </Row>
                            </Col>
                        </Row>
                       
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}
export default Vues