import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ZingChart from "./pages/zingchart";
import Top from "./pages/top";
import Default from "./layout/Default";
import PlayListDetail from "./pages/playlistDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Default>
              <Home />
            </Default>
          }
        />
        <Route
          path="/zingchart"
          element={
            <Default>
              <ZingChart />
            </Default>
          }
        />
        <Route
          path="/top"
          element={
            <Default>
              <Top />
            </Default>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <Default>
              <PlayListDetail />
            </Default>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
