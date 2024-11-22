import Sidebar from "../../Components/Sidebar";
import SubSidebar from "../../Components/SubSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom"; // Remove Router import as it's already wrapped globally

const Event = () => {
  // Initialize the state inside the component function
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main className="bg-black flex w-screen">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <SubSidebar openSidebar={openSidebar} />
      <Outlet />
    </main>
  );
};

export default Event;
