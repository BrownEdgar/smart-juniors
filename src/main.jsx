import ReactDOM from 'react-dom/client';
import App from './redux/redux_1/App';
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/redux_1/app/store';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
);
