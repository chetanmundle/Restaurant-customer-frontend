import logo from "./logo.svg";
import "./App.css";
import Firstpage from "./components/Firstpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeMenu from "./components/Homemenu";
import Test from "./components/Test";
import Cart from "./components/Cart";
import Bill from "./components/Bill";
import Pay from "./components/Pay";
import Orderagain from "./components/Orderagain";
// import Samosa from "./images/foodidimg/samosa.jpg";
// import Chicken_Biryani from "./images/foodidimg/chicken_biryani.jpg";
// import Tandoori_fish from "./images/foodidimg/tandoori_fish.jpg";
// import Buttor_chicken from "./images/foodidimg/buttor_chicken.jpg";
// import panipuri from "./images/foodidimg/chicken_biryani.jpg";
// import vada from "./images/foodidimg/Vada.jpg";
// import hyderabadi_biryani from "./images/foodidimg/hyderabadi_biryani.jpg";
// import calcutta_biryani from "./images/foodidimg/Calcutta Biryani.jpg";
// import bombay_biryani from "./images/foodidimg/chicken_biryani.jpg";
// import pepperoni_pizza from "./images/foodidimg/Pepperoni Pizza.jpg";
// import cheese_pizza from "./images/foodidimg/Cheese Pizza.jpg";
// import meat_pizza from "./images/foodidimg/Meat Pizza.jpg";
// import hawaiian_pizza from "./images/foodidimg/Hawaiian Pizza.jpg";
// import pumpkin_soup from "./images/foodidimg/Pumpkin soup.jpg";
// import tomato_soup from "./images/foodidimg/tomato soup.jpg";
// import potato_soup from "./images/foodidimg/Potato soup.jpg";
// import lamb_hamburger from "./images/foodidimg/Hamburger.jpg";
// import cheese_burger from "./images/foodidimg/Cheese burger.jpg";
// import snackburger from "./images/foodidimg/snack burger.jpg";
// import greek_salad from "./images/foodidimg/Greek salad.jpg";
// import berry_salad from "./images/foodidimg/berry salad.jpg";
// import meal_salad from "./images/foodidimg/meal salad.jpg";
// import egg_roll from "./images/foodidimg/Egg roll.jpg";
// import spring_roll from "./images/foodidimg/spring-roll.jpg";
// import veg_biryani from "./images/foodidimg/veg biryani.jpg";
// import { useState } from "react";
import VegNonvegFood from "./components/VegNonvegFood";
import Test2 from "./components/Test2";
import FoodDetails from "./components/FoodDetails";
import Foodtypes from "./components/Foodtypes";
import RestState from "./context/restaurant/RestState";
import Invoice from "./components/Invoice";
// import Test from "./components/Test";

function App() {
  return (
    <>
      <RestState>
        <Router>
          <Routes>
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/:restid/:tableid" element={<Firstpage />} />
            <Route path="/homemenu" element={<HomeMenu />} />
            {/* <Route path="/test" element={<Test />} />
            <Route path="/test2" element={<Test2 />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/order" element={<Orderagain />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route
              path="/vegnonvegfood/:vegnonvegdata"
              element={<VegNonvegFood />}
            />
            <Route path="/fooddetails/:foodid" element={<FoodDetails />} />
            <Route
              path="/perticularfoodtype/:type/:basefoodname"
              element={<Foodtypes />}
            />
          </Routes>
        </Router>
      </RestState>
    </>
  );
}

export default App;
