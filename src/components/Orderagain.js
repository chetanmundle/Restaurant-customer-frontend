import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import restlog from "../images/restlogo1.png";
import Swal from "sweetalert2";

const Orderagain = () => {
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/ordermenus/getinvoicemenus/customer`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "true",
            },
            body: JSON.stringify({
              restid: JSON.parse(localStorage.getItem("restid")),
              tableid: JSON.parse(localStorage.getItem("tableid")),
              status: 2,
              cphone: JSON.parse(localStorage.getItem("cphone")),
            }),
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
      } catch (error) {
        console.log("Unable to fetch data");
      }
    };
    fetchData();
  }, []);

  const handalgenerateInvoice = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Order Food Again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Generate Invoice",
    }).then((result) => {
      if (result.isConfirmed) {
        const changeData = async () => {
          const response = await fetch(
            `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/ordermenus/status/changestatustothree/${JSON.parse(
              localStorage.getItem("restid")
            )}/${JSON.parse(localStorage.getItem("tableid"))}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "true",
              },
            }
          );

          if (response.ok) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Invoice Generated Successfully..!",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/invoice");
          } else {
            alert("something went wrong..! Unable to Generate Invoice");
          }
        };

        changeData();
      }
    });
  };
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
        {/* <div className="orderagain_secondcard">
          <div>Your Item will Delivered in 15 min</div>
          <div className="orderagain_paybtn">
            <Link to={"/pay"}>
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
        </div> */}

        {/* hotel log */}
        <div className="orderagain_hotellogo">
          <div className="">
            <img src={restlog} alt="logo" className="orderagain_logo" />
          </div>
        </div>

        {/* tagline div */}
        <div className="orderagain_tagline">
          <div className="orderagain_animate-charcter">
            We are always here to serve you.
          </div>
        </div>

        {/* order place */}

        <div className="orderagain_msg">
          <div>Order Placed! Your Order Delivered in 15 Min...</div>
        </div>

        {/* buttons  */}

        <div>
          <div className="bill_paybuttondiv">
            {/* <button className="bill_orderjowbtn">Order Now</button> */}
            <Link to={"/homemenu"}>
              <button className="orderagain_orderjowbtn">Order Again</button>
            </Link>
            {/* <Link to={"/invoice"}>
              <button className="orderagain_orderjowbtn" >Generate Invoice</button>
            </Link> */}
            <button
              className="orderagain_orderjowbtn"
              onClick={handalgenerateInvoice}
            >
              Generate Invoice
            </button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div className="orderagain_headingdivs invoice_fontbold">
                <div className="orderagain_itemheaddiv">ITEM</div>
                <div>QTY</div>
                {/* <div className="invoice_pricediv">
                  <div>PRICE</div>
                </div>
                <div>AMOUNT</div> */}
              </div>
              <div>
                {" "}
                {cartItems &&
                  cartItems.ordermenus &&
                  cartItems.ordermenus.map((item, index) => (
                    <div key={index}>
                      <div className="orderagain_headingdivs">
                        <div className="orderagain_itemheaddiv">
                          {item.name}
                        </div>
                        <div>{item.quantity}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderagain;
