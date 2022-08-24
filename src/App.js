
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/LayoutPage";
import "./App.css";

function App() {
  return (
    <div className="app"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} /> 
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


