import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import anub from "./media/photos/Anub.jpg";
import DW from "./media/photos/Deathwing.jpg";
import grommash from "./media/photos/Grommash.jpg";
import cthun from "./media/photos/Cthun.jpg";
import jaraxxus from "./media/photos/jaraxxus.jpg";
import mord from "./media/photos/Mordresh.jpg"
import lichK from "./media/photos/Lich.jpg";
import alex from "./media/photos/Alex.jpg";
import sylv from "./media/photos/Sylvannas.jpg";
import alakir from "./media/photos/Alakir.jpg";
import tirion from "./media/photos/Tirion.jpg";
import ysera from "./media/photos/Ysera.jpg"

const IMAGES = {
  anub: anub,
  deathwing: DW,
  grommash: grommash,
  cthun: cthun,
  jaraxxus: jaraxxus,
  mord: mord,
  lichKing: lichK,
  alex: alex,
  sylvanas: sylv,
  alakir: alakir,
  tirion: tirion,
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