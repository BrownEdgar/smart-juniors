import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store, { persistor } from './users/Karen/Redux-Homework/app/store'
import App from './users/Karen/Redux-Homework/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <PersistGate  loading={<h2>Loading...</h2>} persistor={persistor}>
   <App />
  </PersistGate>
</Provider>
);
