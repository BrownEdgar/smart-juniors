import { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewSlider.scss'

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? people.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === people.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <div className="review-slider">
        <h1>Reviews from Our Clients</h1>
        <span className='orange-line'>Orange line</span><span>OUR CLIENT SAYS</span>
        <div className="review">
          <div className='review-image'>
            <img src={people[currentIndex]?.photo} alt={people[currentIndex]?.name} />
          </div>
          <div className="review-text">
            <div>
              <h2>{people[currentIndex]?.name}</h2>
              <h4>{people[currentIndex]?.profession}</h4>
            </div>
            <p>{people[currentIndex]?.review}</p>
            <div className="navigation">
              <button onClick={handlePrevClick}><i className="fa-solid fa-arrow-left"></i></button>
              <button onClick={handleNextClick}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
