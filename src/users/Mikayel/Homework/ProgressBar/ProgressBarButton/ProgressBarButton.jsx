import { useRef, useState } from 'react';
import axios from 'axios';
import './ProgressBarButton.scss';
import Users from '../Users/Users';

export default function ProgressBarButton() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [comleted, setCompleted] = useState(false);
  const [showStopButton, setShowStopButton] = useState(false);
  const [users, setUsers] = useState([]);
  const intervalRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };

  const handleClick = () => {
    setProgress(0);
    setLoading(true);
    setShowStopButton(true);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          clearInterval(interval);
          setLoading(false);
          setShowStopButton(false);
          setCompleted(true)
          fetchData();
          return 0;
        }
      });
    }, 500);
    intervalRef.current = interval;
  };

  const handleStopClick = () => {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    setLoading(false);
    setShowStopButton(false);
  };

  return (
    <div>
      <div className="progress-button-container">
        <button className={`progress-button ${loading ? 'loading' : ''} ${comleted ? 'completed' : ''}`} onClick={handleClick}>
          {loading ? 'Loading...' : (`${comleted ? 'Completed' : 'Get users'}`)}
        </button>
        {loading && <div className="progress-bar" style={{ width: `${progress}%` }}></div>}
      </div>
      <div className="progress-button-container">
        {showStopButton && (
          <button
            className="stop-button"
            onClick={handleStopClick}
          >
            Stop
          </button>
        )}
      </div>
      {users.length > 0 && <Users users={users} />}
    </div>
  )
}
