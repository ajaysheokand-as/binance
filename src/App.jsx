import Assets from "./pages/Assets";
import HomeScreen from "./pages/HomeScreen";
import { Routes, Route } from "react-router-dom";
import SpotDeposit from "./pages/SpotDeposit";
import History from "./pages/History";
// import Deposit from './pages/Deposit'
import CryptoWalletWithdraw from "./pages/CryptoWalletWithdraw";
import SelectCoin from "./pages/SelectCoin";
import USDT from "./pages/Usdts";
import Funding from "./pages/Funding";
import Trade from "./pages/Trade";
import WithdrawalDetails from "./pages/WithdrawalDetails";
import CryptoTransfer from "./pages/CryptoTransfer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Assets" element={<Assets />} />
        <Route path="/spot-deposit" element={<SpotDeposit />} />
        <Route path="/withdrawal" element={<History/>} />
        <Route path="/withdrawal/:id" element={<WithdrawalDetails/>} />
        <Route path="/CryptoWalletWithdraw" element={<CryptoWalletWithdraw/>} />
        <Route path="/selectCoin" element={<SelectCoin/>} />
        <Route path="/transfer" element={<CryptoTransfer/>} />
        <Route path="/trade" element={<Trade/>} />
        <Route path="/USDT" element={<USDT/>} />
        <Route path="/funding" element={<Funding/>} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default App;
