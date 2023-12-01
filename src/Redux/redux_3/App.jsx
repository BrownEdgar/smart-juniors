import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './app/store';
import UserRegistrationForm from './components/UserRegistrationForm/UserRegistrationForm';
import UserTable from './components/UserTable/UserTable';
import TodoSection from './components/TodoSection/TodoSection';
import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-container">
          <div className="flex-container">
            <UserRegistrationForm />
            <TodoSection />
          </div>
            <UserTable />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
