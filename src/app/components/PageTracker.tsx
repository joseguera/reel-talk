import React, { FC, useState, useEffect } from "react";

type PageProps = {
  pages: {
    pageId: number;
    back: string;
    next: string;
    progress: number;
  }[];
  pageCount: number;
}

const PageTracker: FC<PageProps> = ({ pages, pageCount }) => {

  const [barProgress, setBarProgress] = useState('w-0');
  const [currentPage, setCurrentPage] = useState('bg-[#FFFFFF99]');

  function getBarProgress() {
    if (pageCount === 1) {
      setBarProgress(prevProgress => prevProgress = "w-0");
    } else if (pageCount === 2) {
      setBarProgress(prevProgress => prevProgress = "w-1/4");
    } else if (pageCount === 3) {
      setBarProgress(prevProgress => prevProgress = "w-2/4");
    } else if (pageCount === 4) { 
      setBarProgress(prevProgress => prevProgress = "w-3/4");
    } else {
      setBarProgress(prevProgress => prevProgress = "w-full");
    }
  }

  useEffect(() => {
    getBarProgress();
  }, [pageCount, getBarProgress])

  console.log(barProgress)

  return (
    <div className="w-[438px] py-14 flex flex-col align-center">
      <div className="flex flex-row justify-between items-center z-10">
        {pages.map((page, idx) => {
          return (
          <div key={page.pageId} className={`w-5 h-5 rounded-full bg-[${pageCount >= idx+1 ? "#FFA724" : "#6D6D6D"}] flex justify-center items-center`}>
            <div className={`w-3 h-3 rounded-full bg-[${pageCount === idx+1 && "#FFFFFF99"}]`}></div>
          </div>
          )
        })}
      </div>
      <div className="h-1 w-[97%] pl-[11px] relative top-[-12px] bg-[#6D6D6D]">
        <div className={`h-1 ${barProgress} bg-[#FFA724]`}></div>
      </div>
    </div>
  );
}

export default PageTracker;