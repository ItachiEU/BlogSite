import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RecoilRoot} from "recoil";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <RecoilRoot>
        <App />
      </RecoilRoot>
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
