import './App.css';
import { Provider } from "./components/ui/provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './views/layout/Header';

import NotFound from './views/NotFound';
import Pages from './views/Pages';



function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
