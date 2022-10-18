import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </div>
      <div class="link-container">
        <Link className="more-link" to="/">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
