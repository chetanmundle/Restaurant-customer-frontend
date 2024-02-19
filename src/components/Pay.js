import React, { useContext } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import QR from "../images/QR.png";
import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";
import restContext from "../context/restaurant/restContext";
import { FaRupeeSign } from "react-icons/fa";

const Pay = () => {
  // const restdata = useContext(restContext);
  return (
    <div className="pay_container">
      <div className="pay_leftarrowdiv">
        <Link to={"/bill"}>
          <button className="mb-1">
            <FaArrowCircleLeft />
          </button>
        </Link>
        {/* <div className="mt-1" >
          <FaArrowCircleLeft />
        </div> */}
        <div className="pay_paybutton">Pay</div>
      </div>
      {/* first card */}
      <div className="pay_firstcard">
        {/* second card */}
        <div className="pay_secodcard">
          <div className="pay_payyourbilldiv">Pay your Bill</div>
          <div className="pay_totalmoneydiv">₹</div>
          {/* third card */}
          <div className="pay_thirdcard">
            {/* Qr code */}
            <div className="pay_QRdiv_parent">
              <div className="Pay_QRdiv">
                <img src={QR} alt={"QR code"} className="Pay_QR" />
              </div>
              {/* chetan */}
            </div>
          </div>

          <div className="pay_ordiv">OR</div>

          <div className="pay_billontable">Pay your Bill on Table</div>
        </div>
      </div>
      <FixedButton currentpage={"bill"} />
    </div>
  );
};

export default Pay;
