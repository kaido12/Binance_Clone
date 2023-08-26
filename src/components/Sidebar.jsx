import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";

function Sidebar() {
  return (
    <>
      <div className="hidden md:contents relative">
        <div className="flex  justify-center lg:w-[200px] md:w-[180px] top-[30x] left-0 bg-slate-100">
          <ul className="w-full flex-col">
            {SidebarData.map((item, index) => (
              <div className="flex flex-col">
                <li key={index} className="flex flex-col  items-center py-2 px-4 md:px-0 h-16">
                  <Link
                    to={item.path}
                    className=" text-black text-md w-[95%] h-full flex items-center px-4 md:px-6 hover:bg-yellow-500 hover:rounded-lg"
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
