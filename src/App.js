import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { useState } from "react";
import Footer from "./Components/Footer";
import "./style/Footer.css";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  console.log("HI");
  return (
    <>
      <BrowserRouter>
        <div className="mainContentContainer">
          <Header showSidebar={showSidebar} />
          <Routes>
            <Route path="/" sidebar={sidebar} element={<Home />} />
          </Routes>
        </div>
        <div className="bottomFooter">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
