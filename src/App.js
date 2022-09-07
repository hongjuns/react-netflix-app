
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {useSelector} from "react-redux";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Layout from "./pages/LayoutPage";
import Login from "./pages/LoginPage";
import "./App.css";

function App() {
  const token = useSelector(state => {
    console.log ("APP  User : " + state.user);
    console.log ("APP  token : " + state.token);
  })

  return (
    <div className="app"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} /> 
          <Route path="search" element={<SearchPage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


