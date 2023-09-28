import { Provider } from 'react-redux'
import './App.css'
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './components/reducers';
import { Form } from './components/Form';
//import { ReactReduxContext } from 'react-redux'
//import { useContext } from 'react';

//const { store } = useContext(ReactReduxContext);
const store = configureStore({ reducer });

//function App() {
const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  )
}

export default App
