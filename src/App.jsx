import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Product";
import Effect from "./pages/Effect";

const App = () => {
  return (
    <>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          listStyle: "none",
          margin: 30,
        }}
      >
        <li style={{ margin: "0 20px ", fontSize: 30 }}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li style={{ margin: "0 20px ", fontSize: 30 }}>
          <NavLink to="/effect">Effect</NavLink>
        </li>
        <li style={{ margin: "0 20px ", fontSize: 30 }}>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/about" element={<h1>About page</h1>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
