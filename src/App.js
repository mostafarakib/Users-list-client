import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
