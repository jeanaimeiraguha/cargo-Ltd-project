import React from 'react';


const HomePage = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="home-content">
        <h1 className=''>Welcome to CARGO Ltd</h1>
        
        <p className="home-description mb-4">
          Your trusted warehouse partner in Kigali City for furniture import and export.
        </p>

        <div className="home-info mb-4">
          <p>Manage and track your goods with ease and efficiency.</p>
        </div>

        <div className="text-center">
          <a href="/login" className="btn btn-primary btn-lg mx-2">Login</a>
          <a href="/register" className="btn btn-outline-primary btn-lg mx-2">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
