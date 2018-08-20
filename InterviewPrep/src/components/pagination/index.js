import "./pagination.scss";

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import NextPageLink from "./next-page-link";
import PrevPageLink from "./prev-page-link";
import CounterFirstPage from "./counter-first-page.js";
import CounterPrevPage from "./counter-prev-page.js";
import CounterCurrentPage from "./counter-current-page.js";
import CounterNextPage from "./counter-next-page.js";
import CounterLastPage from "./counter-last-page.js";
import Ellipsis from "./ellipsis";

const Pagination = ({ links, currentPage, totalPages }) => {
  const counterClass = "page-count";

  if (totalPages > 1 && currentPage <= totalPages) {
    return (
      <div className="pagination">
        <PrevPageLink url={links.prev} currentPage={currentPage} />
        <ol>
          <CounterFirstPage
            url={links.first}
            currentPage={currentPage}
            className={counterClass}
          />
          {currentPage > 3 && <Ellipsis />}
          <CounterPrevPage
            url={links.prev}
            currentPage={currentPage}
            className={counterClass}
          />
          <CounterCurrentPage
            url={links.current}
            currentPage={currentPage}
            className={`${counterClass} current`}
          />
          <CounterNextPage
            url={links.next}
            currentPage={currentPage}
            totalPages={totalPages}
            className={counterClass}
          />
          {totalPages - 2 > currentPage && <Ellipsis />}
          <CounterLastPage
            url={links.last}
            currentPage={currentPage}
            totalPages={totalPages}
            className={counterClass}
          />
        </ol>
        <NextPageLink
          url={links.next}
          currentPage={currentPage}
          lastPage={totalPages}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;

Pagination.defaultProps = {
  currentPage: 5,
  totalPages: 16,
  links: {
    current: "/",
    prev: "/",
    next: "/",
    first: "/",
    last: "/"
  }
};
