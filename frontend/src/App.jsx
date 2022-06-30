import "./App.css";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </div>
  );
}

export default App;
