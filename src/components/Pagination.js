import React from 'react';
import {PaginationWrapper,PaginationElements} from "../elements"

export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return(
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElements to={prevPage}>Previous Page</PaginationElements>
            <PaginationElements to={nextPage}>Next Page</PaginationElements>
        </PaginationWrapper>
    )
}