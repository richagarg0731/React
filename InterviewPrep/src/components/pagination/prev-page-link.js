import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PrevPageLink = ({ url, currentPage }) => {
  if (currentPage > 1) {
    return (
      <Link to={url} className="next-page-link">
        <LinkText />
      </Link>
    );
  } else {
    return (
      <span className="next-page-link disabled">
        <LinkText />
      </span>
    );
  }
};

const LinkText = () => (
  <Fragment>
    <i className="fas fa-arrow-left icon" /> Prev
  </Fragment>
);

export default PrevPageLink;
