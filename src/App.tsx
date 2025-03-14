import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Starter React - Typescript - Tailwind
      </h1>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">About</h1>
    </div>
  );
};

export default App;
