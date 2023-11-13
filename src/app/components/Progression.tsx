"use client";
import * as React from "react";
import { PageContext } from "../../context/myPagesContext"
import PageTracker from "./PageTracker";
import ProgressionButtons from "./ProgressionButtons";

interface Props {
  children: React.ReactNode;
}

const Progression: React.FC<Props> = ({ children }) => {
  const [pages, setPages] = React.useState([
    { pageId: 1, back: "/back", next: "/birthday-selection", progress: 0 },
    {
      pageId: 2,
      back: "/birthday-selection",
      next: "/genre-selection",
      progress: 25,
    },
    {
      pageId: 3,
      back: "/genre-selection",
      next: "/top-5-movie-selection",
      progress: 50,
    },
    {
      pageId: 4,
      back: "/top-5-movie-selection",
      next: "/top-5-show-selection",
      progress: 75,
    },
    { pageId: 5, back: "/top-5-show-selection", next: "/", progress: 100 },
  ]);
  const [pageCount, setPageCount] = React.useState(1);

  function getLastPage(): void {
    setPageCount((prevPage) => prevPage >= 1 ? prevPage - 1 : prevPage);
    console.log("click -");
  }

  function getNextPage(): void {
    setPageCount((prevPage) => prevPage <= 4 ? prevPage + 1 : prevPage);
    console.log("click +");
  }

  console.log({ pageCount });

  return (
    <>
      <PageContext.Provider value={{ pages, pageCount, getNextPage }}>
        <PageTracker pages={pages} pageCount={pageCount} />
        {children}
        <ProgressionButtons
          pages={pages}
          pageCount={pageCount}
          getLastPage={getLastPage}
          getNextPage={getNextPage}
        />
      </PageContext.Provider>
    </>
  );
};

export default Progression;
