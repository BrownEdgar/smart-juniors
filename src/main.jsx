import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './redux/redux_2/App';
import store from './redux/redux_2/app/store';

import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
);
