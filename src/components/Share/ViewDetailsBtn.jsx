import React from "react";
import { Link } from "react-router-dom";

const ViewDetailsBtn = ({Product}) => {
  return (
    <div>
      <Link to={`/View_Details/${Product?.Id}`}>
        <button title="View Details" className="hover:btn">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ViewDetailsBtn;
