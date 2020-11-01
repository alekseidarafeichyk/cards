import React from 'react';
import style from './PageIcon.module.css';

type PageIconPropsType = {
        pages: Array<number>
}

export const PageIcon = (props: PageIconPropsType) => {
    return  (
               <div>
                   {props.pages.map(p => <span>{p}</span>)}
               </div>     )
}
