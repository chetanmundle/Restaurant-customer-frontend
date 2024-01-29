import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import QR from "../images/QR.png";
import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";
import restContext from "../context/restaurant/restContext";
import { FaRupeeSign } from "react-icons/fa";

const Invoice = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    const status = 2;
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/ordermenus/findmenusoftable/${JSON.parse(
          localStorage.getItem("restid")
        )}/${JSON.parse(localStorage.getItem("tableid"))}/${3}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data item : ", data);
        setCartItems(data);
      } else if (response.status === 404) {
        setCartItems([]);
        console.log("Data not found");
      } else {
        console.log("Unable to fetch the data from the database");
      }
    };

    const fetchTotalBill = async () => {
      const response = await fetch(
        `http://localhost:8080/ordermenus/getfinalprice/${JSON.parse(
          localStorage.getItem("restid")
        )}/${JSON.parse(localStorage.getItem("tableid"))}/${status}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTotalBill(data);
      }
    };
    fetchData();
    fetchTotalBill();
  }, []);
  return (
    <div className="pay_container">
      <div className="pay_leftarrowdiv">
        {/* <Link to={"/bill"}>
          <button className="mb-1">
            <FaArrowCircleLeft />
          </button>
        </Link> */}

        <div className="pay_paybutton">Invoice</div>
      </div>
      {/* first card */}
      <div className="pay_firstcard">
        {/* second card */}
        {/* <div className="pay_secodcard">
          <div className="pay_payyourbilldiv">Pay your Bill</div>
          <div className="pay_totalmoneydiv">₹ {restdata.totalBill}</div>
  
          <div className="pay_thirdcard">
      
            <div className="pay_QRdiv_parent">
              <div className="Pay_QRdiv">
                <img src={QR} alt={"QR code"} className="Pay_QR" />
              </div>
            </div>
          </div>

          <div className="pay_ordiv">OR</div>

          <div className="pay_billontable">Pay your Bill on Table</div>
        </div> */}

        <div>
          <div className="invoice_invoice">Invoice</div>
        </div>
        <hr className="invoice_hr" />
        <div className="bill_namerateimgdiv">
          <div className="invoice_nameheading">Name</div>
          <div className="invoice_qtheading">Qt</div>
          <div className="invoice_priceheading">Price</div>
        </div>
        <div>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="bill_namerateimgdiv">
                {/* <div className="bill_imgdiv">
                  <img
                    src={`data:image/png;base64,${item.foodimg}`}
                    alt={item.name}
                    className="bill_img"
                  />
                 
                </div> */}
                <div className="invoice_foodname">{item.name}</div>
                <div className="nvoice_foodqt">{item.quantity}</div>
                {/* <div className="bill_foodrate">{item.discountedPrice * item.quantity}</div>  */}
                <div className="invoice_foodrate">{item.totalprice}</div>
              </div>
            ))}
          </div>
          <div>
            <hr className="invoice_hr" />
          </div>
          <div>
            <div className="invoice_totalparentdiv">
              <div>Total</div>
              <div>1400</div>
            </div>
          </div>
        </div>
      </div>
      {/* <FixedButton currentpage={"bill"} /> */}
    </div>
  );
};

export default Invoice;
