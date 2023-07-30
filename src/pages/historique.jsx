import logo from '../assets/ph.jpg'
import { Container, Row,Col,Image, Button, Navbar, Nav,Card, Badge } from "react-bootstrap"
import { BsPower,BsFillBagCheckFill,BsFillBellFill,BsXCircle,BsFillBasket2Fill } from "react-icons/bs";
import { useState,useEffect } from 'react';
import MenuClient from './menuClient';
function Historique() {
    

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
                    <Nav variant="tabs" defaultActiveKey="/historique">
                        <Nav.Item>
                            <Nav.Link href="/homeClient">Action</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/historique">Historique</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link>
                                <BsFillBasket2Fill />
                                <Badge bg="secondary">2</Badge>
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
                        {/* <Container>
                            <p>Heure Open :
                            <Button variant="info" size="sm" disabled>
                                08h : 20 minute
                            </Button>
                            </p>

                        </Container>
                        <Container>
                            <p>Heure Close :
                            <Button variant="info" size="sm" disabled>
                                22h : 20 minute
                            </Button>
                            </p>

                        </Container> */}
                    </Col>
                    <Col lg={10}>
                        <Row className="">
                            <Col lg={12} className='d-flex justify-content-center align-items-center p-2'>
                                <h5>Menu African</h5>
                            </Col>
                            <Col lg={12} className=''>
                                <Row>
                                    <Col lg={6}>
                                        <Card style={{ width: '30rem' }}>
                                            <Card.Body>
                                                <Card.Title>COUSCOUS black</Card.Title>
                                                <Card.Text>
                                                Couscous Baoulé au jaune noire
                                                </Card.Text>
                                                <Row>
                                                    <Col lg={4}>
                                                        <p>Montant: 3000</p>
                                                    </Col>
                                                    <Col lg={4}>
                                                         <p>Date: 12/07/2023</p>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Button variant="danger">
                                                            <BsXCircle />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                
                                               
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={6}>
                                        <Card style={{ width: '30rem' }}>
                                            <Card.Body>
                                                <Card.Title>COUSCOUS black</Card.Title>
                                                <Card.Text>
                                                Couscous Baoulé au jaune noire
                                                </Card.Text>
                                                <Row>
                                                    <Col lg={4}>
                                                        <p>Montant: 3000</p>
                                                    </Col>
                                                    <Col lg={4}>
                                                         <p>Date: 12/07/2023</p>
                                                    </Col>
                                                    <Col lg={4}>
                                                        <Button variant="danger">
                                                            <BsXCircle />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                
                                               
                                            </Card.Body>
                                        </Card>
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
export default Historique