import { Route, Routes } from "react-router-dom";

import "./App.css";
import Accueil from "./pages/Accueil";
import Projet from "./pages/Projet";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Inscription />} /> */}
        <Route path="/admin/:userid" element={<Accueil />} />
        <Route path="/admin/projet" element={<Projet />} />
        <Route path="/admin/profil" element={<Projet />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
      </Routes>
    </div>
  );
}

export default App;
