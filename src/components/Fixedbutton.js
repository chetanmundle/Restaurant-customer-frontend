import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const FixedButton = ({ currentpage }) => {
  const [home, setHome] = useState(true);
  const [cart, setCart] = useState(false);
  const [bill, setBill] = useState(false);
  const [pay, setPay] = useState(false);
  const [orderagain, setOrderagain] = useState(false);

  useEffect(() => {
    if (currentpage === "home") {
      setHome(true);
      setCart(false);
      setBill(false);
      setPay(false);
      setOrderagain(false);
    } else if (currentpage === "cart") {
      setHome(false);
      setCart(true);
      setBill(false);
      setPay(false);
      setOrderagain(false);
    } else if (currentpage === "bill") {
      setHome(false);
      setCart(false);
      setBill(true);
      setPay(false);
      setOrderagain(false);
    }
  }, []);
  console.log(currentpage);
  return (
    <div>
      <div className="menulist_container">
        {/* <FixedButton /> */}
        <div className="menulist_center_div">
          <div className="menulist_btn_div">
            {/* <button
            className={` menulist_first_btn 
            bg-slate-700
            `}
            // onClick={handalhome}
          >
            <FaHome className="menulist_icon" />
          </button>
          <button
            className={`menulist_middle_btn bg-slate-700`}
            // onClick={handalcart}
          >
            <FaShoppingCart className="menulist_icon" />
          </button>
          <button
            className={`menulist_third_btn bg-slate-700`}
            // onClick={handalbill}
          >
            <PiCurrencyCircleDollarFill className="menulist_icon" />
          </button> */}
            <Link to={"/homemenu"}>
              <button
                className={` menulist_first_btn 
            ${home ? "menulist_yellow" : "bg-slate-600 "}
            `}
                // onClick={handalhome}
              >
                <FaHome className="menulist_icon" />
              </button>
            </Link>
            <Link to={"/cart"}>
              {" "}
              <button
                className={`menulist_middle_btn ${
                  cart ? "menulist_yellow" : "bg-slate-700"
                }`}
                // onClick={handalcart}
              >
                <FaShoppingCart className="menulist_icon" />
              </button>
            </Link>
            <Link to={"/bill"}>
              <button
                className={`menulist_third_btn ${
                  bill || pay || orderagain ? "menulist_yellow" : "bg-slate-700"
                }`}
                // onClick={handalbill}
              >
                {/* <PiCurrencyCircleDollarFill className="menulist_icon" /> */}
                <FaRupeeSign className="menulist_icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedButton;
