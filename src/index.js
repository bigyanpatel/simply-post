import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";
import { Provider } from "react-redux";
import store from "./store/store";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
