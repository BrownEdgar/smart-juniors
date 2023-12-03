import React, { useState } from 'react'
import Slider from "react-slick";
import './MainSlider.scss'

export default function MainSlider() {
    const [data, setData] = useState([
        {id: 1, title: 'Lorem ipsum dolor sit', image:'./public/profile-image-1.jpg', price: '10$'},
        {id: 2, title: 'Lorem ipsum dolor sit', image:'./public/profile-image-2.jpg',  price: '20$'},
        {id: 3, title: 'Lorem ipsum dolor sit', image:'./public/profile-image-3.jpg', price: '35$'},
        {id: 4, title:'Lorem ipsum dolor sit' , image:'./public/profile-image-4.jpg', price:'40$'},
        {id: 5, title:'Lorem ipsum dolor sit' , image:'./public/profile-image-5.jpg', price:'60$'}
    ])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      return (
        <div className='maindiv'>
          <h3>Our you have to buy</h3>
          <h2> Product</h2>
          <Slider {...settings}>
           {
            data.map(slide => {
                return(
                    <div className='slide-image' key={slide.id}>
                        <img src={slide.image} alt={slide.title} />
                        <h4>{slide.title}</h4>
                        <h5>{slide.price}</h5>
                    </div>
                )
            })
           }
          </Slider>
        </div>
      )
}
