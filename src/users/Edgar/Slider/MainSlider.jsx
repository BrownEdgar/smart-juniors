import Slider from "react-slick";

import './MainSlider.scss'
import { useState } from 'react';

export default function MainSlider() {
  const [data, setData] = useState([
    { id: 1, title: 'Lorem ipsum', image: './public/lamp.png', price: 123 },
    { id: 1, title: 'Lorem ipsum dolor sit.', image: './public/lamp.png', price: 123 },
    { id: 1, title: 'Lorem ipsum dolor sit.', image: './public/lamp.png', price: 123 },
    { id: 1, title: 'Lorem ipsum dolor sit.', image: './public/lamp.png', price: 123 },
    { id: 1, title: 'Lorem ipsum dolor sit.', image: './public/lamp.png', price: 123 },
    { id: 1, title: 'Lorem ipsum dolor sit.', image: './public/lamp.png', price: 123 },
  ])


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2>Product</h2>
      <Slider {...settings}>
        {
          data.map(slide => {
            return (
              <div className='slide-lamp' key={slide.id}>
                <img src={slide.image} alt={slide.title} />
                <div className="content">
                  <h4>{slide.title}</h4>
                  <p>$ {slide.price}</p>
                </div>

              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
