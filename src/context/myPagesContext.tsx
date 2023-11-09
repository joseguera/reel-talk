import * as React from 'react';

interface Props {
    children: React.ReactNode;
  }
  
  export type PageContent = {
    pages: {
      pageId: number;
      back: string;
      next: string;
      progress: number;
    }[];
    pageCount: number;
    getNextPage: () => void;
  };
  
  export const PageContext = React.createContext<PageContent>({
          pages: [
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
      { pageId: 5, back: "/top-5-show-selection", next: "/", progress: 100 }
    ],
    pageCount: 1,
    getNextPage: () => {}
  });
  
  export const usePageContext = () => React.useContext(PageContext);