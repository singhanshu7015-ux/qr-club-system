import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MemberPage from "./MemberPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member/:id" element={<MemberPage />} />
    </Routes>
  );
}

export default App;