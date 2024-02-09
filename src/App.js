import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Navbar from "./assets/Navbar";
import User from "./components/Users/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
