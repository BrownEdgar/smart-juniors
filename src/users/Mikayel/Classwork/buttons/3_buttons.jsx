import { useState } from 'react';
import './3_buttons.scss';

export default function ButtonComponent() {
  const [lastClicked, setLastClicked] = useState('A');
  
  const handleButtonClick = (buttonName) => {
    setLastClicked(buttonName);
  };

  return (
    <div className='ButtonComponent'>
      <h1>{lastClicked}</h1>
      <div className="button-container">
        <button
          className={lastClicked === 'A' ? 'active' : ''}
          onClick={() => handleButtonClick('A')}
        >
          A
        </button>
        <button
          className={lastClicked === 'B' ? 'active' : ''}
          onClick={() => handleButtonClick('B')}
        >
          B
        </button>
        <button
          className={lastClicked === 'C' ? 'active' : ''}
          onClick={() => handleButtonClick('C')}
        >
          C
        </button>
      </div>
    </div>
  )
}
