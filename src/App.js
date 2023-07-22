import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
// import { useEffect, useState } from "react";
import Footer from "./components/Footer";
// import "./style/Footer.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";
// import axios from "axios";
import SingleCoin from "./components/SingleCoin";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);

  // console.log("HI");
  return (
    <>
      <AuthContextProvider>
        {/* <div className="mainContentContainer"> */}
        <Header />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/coin" element={<SingleCoin />}>
            <Route path=":coinId" element={<SingleCoin />} />
          </Route>
        </Routes>
        <Footer />
        {/* </div>         */}
      </AuthContextProvider>
    </>
  );
}

export default App;
