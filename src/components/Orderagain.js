import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import hotellogo from "../images/hotellogo.png";
import Swal from "sweetalert2";

const Orderagain = () => {
  const navigate = useNavigate();

  

  const handalgenerateInvoice=()=>{
  
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Order Food Again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Generate Invoice"
    }).then((result) => {
      if (result.isConfirmed) {
        const changeData = async () => {
          const response = await fetch(
            `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/status/changestatustothree/${JSON.parse(
              localStorage.getItem("restid")
            )}/${JSON.parse(localStorage.getItem("tableid"))}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
    
          if (response.ok) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Order Placed..!",
              showConfirmButton: false,
              timer: 2000
            });
            navigate("/invoice")
          } else {
            alert("something went wrong..! Unable to Generate Invoice");
          }
        };
    
        changeData();
       
      }
    });
  }
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
            <img src={hotellogo} alt="logo" className="orderagain_logo" />
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
          <div>
            Order Placed! Your Order Delivered in 15 Min...
          </div>
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
            <button className="orderagain_orderjowbtn" onClick={handalgenerateInvoice}>Generate Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderagain;
