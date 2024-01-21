import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Orderagain = () => {
  return (
    <div className="orderagain_conatainer">
      <div className="orderagain_leftarrowdiv">
        <Link to={"/bill"}>
          <button className="mb-1">
            <FaArrowCircleLeft />
          </button>
        </Link>
        {/* <div className="mt-1" >
          <FaArrowCircleLeft />
        </div> */}
        {/* <div className="pl-2 pb-2">Pay</div> */}
      </div>
      {/* first card */}
      <div className="orderagain_firstcard">
        {/* second card */}
        <div className="orderagain_secondcard">
          <div>Your Item will Delivered in 15 min</div>
          <div className="orderagain_paybtn">
            <Link to={"/pay"}>
              {" "}
              <button className="ordernow_paybtn">Pay</button>
            </Link>
          </div>
          <div>Order Again</div>
          <div className="orderagain_browsmenubtn">
            <Link to={"/homemenu"}>
              {" "}
              <button className="ordernow_browesmenubtn">Browse Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderagain;
