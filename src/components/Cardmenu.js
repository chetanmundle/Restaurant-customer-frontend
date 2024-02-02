import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";

import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cardmenu = ({ copyOfFoodData, setCopyOfFoodData }) => {
  const [cartItem, setCartItem] = useState([]);
  const [cartload, setCartload] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const status = 1;
        const response = await fetch(
          `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/findidsofcartitem/${JSON.parse(
            localStorage.getItem("restid")
          )}/${JSON.parse(localStorage.getItem("tableid"))}/${status}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if needed
            },
          }
        );

        if (response.ok) {
          const data = await response.json(); // Await the response.json() to properly get the data

          setCartItem(data);
        } else if (response.status === 404) {
          setCartItem([]);
        } else {
          console.error(
            "Error fetching data:",
            response.status,
            response.statusText
          );
          // Handle error cases here, if needed
        }
      } catch (error) {
        console.error("Error in fetchdata function:", error);
        // Handle any unexpected errors here
      }
    };

    fetchdata();
  }, [cartload]);

  const addToCart = async (itemid) => {
    try {
      // adding in cart with restid, tableid and menuid
      const response = await fetch(
        `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/addtocart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
          body: JSON.stringify({
            restid: JSON.parse(localStorage.getItem("restid")),
            tableid: JSON.parse(localStorage.getItem("tableid")),
            menuid: itemid,
            cphone: JSON.parse(localStorage.getItem("cphone")),
          }),
        }
      );

      if (response.ok) {
        setCartload(cartload + 1);
        toast.success(" Added to cart", {
          className: "custom-toast",
        });
        return true;
      }else if (response.status == 409) {
        alert("Someone is already booked a table.....")
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error in fetching data :", error);
    }
  };

  const handallikedislike = (id) => {
    setCopyOfFoodData((prevFoodname) =>
      prevFoodname.map((item) =>
        item.id === id ? { ...item, islike: !item.islike } : item
      )
    );
  };

  const discountfinder = (price, discount) => {
    const d = 100 - discount;
    return (price * d) / 100;
  };

  return (
    <div className="">
      {copyOfFoodData.map((item) => (
        <div key={item.id}>
          {/* main card */}

          <div className="cardmenu_indexdiv">
            <div className="cardmenu_topdiv ">
              <div className="cardmenu_imgtopdiv1">
                <Link to={`/fooddetails/${encodeURIComponent(item.id)}`}>
                  <div className="cardmenu_imgtopdiv">
                    <div className=" ">
                      <img
                        src={`${item.foodimg}`}
                        className="cardmenu_image"
                        alt="food image"
                      />
                      {/* <img
                        src={item.image}
                        className="cardmenu_image"
                        alt="food image"
                      /> */}
                    </div>
                    <div className="cardmenu_itemnamediv">{item.name}</div>
                  </div>
                </Link>
              </div>

              <div className="cardmenu_hearddiv_top ">
                <div className="cardmenu_hearddiv">
                  <IoIosHeart
                    style={{ color: item.islike ? "red" : "gray" }}
                    onClick={() => handallikedislike(item.id)}
                  />
                </div>
                <div className="text-right">
                  <div className="cardmenu-text-black-color">
                    {cartItem.some((cartItem) => cartItem.id === item.id) ? (
                      // If item is in the cart, show a link to the cart
                      <Link to="/cart">
                        <button className="cardmenu_addcart_btn">
                          Go to Cart
                        </button>
                      </Link>
                    ) : (
                      // If item is not in the cart, show the "Add Cart" button
                      <button
                        className="cardmenu_addcart_btn"
                        onClick={() => {
                          // restdata.addToCart(item.id);
                          // toast.success(item.name + " Added to cart", {
                          //   className: "custom-toast",
                          // });
                          addToCart(item.id);
                        }}
                      >
                        Add Cart
                      </button>
                    )}
                    {/* <button
                      className="cardmenu_addcart_btn"
                      onClick={() => restdata.addToCart(item.id)}
                    >
                      Add Cart
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="bg-slate-400 d" >
              <div className="d1">d</div>
             
              <div className="">d</div>
            </div> */}
            {/* extra info like discount */}
            <Link to={`/fooddetails/${encodeURIComponent(item.id)}`}>
              <div className="cardmenu_discountdiv ">
                {item.discount > 0 ? (
                  <>
                    <span className="cardmenu_discount">
                      {item.discount}% OFF
                    </span>
                    &nbsp;&nbsp;
                    <span className="cardmenu_crossprice">{item.price}</span>
                    &nbsp;&nbsp;
                    <span className="cardmenu_rupeesprice font-bold">
                      <FaRupeeSign className="mr-1 f " />
                      {discountfinder(item.price, item.discount)}
                    </span>
                  </>
                ) : (
                  <span className=" cardmenu_rupeesprice font-bold">
                    <FaRupeeSign className="mr-1 " />
                    {item.price}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cardmenu;
