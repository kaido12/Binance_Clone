import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";

function Sidebar({ sidebar }) {
  return (
    <div className="container relative">
      <div className="relative w-full">
        <div className="nav-menu">
          <ul className="nav-menu-items">            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        
      </div>
    </div>
  );
}

export default Sidebar;
