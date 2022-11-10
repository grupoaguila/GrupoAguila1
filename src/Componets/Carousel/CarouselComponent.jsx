import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import './carousel.css'

function CarouselComponent() {
  return (
    <>
      <p className="carouselTitleCompanies">Confían en nosotros: </p>
      <Carousel variant="dark" className='mainCarousel'>

        <Carousel.Item>
          {/* 1 */}
        </Carousel.Item>


        <Carousel.Item>
          {/* 2 */}
        </Carousel.Item>

        <Carousel.Item>
          {/* 3 */}
        </Carousel.Item>

        <Carousel.Item>
          {/* 4 */}
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselComponent