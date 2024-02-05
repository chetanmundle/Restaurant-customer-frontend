import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import QR from "../images/QR.png";
import FixedButton from "./Fixedbutton";
import { Link } from "react-router-dom";
import restContext from "../context/restaurant/restContext";
import { FaRupeeSign } from "react-icons/fa";
import restlogo from "../images/restlogo1.png";

const Invoice = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState({
    cphone: 9146249682,
    ordermenus: [
      {
        quantity: 5,
        price: 150.0,
        discountedprice: 105.0,
        name: "Chicken Biryani",
        discount: 30.0,
        id: 3,
      },
      {
        quantity: 2,
        price: 30.0,
        discountedprice: 28.5,
        name: "Goat Biryani",
        discount: 5.0,
        id: 6,
      },
      {
        quantity: 1,
        price: 150.0,
        discountedprice: 120.0,
        name: "Button Chicken",
        discount: 20.0,
        id: 4,
      },
    ],
    restaurantname: "Chetan Di Dhaba",
    billwithdiscount: 631.8,
    billwithoutdiscount: 702.0,
    cname: "Chetan Mundle",
    discountofRestaurnat: 10.0,
  });
  const [totalBill, setTotalBill] = useState(0);

  const printpage =()=>{
    window.print();
  }

  // useEffect(() => {
  //   const status = 3;
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/getinvoicemenus/customer`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           restid: JSON.parse(localStorage.getItem("restid")),
  //           tableid: JSON.parse(localStorage.getItem("tableid")),
  //           status:3,
  //           cphone: JSON.parse(localStorage.getItem("cphone")),
  //         }),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("data item : ", data);
  //       setCartItems(data.ordermenus);
  //     } else if (response.status === 404) {
  //       setCartItems([]);
  //       console.log("Data not found");
  //     } else {
  //       console.log("Unable to fetch the data from the database");
  //     }
  //   };

  // const fetchTotalBill = async () => {
  //   const response = await fetch(
  //     `http://localhost:8080/ordermenus/getfinalprice/${JSON.parse(
  //       localStorage.getItem("restid")
  //     )}/${JSON.parse(localStorage.getItem("tableid"))}/${status}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (response.ok) {
  //     const data = await response.json();
  //     setTotalBill(data);
  //   }
  // };
  // fetchData();
  // fetchTotalBill();
  // }, []);
  return (
    <div className="pay_container">
      <div className="pay_leftarrowdiv">
        <div className="pay_paybutton">Invoice</div>
      </div>
      {/* first card */}
      <div className="pay_firstcard">
        {/* <div>
          <div className="invoice_invoice">Invoice</div>
        </div>
        <hr className="invoice_hr" /> */}
        {/* <div className="bill_namerateimgdiv">
          <div className="invoice_nameheading">Name</div>
          <div className="invoice_qtheading">Qt</div>
          <div className="invoice_priceheading">Price</div>
        </div>
        <div>
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="bill_namerateimgdiv">
              
                <div className="invoice_foodname">{item.name}</div>
                <div className="nvoice_foodqt">{item.quantity}</div>
                
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
        </div> */}

        <div className="invoice_logoparentdiv">
          <div className="invoice_logodiv">
            <img src={restlogo} alt="" />
          </div>
          <div className="invoice_invoicenamediv">Restaurant</div>
        </div>

        <div>
          <div className="invoice_cdetailsdiv">
            <div className="invoice_chead">Customer Name :</div>
            <div>Chetan Mundle</div>
          </div>
          <div className="invoice_cdetailsdiv">
            <div className="invoice_chead">Customer Phone :</div>
            <div>9146249682</div>
          </div>
        </div>

        <div className="invoice_headingdivs invoice_fontbold">
          <div className="invoice_itemheaddiv">ITEM</div>
          <div>QTY</div>
          <div className="invoice_pricediv">
            <div>PRICE</div>
          </div>
          <div>AMOUNT</div>
        </div>

        <div>
          <div>
            {cartItems.ordermenus.map((item, index) => (
              <div key={index}>
                <div className="invoice_headingdivs">
                  <div className="invoice_itemheaddiv">{item.name}</div>
                  <div>{item.quantity}</div>
                  <div className="invoice_pricediv">
                    <div>&#8377;{item.discountedprice}</div>
                  </div>
                  <div>&#8377;{item.discountedprice * item.quantity}</div>
                </div>
              </div>
            ))}
          </div>
          <hr className="invoice_horizontal-line" />
          <div>
            <div className="invoice_subtotalparentdiv">
              <div className="font_bold">Subtotal : </div>
              <div>&#8377;{cartItems.billwithoutdiscount}</div>
            </div>
            <div className="invoice_subtotalparentdiv">
              <div className="font_bold">Discount : </div>
              <div>{cartItems.discountofRestaurnat}%</div>
            </div>
            <div className="invoice_subtotalparentdiv font_bold">
              <div className="">Total : </div>
              <div>&#8377;{cartItems.billwithdiscount}</div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={printpage}>print</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
