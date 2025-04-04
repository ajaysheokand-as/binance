import Assets from "./pages/Assets";
import HomeScreen from "./pages/HomeScreen";
import { Routes, Route } from "react-router-dom";
import SpotDeposit from "./pages/SpotDeposit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Assets" element={<Assets />} />
        <Route path="/spot-deposit" element={<SpotDeposit />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
