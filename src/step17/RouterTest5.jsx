import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Search } from "./pages/Search";
import { About2 } from "./pages/About2";
import { AboutDetails } from "./pages/AboutDetails";


export function RouterTest5() {

  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | 
        <Link to="/user/1">사용자</Link> | 
        <Link to="/search/?query=football">검색</Link> | 
        <Link to="/about">도움말</Link> | 
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About2 />}>
          <Route path="details" element={<AboutDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}