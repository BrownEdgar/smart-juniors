import ReactDOM from 'react-dom/client';
import App from './redux/redux (extra reedux)/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/redux (extra reedux)/app/store';



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>
);
