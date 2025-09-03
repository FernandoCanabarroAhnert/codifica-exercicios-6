import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CssGlobal from './pages/01-css-global/CssGlobal';
import CssModules from './pages/02-css-modules/CssModules';
import Tailwind from './pages/03-tailwind/Tailwind';
import StyledComponents from './pages/04-styled-components/StyledComponents';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/css-global" />} />
          <Route path="/css-global" element={<CssGlobal />} />
          <Route path="/css-modules" element={<CssModules />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/styled-components" element={<StyledComponents />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
