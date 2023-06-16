import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import MyApp from "./MyApp";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import SiswaInput from "./Componen/Function/SiswaInput";
import Pendaftaran from "./Componen/Function/Pendaftaran";
import NavbarApp from "./NavbarApp";
import Jasa from "./Componen/Function/Jasa";
import HomePage from "./Componen/Function/HomePage";
import Kelas from "./Componen/Function/Kelas";
import Form from "./Form";
import EditModal from "./EditModal";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Form />
    <App />
    {/* <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/pendaftaran" element={<Pendaftaran />}></Route>
        <Route exact path="/kelas" element={<Kelas />}></Route>
      </Routes>
    </BrowserRouter> */}
  </StrictMode>
);
