import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react'
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import store, { persistor } from './app/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<h2>loading...</h2>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
