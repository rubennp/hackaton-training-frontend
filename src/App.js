import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import Registre from './pages/Registre';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="registre" element={<Registre />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;