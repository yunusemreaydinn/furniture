import React from "react";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-content">
        <div className="signup-title">Join the club and get the benefits</div>
        <div className="signup-description">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores, and more
        </div>
        <div className="signup-form">
          <input placeholder="your@email.com" type="text" />
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
