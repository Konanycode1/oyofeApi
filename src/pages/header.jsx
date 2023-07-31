import './css/header.css'
import { Container } from 'react-bootstrap'
import CarouselAcc from './carousel'
function Header() {
    return (
        <>
         <Container fluid className='nav'>
            <div className='header'>
                <div className="logo">
                    <p className='ds'></p>
                    <h2>ôyofê</h2>
                </div>
                <div className='menu'>
                <ol>
                    <li><a href="#" className="btn">Facebook</a></li>
                    <li><a href="#" className="btn">Instagram</a></li>
                    <li><a href="#" className="btn">Twitter</a></li>
                </ol>
                </div>
            </div>
        </Container>
        {/* <Container fluid>
            <CarouselAcc  />
        </Container> */}
        </>
       
        
    )
}
export default Header