import { useState } from "react";
import "../index.css";
import menu from "../assets/menu.svg";
import youtube from "../assets/youtube.svg";
import home from "../assets/home.svg";
import explore from "../assets/explore.svg";
import shorts from "../assets/shorts.svg";
import subscriptions from "../assets/subscription.svg";
import library from "../assets/library.svg";
import history from "../assets/history.svg";
import your_videos from "../assets/your_video.svg";
import watch_later from "../assets/watch_later.svg";
import liked_videos from "../assets/liked_videos.svg";
import show_more from "../assets/show_more.svg";
import subscribe1 from "../assets/subscribe1.svg";
import subscribe2 from "../assets/subscribe2.svg";
import subscribe3 from "../assets/subscribe3.svg";
import subscribe4 from "../assets/subscribe4.svg";
import subscribe5 from "../assets/subscribe5.svg";
import subscribe6 from "../assets/subscribe6.svg";
import subscribe7 from "../assets/subscribe7.svg";
import profile from "../assets/profile.svg";
import qongiroq from "../assets/qongiroq.svg";
import more from "../assets/more.svg";
import create_live from "../assets/create_live.svg";
import thumbnail from "../assets/thumbnail.png";
import profile2 from "../assets/profile.png";

function Header() {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <header className="w-[100%] flex items-start j\ustify-center">
        <div className="flex flex-col items-center justify-center w-[300px] gap-[28px]">
          <div className="flex items-center justify-start gap-[18px] w-[100%] pt-[16px] pb-[16px] pl-[20px]">
            <div className="w-[20px] cursor-pointer">
              <img src={menu} alt="" draggable="false" />
            </div>
            <div className="w-[95px] cursor-pointer">
              <img src={youtube} alt="" draggable="false" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-[100%]">
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={home} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Home
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={explore} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Explores
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={shorts} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Shorts
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={subscriptions} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Subscriptions
              </p>
            </div>
          </div>
          <hr className="text-[#383838] w-[80%]" />
          <div className="flex flex-col items-center justify-center w-[100%]">
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={library} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Library
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={history} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                History
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={your_videos} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Your videos
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={watch_later} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Watch later
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={liked_videos} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Liked videos
              </p>
            </div>
            <div className="flex items-center justify-start gap-[20px] cursor-pointer hover:bg-[#383838] pl-[20px] pt-[5px] pb-[5px] w-[100%]">
              <div className="w-[30px]">
                <img src={show_more} alt="" draggable="false" />
              </div>
              <p className="text-white text-[16px] font-[400] hover:font-[600] w-[100%]">
                Show more
              </p>
            </div>
          </div>
          <hr className="text-[#383838] w-[80%]" />
          <div className="flex flex-col items-center justify-center w-[100%] gap-[10px]">
            <p className="text-[#AAAAAA] text-[16px] font-[600] pl-[20px] w-[100%]">
              SUBSCRIPTIONS
            </p>
            <div className="subscribe_scroll flex flex-col items-center justify-start gap-[10px] w-[100%] h-[380px] pl-[20px] overflow-x-auto">
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe1} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Nadir On The Go
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe2} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Coke Studio Bangla
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe3} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">MKBHD</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe4} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">Figma</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe5} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  ATC Android ToTo C...
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe6} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">Alux.com</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe7} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Satish K Videos
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe1} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Nadir On The Go
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe2} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Coke Studio Bangla
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe3} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">MKBHD</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe4} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">Figma</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe5} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  ATC Android ToTo C...
                </p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe6} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">Alux.com</p>
              </div>
              <div className="flex items-center justify-start gap-[5px] w-[100%] cursor-pointer">
                <div className="w-[25px]">
                  <img src={subscribe7} alt="" draggable="false" />
                </div>
                <p className="text-white text-[15px] font-[400]">
                  Satish K Videos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex flex-col items-center justify-center">
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
          <div className="flex flex-col items-center justify-center gap-[12px]">
            <div className="w-[100%] flex items-center justify-center gap-[12px]">
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                All
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Cook Studio
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                UX
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Case Study
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Music
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Bnagla Lofi
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Tour
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Saintmartin
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Tech
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                iPhone 13
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                User Interface Design
              </button>
              <button className="hover:text-black hover:bg-white text-white bg-[#383838] border-[1px] border-[#474747] rounded-[25px] pt-[8px] pb-[8px] pl-[12px] pr-[12px]">
                Computer Programming
              </button>
            </div>
          </div>
          <div>6
            <div className="flex items-center justify-center gap-[14px] mt-[20px]">
              <div className="flex flex-col items-center justify-center gap-[10px] w-[330px]">
                <div className="w-[100%]">
                  <img src={thumbnail} alt="" draggable="false" />
                </div>
                <div className="flex items-start justify-center gap-[10px]">
                  <div className="w-[100px]">
                    <img src={profile2} alt="" draggable="false" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[7px]">
                    <p className="text-white text-[18px] font-[600]">
                      Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X
                      Nandita
                    </p>
                    <div className="flex flex-col items-start justify-center w-[100%]">
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        Coke Studio Bangla
                      </p>
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        1.5 M views 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] w-[330px]">
                <div className="w-[100%]">
                  <img src={thumbnail} alt="" draggable="false" />
                </div>
                <div className="flex items-start justify-center gap-[10px]">
                  <div className="w-[100px]">
                    <img src={profile2} alt="" draggable="false" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[7px]">
                    <p className="text-white text-[18px] font-[600]">
                      Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X
                      Nandita
                    </p>
                    <div className="flex flex-col items-start justify-center w-[100%]">
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        Coke Studio Bangla
                      </p>
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        1.5 M views 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] w-[330px]">
                <div className="w-[100%]">
                  <img src={thumbnail} alt="" draggable="false" />
                </div>
                <div className="flex items-start justify-center gap-[10px]">
                  <div className="w-[100px]">
                    <img src={profile2} alt="" draggable="false" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[7px]">
                    <p className="text-white text-[18px] font-[600]">
                      Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X
                      Nandita
                    </p>
                    <div className="flex flex-col items-start justify-center w-[100%]">
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        Coke Studio Bangla
                      </p>
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        1.5 M views 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[10px] w-[330px]">
                <div className="w-[100%]">
                  <img src={thumbnail} alt="" draggable="false" />
                </div>
                <div className="flex items-start justify-center gap-[10px]">
                  <div className="w-[100px]">
                    <img src={profile2} alt="" draggable="false" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[7px]">
                    <p className="text-white text-[18px] font-[600]">
                      Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X
                      Nandita
                    </p>
                    <div className="flex flex-col items-start justify-center w-[100%]">
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        Coke Studio Bangla
                      </p>
                      <p className="text-[#AAAAAA] text-[14px] font-[400]">
                        1.5 M views 2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
