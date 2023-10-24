

import { useState } from 'react';
import Content from './components/Content/Content';
import LoadingScreen from './components/LoadingScreen/NoDataScreen';
import './App.scss';

export default function App() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Wes', year: 1988 },
    { id: 2, name: 'Kait', year: 1986 },
    { id: 3, name: 'Irv', year: 1970 },
    { id: 4, name: 'Lux', year: 2015 },
  ]);

  return (
    <div className="App">
      {
        people.length > 0
          ? <Content people={people} setPeople={setPeople} />
          : <LoadingScreen />
      }
    </div>
  );
}
