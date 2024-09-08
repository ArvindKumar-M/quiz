import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Question from './components/question';
import Result from './components/result';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
