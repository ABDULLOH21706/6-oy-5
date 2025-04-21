import { useState } from "react";
import "../index.css";

function Main() {
  return (
    <main>
      <div className="flex items-center justify-between w-full h-[100px] pr-[30px]">
        <div></div>
        <div class="search-container">
          <input type="text" placeholder="Search" class="search-input" />
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
          <button class="mic-button">
            <i class="fas fa-microphone"></i>
          </button>
        </div>
        <div className="flex items-center justify-center gap-[25px]">
          <div className="flex items-center justify-center gap-[20px]">
            <div className="w-[30px] cursor-pointer">
              <img src={create_live} alt="" draggable="false" />
            </div>
            <div className="w-[30px] cursor-pointer">
              <img src={more} alt="" draggable="false" />
            </div>
            <div className="w-[30px] cursor-pointer">
              <img src={qongiroq} alt="" draggable="false" />
            </div>
          </div>
          <div className="w-[35px] cursor-pointer">
            <img src={profile} alt="" draggable="false" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
