import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUsers } from "../../features/users/usersSlice";
import { useEffect } from "react";

import "./Slides.scss"

export default function Slides() {
  const users = useSelector(getAllUsers)
  const dispatch = useDispatch()

  console.log(users);

  useEffect(() => {
    dispatch(getUsers({
      url: "https://dummyjson.com/users",
      config: {
        params: {
          limit: 50
        }
      }
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='Slides'>
      <h1>Reviews from Our Clients</h1>
      <div className="Slides-client">OUR CLIENT SAYS</div>
      <Slider {...settings}>
        {
          users.map(user => (
            <div key={user.id} className="Slides-content">
              <div className="Slides-content_imgBox">
                <img src={user.image} alt="" />
              </div>
              <div className="Slides-content_user">
                <h2>{`${user.firstName} ${user.lastName}`}</h2>
                <p>Age: {user.age}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
                <p>IP Address: {user.ip}</p>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
