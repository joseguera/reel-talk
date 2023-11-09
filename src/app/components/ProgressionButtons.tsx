import React, { FC, FunctionComponent } from 'react';
import FormButton from '../components/FormButton';

type PageProps = {
  pages: {
    pageId: number;
    back: string;
    next: string;
    onPage: boolean;
    progress: number;
  }[]
}

const ProgressionButtons: FC<PageProps> = ({ pages }) => {
  return (
    <div>
        {pages.map((button) => {
          return <button key={button.pageId}>{button.back}</button>
        })}
    </div>
  )
}

export default ProgressionButtons;