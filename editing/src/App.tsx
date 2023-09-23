import nanoid from 'nanoid'
import './App.css'
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, IState } from './components/reducers';
import { addItem, deleteItem, updateItem } from './actions/actions';
import { Form } from './components/Form';

const store = configureStore({ reducer });

//function App() {
const App: React.FC = () => {
  return (
    <>
      {/* <div key={nanoid.random(7)} /> */}
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  )
}

export default App
