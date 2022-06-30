import { Route, Routes } from "react-router-dom";

import "./App.css";

import Projet from "./pages/Projet";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Inscription />} /> */}
        <Route path="/accueil/:userId" element={<Accueil />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/users/:userId/projet/:projectId" element={<Projet />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
      </Routes>
    </div>
  );
}

export default App;
