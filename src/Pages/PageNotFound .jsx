import React from 'react';
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-self-center">
            <div className="error-message">
              <h1 className="error-code">404</h1>
              <h2>Oops! Page Not Found</h2>
              <p>
                The page you are looking for might have been removed, had its
                name changed, or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary">
                Go to Homepage
              </Link>
            </div>
          </div>
          {/* <div className="col-md-6 align-self-center">
            <div className="error-image">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/website-error-404-page-not-found-1841893-1561816.png"
                alt="404 Error"
                className="img-fluid"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;