import { Container, Nav, Navbar } from "react-bootstrap"
import { BsPower } from "react-icons/bs";
import './css/accueil.css'

function NavbarMenu(){
    return (
       <Container fluid className="Menu">
            <Navbar expand="xl" className="bg-body-tertiary">
                <Container>
                    <div className="logo">
                        <p className='ds'></p>
                        <h2>ôyofê</h2>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav variant="tabs" defaultActiveKey="/homeResto">
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
    )
}
export default NavbarMenu
