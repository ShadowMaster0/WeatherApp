import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import "./App.css";
import WeeklyWeather from "./Components/WeeklyWeather";
import MonthlyWeather from "./Components/MonthlyWeather";

function App() {
  return (
    <div id="root">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<WeeklyWeather />} /> */}
          {/* <Route path="/" element={<MonthlyWeather />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;