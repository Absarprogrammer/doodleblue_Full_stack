import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import {ThemeProvider} from './context/ThemeContext.jsx'
import App from "./App.jsx";
import Users from "./users.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />        
        <Route path="/contact" element={<Contact />} />        
        <Route path="/user" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);