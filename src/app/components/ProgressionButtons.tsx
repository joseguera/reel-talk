import React, { FC, FunctionComponent } from "react";
import FormButton from "../components/FormButton";

type PageProps = {
  pages: {
    pageId: number;
    back: string;
    next: string;
    progress: number;
  }[];
  pageCount: number;
  getLastPage: () => void;
  getNextPage: () => void;
};

const ProgressionButtons: FC<PageProps> = ({ pages, pageCount, getLastPage, getNextPage }) => {
  return (
    <div>
      {pageCount === 1 ? (
        <div className="pt-10 flex flex-row gap-8">
          <FormButton pageNav={() => {}}>Cancel</FormButton>
        </div>
        ) : (
          <div className="pt-10 flex flex-row gap-8">
            <FormButton pageNav={getLastPage}>Back</FormButton>
            <FormButton pageNav={getNextPage}>Next</FormButton>
          </div>
        )
      }
    </div>
  );
};

export default ProgressionButtons;
