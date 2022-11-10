import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./Components/pages/About";
import Home from "./Components/pages/Home";
import Contact from "./Components/pages/Contact";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";
import PageNotFound from "./Components/pages/PageNotFound";
import ViesUser from "./Components/users/ViewUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="/users/view/:id" element={<ViesUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
