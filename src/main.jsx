import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import store, { persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <PersistGate loading = {<h2>Loading...</h2>} persistor = {persistor}>
     <App />
    </PersistGate>
    
</Provider>);
