import React from "react";
import PageHeading from "../common/PageHeading";
import './NotFoundPage.css'; 

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <PageHeading home={"Home"} pagename={"Page Not Found"} />
      <div className="notfound-heading">
        Page Not Found
      </div>
    </div>
  );
};

export default NotFoundPage;
