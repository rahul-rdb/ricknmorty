import CharList from "./components/CharList";
import CharPage from "./components/CharPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen px-16 bg-gray-800">
      <Routes>
        <Route path="/" element={<CharList />} />
        <Route path="/:id" element={<CharPage />} />
      </Routes>
    </div>
  );
}

export default App;
