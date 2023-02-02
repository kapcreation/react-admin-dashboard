import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Single from './pages/Single/Single'
import New from './pages/New/New'
import { userInputs, productInputs } from './formSource';
import { useColorMode } from './contexts/ColorModeContext';
import { useEffect, useRef } from 'react';

function App() {  
  const appRef = useRef(null)
  const { colorModeRef } = useColorMode()
  
  return (
    <div ref={(el)=>{ appRef.current = el; colorModeRef.current = el }} className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add new user" />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add new product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
