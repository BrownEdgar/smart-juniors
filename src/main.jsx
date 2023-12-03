import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './react_slick/App';
import store from './react_slick/app/store';
// import { PersistGate } from 'redux-persist/integration/react'
// import {persistor} from "./redux/redux_4/app/store";

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>
);
