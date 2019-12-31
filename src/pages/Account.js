import React from 'react';
import AiNews from "../components/AiNews";

const Account = () => {
  return (
    <div className="pt-4 row m-0">
      <div className="col-md-9">
        <div className="d-flex align-items-center justify-content-between border-bottom">
          <h2>Account</h2>
        </div>
        <div className="card-container p-4">
        </div>
      </div>
      <div className="col-md-3">
        <AiNews/>
      </div>
    </div>
  )
};

export default Account;
