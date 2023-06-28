import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./pages/Home";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <BrowserRouter>
        <div className="App">
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
