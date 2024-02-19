import React, { useState, useEffect } from "react";

// import "../styles/main.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { IoArrowUndoCircle } from "react-icons/io5";

import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [updateEffect, setUpdateEffect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = 1;
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/ordermenus/findmenusoftable`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
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
    fetchData();
  }, [updateEffect]);

  const incrementQuantity = async (orderid) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/ordermenus/increasequantity/${orderid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setUpdateEffect((prevState) => !prevState);
      } else {
        alert("Unable to Inscrease the quantity");
      }
    } catch (error) {
      console.log("Unalble to increase Quantity");
    } finally {
      setLoading(false);
    }
  };

  const decrementQuantity = async (orderid) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/ordermenus/decreasequantity/${orderid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setUpdateEffect((prevState) => !prevState);
      } else {
        alert("Unable to Decrease the quantity");
      }
    } catch (error) {
      console.log("Unable to Decrease the quantity");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart_container">
      <div className="cart_seconddiv">
        <div>
          <Link to={"/homemenu"}>
            <IoArrowUndoCircle className="cart_leftarrow" />
          </Link>
        </div>
        <div className="cart_yourcartdiv">Your Cart</div>
      </div>

      {/* first card */}

      <div className="cart_firstcarddiv">
        {/* second cart */}
        <div className="cart_secondcarddiv">
          <div className="card_secondcardseconddiv">
            <div className="cart_itemQulitydiv">
              <div className="cart_item">Item</div>
              <div className="cart_qunitity">Quantity</div>
            </div>
            <hr className="cart_hr" />

            {cartItems.map((item, index) => (
              <div key={item.id} className="cart_mapmaindiv ">
                <div className="cart_indexdiv">{index + 1}</div>
                <div className="">
                  <img src={`${item.foodimg}`} alt="img" className="cart_img" />
                  {/* <img src={item.image} alt="img" className="cart_img" /> */}
                </div>
                <div className="cart_name">{item.name}</div>

                <div className="cart_foodid">
                  <button
                    onClick={() => {
                      decrementQuantity(item.ordermenu_id);
                    }}
                  >
                    <FaCircleMinus />
                  </button>
                </div>
                <div className="cart_foodvalue">{item.quantity}</div>
                <div className="cart_foodid">
                  <button
                    onClick={() => {
                      incrementQuantity(item.ordermenu_id);
                    }}
                  >
                    <FaPlusCircle />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart_checkoutbtndiv">
          <Link to={"/homemenu"}>
            <button className="cart_checkoutbtn">Add More</button>
          </Link>
          <Link to={"/bill"}>
            <button className="cart_checkoutbtn">Checkout</button>
          </Link>
        </div>
        {/* div for loading  */}
        {loading && (
          <div className="bill_loading-container">
            <div className="bill_loading-wrapper">
              <CircularProgress style={{ color: "red" }} />
            </div>
          </div>
        )}
      </div>

      <FixedButton currentpage={"cart"} />
    </div>
  );
};

export default Cart;
