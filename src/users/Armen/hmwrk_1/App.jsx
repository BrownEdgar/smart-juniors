// const people = [
// 	{ id: 1, name: 'Wes', year: 1988 },
// 	{ id: 2, name: 'Kait', year: 1986 },
// 	{ id: 3, name: 'Irv', year: 1970 },
// 	{ id: 4, name: 'Lux', year: 2015 }
//   ];

//   տրված Օբյեկտը պահել state -ի մեջ և նկարել էջում։
//   Ստեղծել կոճակ, որի վրա սեղմելուց հետո, այն կսորտավորվի ըստ `year` դաշտի (աճմակ կարգով)
//   Կազմակերպել նաև ջնջելու գործողությունը, ըստ փոխանցած id-ի, Այսինքն X կոճակ լինի ամեն մեկի վերևի անկյունում որի վրա եթե ես սեղմեմ, այն կջնջվի նաև state -ից , հետևաբար նաև էջից։
//   Ստեղծել կոճակ, որի վրա սեղմելուց հետո, Օբյեկտի բոլոր անդամների համար կավելանա "isActive" նոր հատկությունը "true" արժեքով։

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
			{people.length > 0 ? <Content people={people} setPeople={setPeople} /> : <LoadingScreen />}
		</div>
	);
}
