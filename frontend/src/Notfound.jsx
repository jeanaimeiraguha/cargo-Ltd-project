import React from 'react';

const Notfound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <h3 className="mb-3">Requested Page Not Found</h3>
        <p className="text-muted">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="btn btn-primary mt-3">Go Back Home</a>
      </div>
    </div>
  );
}

export default Notfound;
