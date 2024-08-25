import React from "react";
import { Link } from "react-router-dom";
import './PageHeading.css';

const PageHeading = ({ home, pagename }) => {
  return (
    <div>
      <div className="page-heading-container">
        <h1 className="page-heading-title">{pagename}</h1>
        <p>
          <Link to="/">{home}</Link> / {pagename}
        </p>
      </div>
    </div>
  );
};

export default PageHeading;
