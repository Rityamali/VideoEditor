import React, { useState } from "react";
import { FilePlus, Video, Radio } from "lucide-react";
import CameraComponent from "./CameraAsses";

const dashLink = [
  {
    name: "Create Project",
    icons: FilePlus,
  },
  {
    name: "Record Video",
    icons: Video,
  },
  {
    name: "Go Live",
    icons: Radio,
  },
];





function Dashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleClick =(index)=>{
    setActiveIndex(index)
    
    if(index == 1){
      console.log("recording");
      
      const getCameraStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
        }
      };
  
      // getCameraStream()
      
    }
  }
  return (
    <>
      <div className="flex flex-col">
        <div className=" block py-12 px-12 ms-7 font-bold text-2xl ">
          <h2>Dashboard</h2>
        </div>

        <div className="flex flex-between">
          <div className="inline-block ms-7">
            <div className="">
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div className=" mt-3 ms-3 ms-5 overflow-hidden ">
            <img
              className="inline h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>

        {/* horizontal rows for record  */}

        <div className="flex flex-row space-x-8 mt-5 ms-7">
          {dashLink.map((item, index) => (
            <div
              key={index}
              className={
                "flex space-x-3 p-2 rounded" +
                (activeIndex === index ? " bg-cyan-500 font-semibold" : "")
              }
              onClick={()=>handleClick(index)}
            >
              <item.icons />
              <span className="">{item?.name}</span>
            </div>
          ))}
        </div>

        <h2 className="mt-7 ms-7 text-cyan-500 text-xl font-bold">My Videos</h2>

          <div className="flex flex-row">
        <div class=" w-50 mt-7 h-50 ms-7 bg-white shadow-md rounded-md overflow-hidden">
            <div class="p-4  ">
              <h2 class="text-lg font-semibold mb-2">Video Title</h2>
              <p class="text-gray-600">Description </p>
            </div>
          </div>
        <div class=" w-50 mt-7 h-50 ms-7 bg-white shadow-md rounded-md overflow-hidden">
            <div class="p-4  ">
              <h2 class="text-lg font-semibold mb-2">Video Title</h2>
              <p class="text-gray-600">Description </p>
            </div>
          </div>
          <div class=" w-50 mt-7 h-50 ms-7 bg-white shadow-md rounded-md overflow-hidden">
            <div class="p-4 ">
              <h2 class="text-lg font-semibold mb-2">Video Title</h2>
              <p class="text-gray-600">Description </p>
            </div>
          </div>
        </div>
      </div>




      
    </>
  );
}

export default Dashboard;
