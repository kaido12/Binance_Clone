import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
// import { useState } from "react";
import Footer from "./components/Footer";
// import "./style/Footer.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  // const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  console.log("HI");
  return (
    <>
      <AuthContextProvider>
        {/* <div className="mainContentContainer"> */}
          <Header  />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        {/* </div>         */}
      </AuthContextProvider>
    </>
  );
}

export default App;
