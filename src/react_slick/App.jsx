import "./css/slick.css";
import "./css/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProducts } from "./features/products/productsSlice";
import { useLayoutEffect } from "react";
import "./App.scss"

export default function App() {
  const products = useSelector(getAllProducts)
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(getProducts("https://dummyjson.com/products"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true
  };

  return (
    <>
    <h1>Product</h1>
    <Slider {...settings}>
      {
        products.map(product => {
          return (
            <div key={product.id}>
              <div>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <h2>{product.title}</h2>
              <p>&#36;{product.price}</p>
            </div>
          )
        })
      }
    </Slider>
    </>
  );
}
