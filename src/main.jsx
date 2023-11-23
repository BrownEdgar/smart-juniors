import ReactDOM from 'react-dom/client';
import App from './HW redux/App';
import './index.css';
import store from './HW redux/store'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store = {store}> 
    <App />
</Provider>
);
