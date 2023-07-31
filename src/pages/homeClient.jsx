import logo from '../assets/ph.jpg'
import { Container, Row,Col,Image, Button, Navbar, Nav,Card, Badge } from "react-bootstrap"
import { BsPower,BsFillBarChartFill,BsFillBasket2Fill,BsStar } from "react-icons/bs";
import { useState, useEffect } from 'react';
import MenuClient from './menuClient';
import url from './url'

function HomeClient() {
    let postApi = `${url}api/readForAll/`
    const [allPost, setAllpost] = useState([]);
   
    let colors ="red";
    let[ compte, setCompte ]= useState(0);
    let [dataCom, setDataCom] =useState([]);
    
    // let cookie = JSON.parse(sessionStorage.getItem("cookieResto"))
    let nmbr = ()=>  setCompte(compte + 1);
     function commadePost(e){
        nmbr()
       const tabCom = e.target.getAttribute("idPost")
       setDataCom((dataCo)=> [...dataCo, tabCom])

       let dataSexion = JSON.parse(localStorage.getItem("dataCom"));
       if(dataSexion != null){
            dataSexion.push(tabCom);
           localStorage.setItem("dataCom",JSON.stringify(dataSexion))
       }
       else{
            let val =[]
            val.push(tabCom)
               localStorage.setItem("dataCom",JSON.stringify(val))
           
       }
        
 
    }
  console.log(dataCom)
  
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
                    <Nav variant="tabs" defaultActiveKey="/homeClient">
                        <Nav.Item>
                            <Nav.Link href="/homeClient">Action</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/historique">Historique</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link href='/panier'>
                                <BsFillBasket2Fill />
                                <Badge bg="secondary">{dataCom.length}</Badge>
                            </Nav.Link>
                            
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >
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
                            <Col lg={12} className='d-flex justify-content-center align-items-center'>
                                <Row>
                                    {
                                        allPost.map(item => {
                                            return (
                                                <Col lg={3} sm={6} className='p-1 colDIv'  key={item._id} >
                                                <Card style={{ width: '16rem' }}>
                                                    {/* <Card.Img variant="top" src={item.image.split("3000")[0]+`5173`+item.image.split("3000")[1]} /> */}
                                                    <Card.Img variant="top" src={item.image}/>
                                                    <Card.Body>
                                                        <Card.Title key={item.plat}>{item.plat}</Card.Title>
                                                        <Card.Text>
                                                        {item.libelle}
                                                        </Card.Text>
                                                        <Row>
                                                        <Col lg={12} sm={12}>
                                                                <p>Montant: {item.montant} Fr Cfa</p>
                                                            </Col>
                                                            <Col lg={4} sm={4}>
                                                                <p><BsStar variant='red' style={{color:'red', fontSize:'.8rem'}} /><BsStar variant='red' style={{color:'red', fontSize:'.8rem'}} /> <BsStar variant='red' style={{color:'red', fontSize:'.8rem'}}  /></p>
                                                            </Col>
                                                            <Col lg={4} sm={4}>
                                                                 <p><BsFillBarChartFill className='coul'  />2</p>
                                                            </Col>
                                                            <Col lg={4} className='btnP' sm={4}>
                                                                <Button idPost={item._id} variant="warning" onClick={commadePost}>panier</Button>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            )
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
export default HomeClient