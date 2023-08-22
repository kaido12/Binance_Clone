import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

import Footer from "./components/Footer";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthContextProvider } from "./context/AuthContext";

import SingleCoin from "./components/SingleCoin";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";

function App() {

  const [isToShow, setToShow] = useState(true)

  useEffect(() =>{
    showHeaderFooter();
  },[])

  const showHeaderFooter = () =>{
    const pathName = window.location.pathname;
    if(pathName =='/signup' || pathName == "/login" ){
     setToShow(false)
    }
  }
  
  return (
    <>
      <AuthContextProvider>
        {/* <div className="mainContentContainer"> */}
        {isToShow && <Header />}
        
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
        {isToShow && <Footer />}
    
        {/* </div>         */}
      </AuthContextProvider>
    </>
  );
}

export default App;
