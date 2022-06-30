import { Route, Routes } from "react-router-dom";

import "./App.css";
import Accueil from "./pages/Accueil";
import Projet from "./pages/Projet";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Inscription />} /> */}
        <Route path="/accueil/:userId" element={<Accueil />} />
        <Route path="/projet" element={<Projet />} />
        {/* <Route path="/profil" element={<Profil />} /> */}
      </Routes>
    </div>
  );
}

export default App;
