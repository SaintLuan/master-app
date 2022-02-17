import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages";

import './styles/App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
