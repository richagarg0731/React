import React from "react";
import { Link } from "react-router-dom";

const CounterFirstPage = props => {
  const { url, currentPage, ...others } = props;
  if (currentPage > 2) {
    return (
      <li>
        <Link to={url} {...others}>
          1
        </Link>
      </li>
    );
  } else {
    return null;
  }
};

export default CounterFirstPage;
