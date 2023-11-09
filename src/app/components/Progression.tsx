'use client'

import React, { FunctionComponent, useState } from 'react'
import PageTracker from './PageTracker';
import ProgressionButtons from './ProgressionButtons'

interface Props {
    children: React.ReactNode;
}

 const Progression: FunctionComponent<Props> = ({ children }) => {
    const [pages, setPages] = useState([
        { pageId: 1, back: '/back', next: '/birthday-selection', onPage: false, progress: 0 },
        { pageId: 2, back: '/birthday-selection', next: '/genre-selection', onPage: false, progress: 25 },
        { pageId: 3, back: '/genre-selection', next: '/top-5-movie-selection', onPage: false, progress: 50 },
        { pageId: 4, back: '/top-5-movie-selection', next: '/top-5-show-selection', onPage: false, progress: 75 },
        { pageId: 5, back: '/top-5-show-selection', next: '/', onPage: false, progress: 100 }
    ]);

  return (
    <>
        <PageTracker pages={pages} />
            {children}
        <ProgressionButtons pages={pages} />
    </>
  )
}

export default Progression;
