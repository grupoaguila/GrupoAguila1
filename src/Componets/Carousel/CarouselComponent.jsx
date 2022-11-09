import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import './carousel.css'

function CarouselComponent() {
  return (
    <>
      <h4 className="carouselTitleCompanies">Confían en nosotros: </h4>
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