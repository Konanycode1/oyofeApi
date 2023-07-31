import Carousel from 'react-bootstrap/Carousel';
import plat1 from "../assets/plat1.jpeg"
import plat2 from "../assets/plat2.jpeg"
import plat3 from "../assets/plat3.jpeg"

function CarouselAcc() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src={plat1}
            alt="First slide"
            />
        <Carousel.Caption>
          <h3>Nos plats authentiquement Africain</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img
            className="d-block w-100"
            src={plat2}
            alt="First slide"
            />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img
            className="d-block w-100"
            src={plat3}
            alt="First slide"
            />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAcc;