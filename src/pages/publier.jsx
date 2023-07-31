import { useEffect, useState } from 'react';
import { Container, Row,Col, Button, Navbar, Nav,Form, Table, Alert} from "react-bootstrap"
import { BsPower } from "react-icons/bs";
import Menu from './menu';
import url from './url'


function Publier() {
    const [show, setShow] = useState(false);
    let [varia, setVaria] = useState("danger")
    const [allPost, setAllpost] = useState([])
    let cookie = JSON.parse(sessionStorage.getItem("cookieResto"))
    let api = url+"api/poste/"
    let postApi = url+"api/postAll/"
    function submitDataPub(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("plat", e.target.querySelector("#plat").value)
        formData.append("libelle", e.target.querySelector("#libelle").value)
        formData.append("montant",  e.target.querySelector("#montant").value)
        formData.append("image", e.target.querySelector("#image").files[0])

        fetch(api,{
            method: "POST",
            body:formData,
            headers:{
                "authorization": `token ${cookie.token}`
            }
        })
        .then((res)=> res.json())
        .then((response)=> {
            if(response.status == true ){
                setShow(true)
                setVaria("success")
            }
        })
        .catch((e)=>{
            console.log(e)
        }) 
    }

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

    console.log(allPost)
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
                    <Nav variant="tabs" defaultActiveKey="/publier">
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
                            <Col lg={12}>
                                {
                                    show?
                                        <Alert variant={varia} onClose={() => setShow(false)} dismissible>
                                        <Alert.Heading>Oh yeah! que c&apos;est beau!</Alert.Heading>
                                            <p>Votre publication a été bien et belle ajoutée</p>
                                        </Alert>:""
                                   
                                }
                               
                            </Col>
                            <Col lg={12} className='d-flex justify-content-center align-items-center p-2'>
                                <h5>Publier un plat</h5>
                               
                            </Col>
                            <Col lg={12} className='d-flex justify-content-center align-items-center'>
                               
                                <Form  className="sizeForm" onSubmit={submitDataPub} encType="multipart/form-data">
                                        <Row>
                                            <Col lg={6}>
                                                    <Form.Group  className="mb-3">
                                                            <Form.Label >
                                                            Nom du plat
                                                            </Form.Label>
                                                            <Form.Control type="text"  id="plat" placeholder="nom du plat" name="plat" />
                                                    </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                    <Form.Group  className="mb-3" >
                                                            <Form.Label >
                                                            Description
                                                            </Form.Label>
                                                            <Form.Control type="text" id="libelle"  placeholder="description" name="libelle" />
                                                    </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                    <Form.Group  className="mb-3" >
                                                            <Form.Label >
                                                        Montant
                                                            </Form.Label>
                                                            <Form.Control type="number" name="montant" id='montant' placeholder="1000" />
                                                    </Form.Group>
                                            </Col>
                                            <Col lg={4}>
                                                    <Form.Group  className="mb-3"  >
                                                            <Form.Label >
                                                                Une image du plat
                                                            </Form.Label>
                                                            <Form.Control type="file" id='image' name="image"   />
                                                    </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="m-1">
                                            <Col sm={4} md={6} lg={4}>
                                            <Button type="submit" >Publier</Button>
                                            </Col>
                                        </Row>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                    <Table responsive="sm" className="table table-borderless">
                                                <thead>
                                                <tr>
                                                    <th>Plat</th>
                                                    <th>Description</th>
                                                    <th>Montant</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        allPost.map(item=>{
                                                           return (
                                                           <tr>
                                                                <td >{item.plat}</td>
                                                                <td >{item.libelle}</td>
                                                                <td >{item.montant}</td>
                                                                <td><Button type='button' variant='outline-success'>Details</Button></td>                                                            </tr>
                                                            );
                                                        })
                                                    }
                                               
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
export default Publier