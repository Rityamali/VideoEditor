import React, { useState } from "react";
import {
  LayoutDashboard,
  HomeIcon,
  BookImageIcon,
  Plus,
  MoveRight,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "New Video ",
    icons: Plus,
  },
  {
    name: "Home",
    icons: HomeIcon,
  },
  {
    name: "Templates",
    icons: LayoutDashboard,
  },
  {
    name: "All Videos",
    icons: BookImageIcon,
  },
];

const variants = {
  expanded : {width : "25%"},
  nonExpanded : {width : "5%"}
}

function NavigationBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded , setIsExpanded] = useState(true)

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={" py-12 flex flex-col border border-r-1  w-1/5 h-screen relative" + (isExpanded ? " px-10" : " px-[0.5px]")}
    >
      <div className="logo-div flex space-x-3 items-center ">
        <span>LOGO</span>
      </div>

      <div onClick={(()=>setIsExpanded(!isExpanded))} className="w-5 h-5 bg-cyan-500 rounded-full absolute -right-[9.5px] top-12 flex items-center justify-center">
        <MoveRight className="w-4" />
      </div>

      <div className="flex flex-col space-y-8  mt-9">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded" +
              (activeIndex === index ? " bg-cyan-500 font-semibold" : "")
            }
            onClick={() => setActiveIndex(index)}
          >
            <item.icons />
            <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
