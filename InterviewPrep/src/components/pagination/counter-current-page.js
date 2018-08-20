import React from "react";
import { Link } from "react-router-dom";

const CounterCurrentPage = props => {
  const { url, currentPage, ...others } = props;

  return (
    <li>
      <span {...others}>{currentPage}</span>
    </li>
  );
};

export default CounterCurrentPage;
