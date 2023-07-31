import { Container, Row,Col,ListGroup , Button, Navbar, Nav,Card, Badge } from "react-bootstrap"
import { BsPower,BsFillBagCheckFill,BsFillBellFill,BsXCircle,BsFillBasket2Fill } from "react-icons/bs";
import { useState,useEffect } from 'react';
import MenuClient from './menuClient';
function Panier(){
    let postApi = "http://localhost:3000/api/readForAll/"
    const [allPost, setAllpost] = useState([]);
    const [commd, setCommd] = useState()
   
    let panier = JSON.parse(localStorage.getItem('dataCom')) 
    useEffect(()=>{
        fetch(postApi, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
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
    }, []);

    function pan(allPost,panier){
        let recup ;
        if( panier.length !=0){
            panier.map((item)=>{
                console.log(item)
                let panierG = allPost.filter((ele)=>ele._id === item)
                recup = panierG
            }) 
           return recup
        }
    }
    const rep = pan(allPost,panier);
    // console.log(rep)
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
                    <Nav variant="tabs" defaultActiveKey="/panier">
                        <Nav.Item>
                            <Nav.Link href="/homeClient">Action</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/historique">Historique</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link href="/panier">
                                <BsFillBasket2Fill />
                                <Badge bg="secondary">{panier?.length}</Badge>
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
                        <MenuClient />
                    </Col>
                    <Col lg={10}>
                        <Row className="">
                            <Col lg={12} className='d-flex justify-content-center align-items-center p-2'>
                                <h5>Menu African</h5>
                            </Col>
                            <Col lg={12} className=''>
                                <Row>
                                    <Col lg={7}>
                                        {
                                            rep?
                                            <ListGroup as="ul">
                                                <ListGroup.Item as="li" active>
                                                    Liste de Commande
                                                </ListGroup.Item>
                                                {
                                                    rep.map((ele)=>{
                                                        return (
                                                            <ListGroup.Item as="li" key={ele._id}>
                                                                <Row>
                                                                    <Col lg={4} sm={4}>{ele.plat}</Col>
                                                                    <Col lg={4} sm={4}>{ele.libelle}</Col>
                                                                    <Col lg={4} sm={4}>{ele.montant}</Col>
                                                                </Row>
                                                            </ListGroup.Item>
                                                        )
                                                    })
                                                }
                                                
                                            </ListGroup>: <p>Pas de commande</p>
                                        }
                                       
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                       
                    </Col>
                </Row>
               
            </Container>

        </>
    )

}
export default Panier