import React, { useEffect, useState, useContext } from "react";

// import "../../styles/ordernow.css";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

import { Link, useParams } from "react-router-dom";
import restContext from "../context/restaurant/restContext";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const FoodDetails = () => {
  // const [foodData, setFoodData] = useState(restdata.foodData);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [currentFood, setCurrentFood] = useState(undefined);
  const [iscurrentfood, setIsCurrentFood] = useState(false);
  const [loading, setLoading] = useState(true);

  const { foodid } = useParams();

  // const [foodname, setFoodname] = useState(foodData);

  const [cartItem, setCartItem] = useState([]);
  const [cartload, setCartload] = useState(0);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const status = 1;
        const response = await fetch(
          `https://royalwebtech-restaurant-production.up.railway.app/ordermenus/findidsofcartitem`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if needed
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

  useEffect(() => {
    // const foodidToFind = foodid;
    // const foundFood = foodname.find((item) => item.id == foodidToFind);

    // if (foundFood) {

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://royalwebtech-restaurant-production.up.railway.app/menu/getmenu/${JSON.parse(
            localStorage.getItem("restid")
          )}/${foodid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setIsCurrentFood(true);
          console.log("Current dATa : ", data);
          setCurrentFood(data);
          setLoading(false);
        } else {
          console.log("Error to fetching data");
        }
      } catch (error) {
        console.log("N/w error ");
      }
    };

    fetchData();

  
  }, [foodid]);

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

  // const foodidToFind = params.foodid;
  // const indexOfFood = foodname.findIndex((item) => item.foodid == foodidToFind);

  const handalRating = (index) => {
    const newStars = [...stars]; // Create a copy of the array
    // newStars[3] = true; // Set the 4th index to true
    // setStars(newStars); // Update the state
    for (var i = 0; i < 5; i++) {
      if (i <= index) {
        newStars[i] = true;
      } else {
        newStars[i] = false;
      }
    }
    setStars(newStars);
  };

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {iscurrentfood ? (
            <div className="foodid_container">
              <div>
                {/* <div className="text-2xl font-bold grid  grid-cols-9 pt-5 imgofbiryani"> */}
                {/* <div className="foodid_secoddiv ">
          <div>
            <button
              className="foodid_backbtn"
              onClick={() => {
                router.push("/menulist");
              }}
            >
              <FaArrowLeft />
            </button>
          </div>
  
          <div className="foodid_foodname">{foodname[indexOfFood].name}</div>
        </div> */}

                <div className="foodid_imgoffood">
                  <img
                    src={`${currentFood.foodimg}`}
                    alt="img"
                    className="rounded-b-3xl foodid_imgtop"
                  />
                
                </div>

                {/* Image of the food */}
                <div className="foodid_foodimg">
                  {/* Image details */}
                  <div className="foodid_fooddeatails">
                    <div className="">{currentFood.name}</div>
                    <div className="text-right">{currentFood.price} RS</div>
                  </div>
                  <div className="foodid_starmaindiv">
                    <div></div>
                    <div
                      onClick={() => {
                        handalRating(0);
                      }}
                    >
                      {/* <CiStar /> */}
                      {stars[0] ? (
                        <FaStar className="fooddetails_yellostar" />
                      ) : (
                        <CiStar />
                      )}
                    </div>
                    <div
                      onClick={() => {
                        handalRating(1);
                      }}
                    >
                      {/* <CiStar /> */}
                      {stars[1] ? (
                        <FaStar className="fooddetails_yellostar" />
                      ) : (
                        <CiStar />
                      )}
                    </div>
                    <div
                      onClick={() => {
                        handalRating(2);
                      }}
                    >
                      {/* <CiStar /> */}
                      {stars[2] ? (
                        <FaStar className="fooddetails_yellostar" />
                      ) : (
                        <CiStar />
                      )}
                    </div>
                    <div
                      onClick={() => {
                        handalRating(3);
                      }}
                    >
                      {/* <CiStar /> */}
                      {stars[3] ? (
                        <FaStar className="fooddetails_yellostar" />
                      ) : (
                        <CiStar />
                      )}
                    </div>
                    <div
                      onClick={() => {
                        handalRating(4);
                      }}
                    >
                      {/* <FaStar className="text-yellow-500"/> */}
                      {/* <CiStar /> */}
                      {stars[4] ? (
                        <FaStar className="fooddetails_yellostar" />
                      ) : (
                        <CiStar />
                      )}
                    </div>
                    <div className="foodid_review">(reviews)</div>
                  </div>

                  <div className="foodid_fooddeatilsdiv">Food Details</div>
                  <br />
                  <div className="foodid_detailsoffood">
                    {currentFood.fooddetails}
                  </div>
                  <div className=" foodid_nutritionsdiv">NUTRITIONS</div>
                  <br />
                  <div className="foodid_foodnutritionmaindiv">
                    <div className="foodid_carbsdiv ">
                      <div className="font-semibold">
                        {`${currentFood.carbs}`} gr
                      </div>
                      <div>carbs</div>
                    </div>
                    <div className="foodid_caloriesdiv">
                      <div className="font-semibold">
                        {`${currentFood.calories}`} gr
                      </div>
                      <div>calories</div>
                    </div>
                    <div className="foodid_proteinsdiv">
                      <div className="font-semibold">
                        {currentFood.proteins} gr
                      </div>
                      <div>proteins</div>
                    </div>
                  </div>
                </div>

                <div className="foodid_addtocarddiv">
                  {/* <button className="foodid_addtocardbtn">Add To Cart</button> */}

                  {cartItem.some(
                    (cartItem) => cartItem.id === currentFood.id
                  ) ? (
                    // If item is in the cart, show a link to the cart
                    <Link to="/cart">
                      <button className="foodid_addtocardbtn">
                        Go to Cart
                      </button>
                    </Link>
                  ) : (
                    // If item is not in the cart, show the "Add Cart" button
                    <button
                      className="foodid_addtocardbtn"
                      onClick={() => {
                        // restdata.addToCart(item.id);
                        // toast.success(item.name + " Added to cart", {
                        //   className: "custom-toast",
                        // });

                        if (addToCart(currentFood.id)) {
                          toast.success(currentFood.name + " Added to cart", {
                            className: "custom-toast",
                          });
                        }
                      }}
                    >
                      Add Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      <div>
        {/* div for loading  */}
        <div className="homemenu_loadingdiv">
          {loading && <CircularProgress style={{ color: "yellow" }} />}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
