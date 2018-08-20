import React from "react";
import { Link } from "react-router-dom";

const CounterNextPage = props => {
  const { url, currentPage, totalPages, ...others } = props;
  if (totalPages > currentPage) {
    return (
      <li>
        <Link to={url} {...others}>
          {currentPage + 1}
        </Link>
      </li>
    );
  } else {
    return null;
  }
};

export default CounterNextPage;
