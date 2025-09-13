import React from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom"; 

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
      
      {/* Home */}
      <div
        onClick={() => navigate("/")}  
        className="bg-[#121212] h-[60px] rounded-md flex items-center gap-3 px-6 cursor-pointer hover:text-green-500 transition"
      >
        <img className="w-6" src={assets.home_icon} alt="home_icon" />
        <p className="font-bold">Home</p>
      </div>

      {/* Search */}
      <div
        onClick={() => navigate("/search")}  
        className="bg-[#121212] h-[60px] rounded-md flex items-center gap-3 px-6 cursor-pointer hover:text-green-500 transition"
      >
        <img className="w-6 h-6" src={assets.search_icon} alt="search_icon" />
        <p className="font-bold">Search</p>
      </div>

      {/* Your Library */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          

          {/* Library title */}
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="library_icon" />
            <p className="font-bold">Your Library</p>
          </div>
          
          {/* Add Playlist (arrow & plus icons) */}
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.arrow_icon} alt="arrow_icon" />
            <img className="w-8" src={assets.plus_icon} alt="plus_icon" />
          </div>
        </div>

        {/* Create Playlist */}
        <div className="p-4 bg-[#212121] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy, we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        {/* Podcasts Section */}
        <div className="p-4 bg-[#212121] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's find some podcasts to follow</h1>
          <p className="font-light">We'll keep you updated with the new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
