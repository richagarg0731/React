import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NextPageLink = ({ url, currentPage, lastPage }) => {
  if (currentPage !== lastPage) {
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
    Next <i className="fas fa-arrow-right icon" />
  </Fragment>
);

export default NextPageLink;
