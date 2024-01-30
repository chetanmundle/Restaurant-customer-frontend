import React, { useState, useEffect } from "react";

// import "../styles/main.css";
import { FaCircleMinus } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [updateEffect, setUpdateEffect] = useState(false);

  useEffect(() => {
    const status = 1;
    const fetchData = async () => {
      const response = await fetch(
        `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/findmenusoftable/${JSON.parse(
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
        setCartItems(data);
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
    const response = await fetch(
      `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/increasequantity/${orderid}`,
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
  };

  const decrementQuantity = async (orderid) => {
    const response = await fetch(
      `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/decreasequantity/${orderid}`,
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
  };

  return (
    <div className="cart_container">
      <div className="cart_seconddiv">
        <div className="cart_yourcartdiv">Your Cart</div>
      </div>

      {/* first card */}

      <div className="cart_firstcarddiv">
        {/* second cart */}
        <div className="cart_secondcarddiv">
          <div className="card_secondcardseconddiv">
            <div className="cart_itemQulitydiv">
              <div className="cart_item">item</div>
              <div className="cart_qunitity">quantity</div>
            </div>
            <hr className="cart_hr" />

            {cartItems.map((item, index) => (
              <div key={item.id} className="cart_mapmaindiv ">
                <div className="cart_indexdiv">{index + 1}</div>
                <div className="">
                  <img
                    src={`data:image/png;base64,${item.foodimg}`}
                    alt="img"
                    className="cart_img"
                  />
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
      </div>

      <FixedButton currentpage={"cart"} />
    </div>
  );
};

export default Cart;
