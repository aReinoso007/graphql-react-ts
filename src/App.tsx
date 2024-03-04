import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharacterPage from "./Pages/Character-page";
import HomePage from "./Pages/Home-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<CharacterPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
