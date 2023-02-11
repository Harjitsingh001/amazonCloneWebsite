import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './SttateProvider';
import {initialState} from "./Reducer"
import reducer from './Reducer';
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>
);