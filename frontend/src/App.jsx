import { Route, Routes } from "react-router-dom";
import Projet from "./pages/Projet";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Inscription />} /> */}
        {/* <Route path="/acceuil" element={<Acceuil />} /> */}
        <Route path="/projet" element={<Projet />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
      </Routes>
    </div>
  );
}

export default App;
