import nanoid from 'nanoid'
import './App.css'
import React from 'react';
import { Provider, } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, } from './components/reducers';
import { Form } from './components/Form';

const store = configureStore({ reducer });

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
