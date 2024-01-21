import React, { useContext, useEffect, useState } from "react";

import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";
import restContext from "../context/restaurant/restContext";

const Bill = () => {
  const restdata = useContext(restContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Update cartItems when restdata.cartItem prop changes
    setCartItems(restdata.cartItem);
  }, [restdata.cartItem]);

  return (
    <div className="text-white">
      <div className="bill_seconddiv">
        <div>
          {/* <button
            className="mx-3"
            // onClick={() => {
            //   router.push("");
            // }}
          >
            <FaArrowLeft />
          </button> */}
        </div>

        <div className="bill_yourbilldiv">Your Bill</div>
      </div>

      {/* first card */}
      <div className="bill_firstdiv">
        {/* second card */}
        <div className="bill_secondcartdiv ">
          <div className="bill_secondcartfirstdiv">
            <div className="bill_paymentinvoice">Payment Invoice</div>

            <div>
              <hr className="bill_hr" />
            </div>
            <div className="bill_namerateimgdiv">
              <div className="bill_imgdiv"></div>
              <div className="bill_foodname">Name</div>
              <div className="bill_foodqt">Qty</div>
              {/* <div className="bill_foodrate">{item.discountedPrice * item.quantity}</div>  */}
              <div className="bill_foodrate">Rs</div>
            </div>
            {cartItems.map((item, index) => (
              <div key={item.id} className="bill_namerateimgdiv">
                <div className="bill_imgdiv">
                  <img
                    src={`data:image/png;base64,${item.foodimg}`}
                    alt={item.name}
                    className="bill_img"
                  />
                  {/* <img src={item.image} alt={item.name} className="bill_img" /> */}
                </div>
                <div className="bill_foodname">{item.name}</div>
                <div className="bill_foodqt">{item.quantity}</div>
                {/* <div className="bill_foodrate">{item.discountedPrice * item.quantity}</div>  */}
                <div className="bill_foodrate">{item.discountedPrice}</div>
              </div>
            ))}
            <hr className="bill_secondhr" />
            <div className="bill_totalbilldiv">
              <div className="bill_totaldiv">Total</div>
              <div className="bill_totaldiv">{restdata.totalBill}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="bill_paybuttondiv">
            {/* <button className="bill_orderjowbtn">Order Now</button> */}
            <Link to={"/homemenu"}>
              <button className="bill_orderjowbtn">Add More</button>
            </Link>
            <Link to={"/orderagain"}>
              <button className="bill_orderjowbtn">Order</button>
            </Link>
          </div>
        </div>
      </div>
      <FixedButton currentpage={"bill"} />
    </div>
  );
};

export default Bill;
