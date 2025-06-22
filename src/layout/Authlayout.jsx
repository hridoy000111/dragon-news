import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const Authlayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <header className="py-3 w-11/12 mx-auto">
        <NavBar></NavBar>
      </header>

      <Outlet></Outlet>
    </div>
  );
};

export default Authlayout;
