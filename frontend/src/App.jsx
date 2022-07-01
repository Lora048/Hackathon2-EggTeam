import { Route, Routes } from "react-router-dom";

import "./App.css";

import Inscription from "./pages/Inscription";
import Projet from "./pages/Projet";
import Accueil from "./pages/Accueil";
import Profil from "./pages/Profil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inscription />} />
        <Route path="/accueil/:userId" element={<Accueil />} />
        {/* <Route path="/projet" element={<Projet />} /> */}
        {/* <Route path="/accueil" element={<Accueil />} /> */}
        <Route path="/accueil/:userId/projet/:projectId" element={<Projet />} />
        <Route path="/accueil/:userId/profil" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
