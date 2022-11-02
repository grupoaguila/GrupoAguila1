import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImagenAguila from '../../assets/bqb.png'
import metal from '../../assets/metal.jpeg'
import rio from '../../assets/rio.png'
import triunfo from '../../assets/triunfo.png'

import './carousel.css'

function CarouselComponent() {
  return (
   <> 
    <h2 className="carouselTitleCompanies">Nuestros Clientes</h2>
    <Carousel variant="dark" className='mainCarousel'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={ImagenAguila}
        alt="First slide"
        width= "250px"
      />
      <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={rio}
        alt="Second slide"
        width= "250px"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={metal}
        alt="Third slide"
        width= "250px"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={triunfo}
        alt="Third slide"
        width= "250px"
        height= '250px'
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </>
  )
}

export default CarouselComponent