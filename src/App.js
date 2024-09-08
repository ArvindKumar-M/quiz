import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import "./App.css";
import Question from './components/question';
import Result from './components/result';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
