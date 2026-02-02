import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recommendations from './pages/Recommendations';
import SecondHand from './pages/SecondHand';
import Offers from './pages/Offers';
import PriceAlert from './pages/PriceAlert';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="recommendations" element={<Recommendations />} />
        <Route path="second-hand" element={<SecondHand />} />
        <Route path="offers" element={<Offers />} />
        <Route path="price-alert" element={<PriceAlert />} />
      </Route>
    </Routes>
  );
}

export default App;
