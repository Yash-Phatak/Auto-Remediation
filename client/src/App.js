import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screen/Home.jsx'
import Chat from './screen/Chat.jsx'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/chat" element={<Chat />} /> 
          </Routes>
        </div>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
