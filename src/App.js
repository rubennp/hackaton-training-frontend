import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Registre from './pages/Registre';
import Login from './pages/Login';
import Locals from './pages/Locals';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="locals-actius" element={<Locals actius/>} />
        <Route path="locals-buits" element={<Locals />} />
        <Route index element={<Home />} />
        <Route path="registre" element={<Registre />} />
        <Route path="login" element={<Login />} />

      </Route>
    </Routes>
  );
};

export default App;