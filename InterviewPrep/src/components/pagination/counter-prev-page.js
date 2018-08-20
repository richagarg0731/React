import React from "react";
import { Link } from "react-router-dom";

const CounterPrevPage = props => {
  const { url, currentPage, ...others } = props;
  if (currentPage > 1) {
    return (
      <li>
        <Link to={url} {...others}>
          {currentPage - 1}
        </Link>
      </li>
    );
  } else {
    return null;
  }
};

export default CounterPrevPage;
