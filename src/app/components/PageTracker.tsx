import React from "react";

export default function PageTracker() {
  return (
    <div className="w-[438px] py-14 flex flex-col align-center">
      <div className="flex flex-row justify-between items-center z-10">
        <div className="w-5 h-5 rounded-full bg-[#FFA724] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFFFFF99]"></div>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#FFA724] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFFFFF99]"></div>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#FFA724] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFFFFF99]"></div>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#FFA724] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFFFFF99]"></div>
        </div>
        <div className="w-5 h-5 rounded-full bg-[#6D6D6D] flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-[#FFFFFF99]"></div>
        </div>
      </div>
      <div className="h-1 w-[97%] pl-[11px] relative top-[-12px] bg-[#6D6D6D]">
        <div className="h-1 w-3/4 bg-[#FFA724]"></div>
        {/* <div className="h-1 w-full bg-[#FFA724]"></div> */}
      </div>
    </div>
  );
}
