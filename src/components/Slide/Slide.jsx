import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { getSlideProducts } from '../../features/slickSlide/slickSlideSlice';
import './Slide.scss';

export default function Slide() {
	const data = useSelector(getSlideProducts);

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: 4,
	};
	return (
		<div className="Slide">
			<h3 className="Slide-titleTop">Our you have to buy</h3>
			<h2 className="Slide-titleBottom">Product</h2>
			<Slider {...settings}>
				{data.map((product) => {
					return (
						<div className={`Slide-product ${product.name}`} id="product" key={product.id}>
							<div className="Slide-imgWrapper">
								<img src={product.image} alt={product.name} />
							</div>
							<div className="textInfo">
								<h3 className="Slide-productName">{product.name}</h3>
								<h5 className="Slide-productPrice">${product.price}</h5>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
