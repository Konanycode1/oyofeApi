import { useEffect, useState } from "react";
import { Row,Col,Image,Button,Container } from "react-bootstrap"

function Menu() {
    let api = "http://localhost:3000/api/restoId/"
    const cookie = JSON.parse(sessionStorage.getItem("cookieResto"));
    let [data, setData] = useState({})

    useEffect(()=>{
        const authen = async ()=> {
            fetch(api,{
                headers: {
                    "authorization":`token ${cookie.token}`,
                    "Content-Type":"application/json"
                },
                method: "GET"
            })
            .then((res)=> res.json())
            .then((response)=>{
                setData(response.message)
            })
            .catch((e)=> console.log(e))
        }
        authen()

    }, []);
    return(
        <>
            <Row  >
                            <Col lg={12} sm={12} md={12} className=" d-flex align-items-center justify-content-center p-2">
                            <Image src={data.image} className="myLogo" roundedCircle />
                            </Col>
                            <Col lg={12} sm={12} md={12} className=" d-flex align-items-center justify-content-center">
                                <h3>{data.nomResto}</h3>
                            </Col>
                            <Col lg={6} sm={4} md={4} className="p-1">
                                <Button variant="info" size="sm" disabled>
                                    Publier : 20
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={4}  className="p-1">
                                <Button variant="info" size="sm" disabled>
                                    Commande : 20
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={4} >
                                <Button variant="outline-primary" size="sm" disabled>
                                {data.numero}
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={4} >
                                <Button variant="outline-primary" size="sm" disabled>
                                {data.localisation} ,{data.ville}
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={4}  className="p-1">
                                <Button variant="outline-info" size="sm" disabled>
                                    Cmde validée 
                                </Button>
                            </Col>
                            <Col lg={6} sm={4} md={4}  className="p-1">
                                <Button variant="outline-info" size="sm" disabled>
                                    Plats publiés 
                                </Button>
                            </Col>
                        </Row>
                        <Container>
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

                        </Container>
        </>
    )
    
}
export default Menu