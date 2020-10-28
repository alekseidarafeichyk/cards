import React from 'react';
import style from './PageIcon.module.css';

type PageIconPropsType = {
    pages: Array<number>
    changePage: (page: number) => void
    currentPage: number
}

export const PageIcon = (props: PageIconPropsType) => {
    return  <div className={style.containerPages}>
        {props.pages.map(page => <span onClick={()=> {props.changePage(page)}} className={`${style.pageNumber} ${props.currentPage === page ? style.active : ''}`}>
                    {page}
                      </span>)}
    </div>
}
