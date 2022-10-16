import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
import "./components/Dashboard/NewMessage/style.scss";
import {AuthContextProvider} from "./components/Dashboard/NewMessage/Context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        position='top-right'
      />
      <App />
    </BrowserRouter>
    </AuthContextProvider>,
  document.getElementById('root')
);