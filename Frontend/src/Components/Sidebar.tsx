import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoFootball } from "react-icons/io5";
import { SiChessdotcom } from "react-icons/si";
import { PiPaintBrushFill } from "react-icons/pi";
import { PiTreeEvergreenFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { AiFillTrophy } from "react-icons/ai";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  const [selected, setSelected] = useState(0);
  console.log(openSidebar);
  return (
    <div className="fixed h-screen w-20 flex flex-col items-center justify-between bg-black">
      <div className="flex flex-col items-start gap-4 p-4">
        <div
          className={`${openSidebar ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiOutlineMenuAlt1 />
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(0)}>
          <div
            className={`${selected === 0 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <IoFootball />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(1)}>
          <div
            className={`${selected === 1 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <FaPersonSwimming />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(2)}>
          <div
            className={`${selected === 2 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <MdHealthAndSafety />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(3)}>
          <div
            className={`${selected === 3 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <SiChessdotcom />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(4)}>
          <div
            className={`${selected === 4 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <PiPaintBrushFill />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(5)}>
          <div
            className={`${selected === 5 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <PiTreeEvergreenFill />
          </div>
        </div>
        <div className="flex items-center gap-4" onClick={() => setSelected(6)}>
          <div
            className={`${selected === 6 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}
          >
            <AiFillTrophy />
          </div>
        </div>
      </div>
      <div
        className="flex items-center gap-4 p-4"
        onClick={() => setSelected(7)}
      >
        <div
          className={`${selected === 7 ? "bg-grayA text-white" : "bg-grayB text-grayC"} w-12 h-12 rounded-full flex items-center justify-center text-xl`}
        >
          <IoIosNotifications />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
