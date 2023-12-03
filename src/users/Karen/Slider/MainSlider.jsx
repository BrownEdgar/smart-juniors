import Slider from "react-slick";
import {useState} from "react";
import './MainSlider.scss'

export default function MainSlider() {
    const [data,
        setData] = useState([
        {
            id: 1,
            title: 'Detailing is a art',
            image: '../../../../public/car-detailing1.jpg',
            click: 'Click for more'
        }, {
            id: 2,
            title: 'Our best specialist',
            image: '../../../../public/car-detailing2.jpg',
            click: 'Click for more'
        }, {
            id: 3,
            title: 'Detailing process finish',
            image: '../../../../public/car-detailing3.jpg',
            click: 'Click for more'
        }, {
            id: 4,
            title: 'Interior detailing process',
            image: '../../../../public/car-detailing4.jpg',
            click: 'Click for more'
        }, {
            id: 5,
            title: 'Interior detailing process',
            image: '../../../../public/car-detailing5.jpg',
            click: 'Click for more'
        }
    ])

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    }
    return (
        <div className="BGimage">
            <h2>Car Detailing Service</h2>
            <div className="Service-text">
                <h3>About Us</h3>
                <p>We are recognized as one of the best in the industry by customers and dealers
                    for our Professional Auto Detailing Service. Our professional workers and our
                    dedication to superiority service have kept our customers coming back for their
                    entire future auto detailing needs. We also satisfy our customers 100% with the
                    environmental friendly products. If your vehicle needs to be cleaned, leave it
                    with us for any of the services we provide.</p>
            </div>
            <Slider {...settings}>
                {data.map(slide => {
                    return (
                        <div className="Slide-Detailing" key={slide.id}>
                            <img src={slide.image} alt={slide.title}/>
                            <h4>{slide.title}</h4>
                            <a href="/">{slide.click}</a>
                        </div>
                    )
                })
}
            </Slider>
        </div>
    );
}