import React from "react";
import { Link } from "react-router-dom";

const CounterLastPage = props => {
  const { url, currentPage, totalPages, ...others } = props;
  if (totalPages - 1 > currentPage) {
    return (
      <li>
        <Link to={url} {...others}>
          {totalPages}
        </Link>
      </li>
    );
  } else {
    return null;
  }
};

export default CounterLastPage;
