import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import anub from "./media/photos/Anub.jpg";
import DW from "./media/photos/Deathwing.jpg";
import grommash from "./media/photos/Grommash.jpg";
import illidan from "./media/photos/Illidan.jpg";
import jaraxxus from "./media/photos/jaraxxus.jpg";
import kel from "./media/photos/Kel.jpg"
import lichK from "./media/photos/Lich.jpg";
import rexxar from "./media/photos/Rexxar.jpg";
import sylv from "./media/photos/Sylvannas.jpg";
import thrall from "./media/photos/Thrall.jpg";
import uther from "./media/photos/uther.jpg";
import ysera from "./media/photos/Ysera.jpg"

const IMAGES = {
  anub: anub,
  deathwing: DW,
  grommash: grommash,
  illidan: illidan,
  jaraxxus: jaraxxus,
  kel: kel,
  lichKing: lichK,
  rexxar: rexxar,
  sylvanas: sylv,
  thrall: thrall,
  uther: uther,
  ysera: ysera,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default IMAGES;