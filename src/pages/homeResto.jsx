import NavbarMenu from "./navbarMenu"
import logo from '../assets/ph.jpg'
import { Container, Row,Col,Image, Button,Table,Badge  } from "react-bootstrap";
import Menu from "./menu";
import { useState, useEffect } from 'react';
import axios from "axios"

function HomeResto() {
   
    return(
        <>
        <NavbarMenu/>
            <Container fluid>
                <Row>
                    <Col lg={2} sm={12} md={12} className="barreMenu">
                        <Menu />
                    </Col>
                    <Col lg={10}>
                        <Row className="p-1 ">
                            <Col lg={12}>
                                <h5>Liste commande encours</h5>
                            </Col>
                            <Col lg={12}>
                                <Table responsive="sm" className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <td>
                                            <Button variant="outline-warning">Valider</Button>{' '}
                                            <Button variant="outline-danger">Annuler</Button>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="outline-warning">Valider</Button>{' '}
                                            <Button variant="outline-danger">Annuler</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="outline-warning">Valider</Button>{' '}
                                            <Button variant="outline-danger">Annuler</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="outline-warning">Valider</Button>{' '}
                                            <Button variant="outline-danger">Annuler</Button>
                                        </td>   
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col lg={12}>
                                <h5>Liste commande validée encours de livraison</h5>
                            </Col>
                            <Col lg={12}>
                                <Table responsive="sm" className="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <th>Table heading</th>
                                        <td>
                                        <Badge bg="info">Encours</Badge>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Badge bg="info">Encours</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>  
                                        <td>
                                            <Badge bg="info">Encours</Badge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Badge bg="info">Encours</Badge>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default HomeResto