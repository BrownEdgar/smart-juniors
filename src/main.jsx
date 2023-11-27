import ReactDOM from 'react-dom/client';
import App from './Redux/redux_1/App';
import { Provider } from "react-redux";
import './index.css';
import store from './Redux/redux_1/app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
