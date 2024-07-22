import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <h2>홈</h2>
  );
}
const About = () => {
  return (
    <h2>도움말</h2>
  );
}

export function RouterTest1() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}