import React, { useContext, useEffect, useState } from "react";

import FixedButton from "./Fixedbutton";
import { Link, useNavigate } from "react-router-dom";
import restContext from "../context/restaurant/restContext";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { IoArrowUndoCircle } from "react-icons/io5";

const Bill = () => {
  const [cartItems, setCartItems] = useState([]);
  const [updateEffect, setUpdateEffect] = useState(false);
  const [totalBill, setTotalBill] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const status = 1;
    const fetchData = async () => {
      const response = await fetch(
        `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/ordermenus/findmenusoftable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({
            restid: JSON.parse(localStorage.getItem("restid")),
            tableid: JSON.parse(localStorage.getItem("tableid")),
            status: status,
            cphone: JSON.parse(localStorage.getItem("cphone")),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
        setLoading(false);
      } else if (response.status === 404) {
        setCartItems([]);
        console.log("Data not found");
      } else {
        console.log("Unable to fetch the data from the database");
      }
    };

    const fetchTotalBill = async () => {
      const response = await fetch(
        `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/ordermenus/getfinalprice/${JSON.parse(
          localStorage.getItem("restid")
        )}/${JSON.parse(localStorage.getItem("tableid"))}/${status}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
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
  }, [updateEffect]);

  const onorderclick = () => {
    const changeData = async () => {
      // const bodydata = {
      //   cname: `${JSON.parse(localStorage.getItem("cname"))}`,
      //   cphone: `${JSON.parse(localStorage.getItem("cphone"))}`,
      // };
      const response = await fetch(
        `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/ordermenus/status/changestatustotwo`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
          body: JSON.stringify({
            restid: JSON.parse(localStorage.getItem("restid")),
            tableid: JSON.parse(localStorage.getItem("tableid")),
            cname: `${JSON.parse(localStorage.getItem("cname"))}`,
            cphone: JSON.parse(localStorage.getItem("cphone")),
          }),
        }
      );

      if (response.ok) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Order Placed..!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/order");
      } else {
        alert("something went wrong..! Unable to order");
      }
    };

    changeData();
  };

  return (
    <div className="text-white">
      <div className="bill_seconddiv">
        <div>
          <Link to={"/cart"}>
            <IoArrowUndoCircle className="cart_leftarrow" />
          </Link>
        </div>
        <div className="bill_yourbilldiv">Your Menus</div>
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
              {/* <div className="bill_imgdiv"></div> */}
              <div className="bill_foodname">Name</div>
              <div className="bill_foodqt">Qty</div>
              {/* <div className="bill_foodrate">{item.discountedPrice * item.quantity}</div>  */}
              <div className="bill_foodrate">Rs</div>
            </div>
            {cartItems.map((item, index) => (
              <div key={item.id} className="bill_namerateimgdiv">
                {/* <div className="bill_imgdiv">
                  <img
                    src={`${item.foodimg}`}
                    alt={item.name}
                    className="bill_img"
                  />
                 
                </div> */}
                <div className="bill_foodname">{item.name}</div>
                <div className="bill_foodqt">{item.quantity}</div>
                {/* <div className="bill_foodrate">{item.discountedPrice * item.quantity}</div>  */}
                <div className="bill_foodrate">{item.totalprice}</div>
              </div>
            ))}
            <hr className="bill_secondhr" />
            <div className="bill_totalbilldiv">
              <div className="bill_totaldiv">Total</div>
              <div className="bill_totaldiv">{totalBill}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="bill_paybuttondiv">
            {/* <button className="bill_orderjowbtn">Order Now</button> */}
            <Link to={"/homemenu"}>
              <button className="bill_orderjowbtn">Add More</button>
            </Link>
            {/* <Link to={"/order"}>
              <button className="bill_orderjowbtn">Order</button>
            </Link> */}
            <button className="bill_orderjowbtn" onClick={onorderclick}>
              Order
            </button>
          </div>
          <div>
            {/* div for loading  */}
            {loading && (
              <div className="bill_loading-container">
                <div className="bill_loading-wrapper">
                  <CircularProgress style={{ color: "red" }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FixedButton currentpage={"bill"} />
    </div>
  );
};

export default Bill;
