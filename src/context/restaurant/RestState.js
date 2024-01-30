import React, { useEffect, useState } from "react";
import RestContext from "./restContext";
// import Samosa from "../../images"
import Samosa from "../../images/foodidimg/samosa.jpg";
import Chicken_Biryani from "../../images/foodidimg/chicken_biryani.jpg";
import Tandoori_fish from "../../images/foodidimg/tandoori_fish.jpg";
import Buttor_chicken from "../../images/foodidimg/buttor_chicken.jpg";
import panipuri from "../../images/foodidimg/panipuri.jpg";
import vada from "../../images/foodidimg/Vada.jpg";
import hyderabadi_biryani from "../../images/foodidimg/hyderabadi_biryani.jpg";
import calcutta_biryani from "../../images/foodidimg/Calcutta Biryani.jpg";
import bombay_biryani from "../../images/foodidimg/Bombay Biryani.jpg";
import pepperoni_pizza from "../../images/foodidimg/Pepperoni Pizza.jpg";
import cheese_pizza from "../../images/foodidimg/Cheese Pizza.jpg";
import meat_pizza from "../../images/foodidimg/Meat Pizza.jpg";
import hawaiian_pizza from "../../images/foodidimg/Hawaiian Pizza.jpg";
import pumpkin_soup from "../../images/foodidimg/Pumpkin soup.jpg";
import tomato_soup from "../../images/foodidimg/tomato soup.jpg";
import potato_soup from "../../images/foodidimg/Potato soup.jpg";
import lamb_hamburger from "../../images/foodidimg/Hamburger.jpg";
import cheese_burger from "../../images/foodidimg/Cheese burger.jpg";
import snackburger from "../../images/foodidimg/snack burger.jpg";
import greek_salad from "../../images/foodidimg/Greek salad.jpg";
import berry_salad from "../../images/foodidimg/berry salad.jpg";
import meal_salad from "../../images/foodidimg/meal salad.jpg";
import egg_roll from "../../images/foodidimg/Egg roll.jpg";
import spring_roll from "../../images/foodidimg/spring-roll.jpg";
import veg_biryani from "../../images/foodidimg/veg biryani.jpg";

const RestState = (props) => {
  const [restid, setRestid] = useState(1);
  const [tableid, setTableid] = useState(1);
  // const [foodData, setFoodData] = useState([
  //   {
  //     id: 1,
  //     name: "Chicken Biryani",
  //     islike: false,
  //     price: 320,
  //     image: Chicken_Biryani,
  //     isveg: false,
  //     discount: 20,
  //     foodtype: "biryani",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Chicken Biryani: A savory delight, richly spiced rice with succulent chicken, a fragrant blend of herbs and spices, a culinary masterpiece.",
  //   },
  //   {
  //     id: 2,
  //     name: "Samosa",
  //     islike: false,
  //     price: 120,
  //     image: Samosa,
  //     isveg: true,
  //     discount: 30,
  //     foodtype: "samosa",
  //     ispopular: false,
  //     carbs: 74,
  //     calories: 80,
  //     proteins: 56,
  //     fooddetails:
  //       "Samosa is a popular Indian snack filled with spiced potatoes, peas, and sometimes meat, wrapped in a thin pastry shell and deep-fried until crispy",
  //   },
  //   {
  //     id: 3,
  //     name: "Tandoori Fish",
  //     islike: false,
  //     price: 150,
  //     image: Tandoori_fish,
  //     isveg: false,
  //     discount: 0,
  //     foodtype: "fish",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A delectable dish featuring marinated fish, roasted to perfection with aromatic Indian spices, offering a delightful blend of flavors",
  //   },
  //   {
  //     id: 4,
  //     name: "Button Chicken",
  //     islike: false,
  //     price: 220,
  //     image: Buttor_chicken,
  //     isveg: false,
  //     discount: 45,
  //     foodtype: "chicken",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Button Chicken: Savory delight, tender and juicy. A perfect blend of spices in every bite. A culinary masterpiece that satisfies the palate with rich flavors",
  //   },
  //   {
  //     id: 5,
  //     name: "Panipuri",
  //     islike: false,
  //     price: 40,
  //     image: panipuri,
  //     isveg: true,
  //     discount: 55,
  //     foodtype: "panipuri",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Panipuri, a beloved street food, is a round, hollow puri filled with spicy tamarind water, chickpeas, potatoes, and aromatic spices, creating a burst of flavors in each bite",
  //   },
  //   {
  //     id: 6,
  //     name: "Vada",
  //     islike: false,
  //     price: 70,
  //     image: vada,
  //     isveg: true,
  //     discount: 0,
  //     foodtype: "vada",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Vada is a popular South Indian snack, consisting of deep-fried lentil or gram flour dumplings. Crispy on the outside and soft on the inside, it's often spiced with green chilies, ginger, and curry leaves",
  //   },
  //   {
  //     id: 7,
  //     name: "Goat Biryani",
  //     islike: false,
  //     price: 320,
  //     image: calcutta_biryani,
  //     isveg: false,
  //     discount: 50,
  //     foodtype: "biryani",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Succulent goat meat layered with aromatic long-grain rice and exotic spices, slow-cooked to perfection. A flavorful and hearty dish",
  //   },
  //   {
  //     id: 8,
  //     name: "Samosa",
  //     islike: false,
  //     price: 120,
  //     image: Samosa,
  //     isveg: true,
  //     discount: 60,
  //     foodtype: "samosa",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Samosa: A delectable Indian snack, stuffed with spiced potatoes and peas, encased in crispy, golden-brown pastry. A popular, savory treat enjoyed with chutney or as part of festive spreads.",
  //   },
  //   {
  //     id: 9,
  //     name: "Tandoori Fish",
  //     islike: false,
  //     price: 150,
  //     image: Tandoori_fish,
  //     isveg: false,
  //     discount: 35,
  //     foodtype: "fish",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A flavorful dish featuring marinated fish, traditionally cooked in a tandoor (clay oven). Infused with aromatic spices, it offers a tantalizing blend of smokiness and tenderness, making it a popular choice in Indian cuisine",
  //   },
  //   {
  //     id: 10,
  //     name: "Button Chicken",
  //     islike: false,
  //     price: 220,
  //     image: Buttor_chicken,
  //     isveg: false,
  //     discount: 25,
  //     foodtype: "chichen",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A savory delight showcasing succulent chicken cooked to perfection. Tantalizing taste and texture, enhanced with flavorful spices. A delectable choice for those craving a satisfying and hearty chicken experience",
  //   },
  //   {
  //     id: 11,
  //     name: "Panipuri",
  //     islike: false,
  //     price: 40,
  //     image: panipuri,
  //     isveg: true,
  //     discount: 30,
  //     foodtype: "panpuri",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Panipuri, a beloved street food, is a round, hollow puri filled with spicy tamarind water, chickpeas, potatoes, and aromatic spices, creating a burst of flavors in each bite",
  //   },
  //   {
  //     id: 12,
  //     name: "Vada",
  //     islike: false,
  //     price: 70,
  //     image: vada,
  //     isveg: true,
  //     discount: 50,
  //     foodtype: "vada",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "Vada is a popular South Indian snack, consisting of deep-fried lentil or gram flour dumplings. Crispy on the outside and soft on the inside, it's often spiced with green chilies, ginger, and curry leaves",
  //   },
  //   {
  //     id: 13,
  //     name: "Hyderabadi Biryani",
  //     islike: false,
  //     price: 360,
  //     image: hyderabadi_biryani,
  //     isveg: false,
  //     discount: 10,
  //     foodtype: "biryani",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A renowned Indian dish originating from Hyderabad, featuring basmati rice, marinated meat, and aromatic spices. Slow-cooked to perfection, it's a flavorful blend of cultural heritage and culinary excellence",
  //   },
  //   {
  //     id: 14,
  //     name: "Calcutta Biryani",
  //     islike: false,
  //     price: 360,
  //     image: calcutta_biryani,
  //     isveg: false,
  //     discount: 10,
  //     foodtype: "biryani",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A unique twist on the traditional biryani, originating from Kolkata. Fragrant basmati rice, spiced meat, and potatoes cooked together, creating a delectable fusion of flavors synonymous with the city's culinary charm",
  //   },
  //   {
  //     id: 15,
  //     name: "Bombay Biryani",
  //     islike: false,
  //     price: 160,
  //     image: bombay_biryani,
  //     isveg: false,
  //     discount: 0,
  //     foodtype: "biryani",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A Mumbai-inspired culinary delight, combining fragrant basmati rice, spiced meat, and a medley of aromatic spices. This biryani offers a flavorful journey with every aromatic bite, capturing the essence of Bombay's diverse cuisine",
  //   },
  //   {
  //     id: 16,
  //     name: "Cheese Pizza",
  //     islike: false,
  //     price: 250,
  //     image: cheese_pizza,
  //     isveg: true,
  //     discount: 15,
  //     foodtype: "pizza",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A classic favorite with a simple yet irresistible appeal. A thin crust topped with a generous layer of gooey melted cheese. The epitome of comfort and satisfaction in every cheesy slice.",
  //   },
  //   {
  //     id: 18,
  //     name: "Pepperoni Pizza",
  //     islike: false,
  //     price: 450,
  //     image: pepperoni_pizza,
  //     isveg: true,
  //     discount: 25,
  //     foodtype: "pizza",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A timeless classic, featuring a thin crust adorned with zesty tomato sauce, melted cheese, and savory pepperoni slices. A flavor-packed pizza that satisfies with its perfect blend of spices and textures",
  //   },
  //   {
  //     id: 19,
  //     name: "Meat Pizza",
  //     islike: false,
  //     price: 550,
  //     image: meat_pizza,
  //     isveg: false,
  //     discount: 5,
  //     foodtype: "pizza",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A hearty pizza indulgence loaded with a variety of savory meats. From seasoned ground beef to flavorful sausage and ham, each bite delivers a meaty symphony of taste, making it a carnivore's delight.",
  //   },
  //   {
  //     id: 21,
  //     name: "Hawaiian Pizza",
  //     islike: false,
  //     price: 570,
  //     image: hawaiian_pizza,
  //     isveg: false,
  //     discount: 10,
  //     foodtype: "pizza",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A tropical twist on the classic, topped with ham, pineapple, and melted cheese. This sweet-meets-savory combination creates a delightful and refreshing flavor profile, capturing the essence of the Hawaiian islands.",
  //   },
  //   {
  //     id: 22,
  //     name: "Pumpkin soup",
  //     islike: false,
  //     price: 570,
  //     image: pumpkin_soup,
  //     isveg: false,
  //     discount: 25,
  //     foodtype: "soup",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A comforting and velvety soup crafted from rich, pureed pumpkins. Infused with aromatic spices and herbs, it offers a warm and nourishing experience, perfect for cozy evenings and autumn cravings.",
  //   },
  //   {
  //     id: 23,
  //     name: "Tomato soup",
  //     islike: false,
  //     price: 170,
  //     image: tomato_soup,
  //     isveg: true,
  //     discount: 15,
  //     foodtype: "soup",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A timeless classic known for its simplicity and heartiness. Bursting with the natural sweetness of ripe tomatoes, this comforting soup is seasoned to perfection, creating a warm and satisfying bowl.",
  //   },
  //   {
  //     id: 24,
  //     name: "Potato soup",
  //     islike: false,
  //     price: 110,
  //     image: potato_soup,
  //     isveg: true,
  //     discount: 20,
  //     foodtype: "soup",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A hearty and creamy delight featuring tender potatoes in a velvety broth. Seasoned to perfection with herbs and spices, it delivers a comforting and satisfying bowl, perfect for chilly days",
  //   },
  //   {
  //     id: 25,
  //     name: "Lamb Burger",
  //     islike: false,
  //     price: 210,
  //     image: lamb_hamburger,
  //     isveg: false,
  //     discount: 24,
  //     foodtype: "burger",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       " A gourmet treat showcasing succulent lamb patty, seasoned to perfection, nestled in a soft bun. Topped with flavorful condiments, it's a savory delight for those seeking a unique burger experience.",
  //   },
  //   {
  //     id: 26,
  //     name: "Cheese Burger",
  //     islike: false,
  //     price: 310,
  //     image: cheese_burger,
  //     isveg: true,
  //     discount: 15,
  //     foodtype: "burger",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A classic favorite, featuring a juicy beef patty topped with melted cheese. Nestled in a soft bun and complemented with condiments, it delivers a timeless and satisfying cheeseburger experience",
  //   },
  //   {
  //     id: 27,
  //     name: "Snack Burger",
  //     islike: false,
  //     price: 250,
  //     image: snackburger,
  //     isveg: true,
  //     discount: 25,
  //     foodtype: "burger",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A delightful mini-burger perfect for quick bites. Featuring a compact patty, flavorful toppings, and a soft bun, it offers a delicious snack-sized experience for those on the go.",
  //   },
  //   {
  //     id: 28,
  //     name: "Greek Salad",
  //     islike: false,
  //     price: 250,
  //     image: greek_salad,
  //     isveg: true,
  //     discount: 15,
  //     foodtype: "salad",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A refreshing and wholesome dish featuring crisp lettuce, juicy tomatoes, cucumbers, Kalamata olives, and feta cheese. Tossed in a tangy vinaigrette, it's a vibrant and flavorful representation of Mediterranean cuisine",
  //   },
  //   {
  //     id: 29,
  //     name: "Berry Salad",
  //     islike: false,
  //     price: 250,
  //     image: berry_salad,
  //     isveg: true,
  //     discount: 25,
  //     foodtype: "salad",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A delightful medley of fresh berries, such as strawberries, blueberries, and raspberries, combined with crisp greens. Tossed in a light dressing, this salad offers a sweet and refreshing burst of flavors",
  //   },
  //   {
  //     id: 30,
  //     name: "Meal Salad",
  //     islike: false,
  //     price: 250,
  //     image: meal_salad,
  //     isveg: true,
  //     discount: 0,
  //     foodtype: "salad",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A hearty and nutritious salad combining a variety of ingredients like greens, protein sources, vegetables, and grains. This well-balanced dish is a satisfying and flavorful option for those looking for a complete and wholesome meal.",
  //   },
  //   {
  //     id: 31,
  //     name: "Egg Roll",
  //     islike: false,
  //     price: 150,
  //     image: egg_roll,
  //     isveg: false,
  //     discount: 10,
  //     foodtype: "roll",
  //     ispopular: false,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A savory delight featuring a crispy outer layer enveloping a flavorful filling of eggs, vegetables, and sometimes meat. Often served with sauces, it's a popular street food known for its satisfying taste and portable convenience.",
  //   },
  //   {
  //     id: 32,
  //     name: "Spring Roll",
  //     islike: false,
  //     price: 150,
  //     image: spring_roll,
  //     isveg: true,
  //     discount: 15,
  //     foodtype: "roll",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A light and crispy delicacy filled with a medley of vegetables, sometimes including meats or seafood. Encased in a thin, translucent wrapper, these rolls are typically served with dipping sauces, offering a delicious blend of textures and flavors.",
  //   },
  //   {
  //     id: 33,
  //     name: "Veg Biryani",
  //     islike: false,
  //     price: 160,
  //     image: veg_biryani,
  //     isveg: true,
  //     discount: 25,
  //     foodtype: "biryani",
  //     ispopular: true,
  //     carbs: 84,
  //     calories: 60,
  //     proteins: 50,
  //     fooddetails:
  //       "A flavorful and aromatic rice dish made with fragrant basmati rice, mixed vegetables, and a blend of spices. Slow-cooked to perfection, it delivers a delightful and wholesome vegetarian biryani experience.",
  //   },
  // ]);
  const [foodData, setFoodData] = useState([]);

  const [cartItem, setCartItem] = useState([]);
  const [totalBill, setTotalBill] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/menu/getallmenus/1"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFoodData(data); // Assuming the response is an array of menu items
        
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // console.log("foodData : ",foodData);

  useEffect(() => {
    // Calculate totalBill based on discounted prices
    const calculateTotalBill = () => {
      let total = 0;

      // Iterate through each item in cartItem
      cartItem.forEach((item) => {
        // Assuming each item has a property 'discountedPrice'
        if (item.discountedPrice) {
          total += item.discountedPrice;
        }
        // You can modify the condition based on your actual data structure
      });

      // Set the totalBill state with the calculated total
      setTotalBill(total);
    };

    // Call the function to calculate totalBill
    calculateTotalBill();
  }, [cartItem]);

  // save data in loacal Strorage
  // useEffect(() => {
  //   localStorage.setItem("restid", JSON.stringify(restid));
  //   localStorage.setItem("tableid", JSON.stringify(tableid));
  // }, [restid, tableid]);

  // Function to add item to cart based on id
  const addToCart = (id) => {
    const selectedItem = foodData.find((item) => item.id === id);

    // Check if the item is already in the cart
    const isItemInCart = cartItem.find((item) => item.id === id);

    if (!isItemInCart) {
      // Calculate the discounted price
      const discountedPrice =
        selectedItem.price - (selectedItem.price * selectedItem.discount) / 100;

      // If not in cart, add the item to the cartItem state with quantity set to 1 and discounted price
      setCartItem((prevCart) => [
        ...prevCart,
        { ...selectedItem, quantity: 1, discountedPrice },
      ]);
    }
  };

  // Function to increment the quantity of an item in the cart
  const incrementQuantity = (id) => {
    setCartItem((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              discountedPrice:
                (item.price - (item.price * item.discount) / 100) *
                (item.quantity + 1),
            }
          : item
      )
    );
  };

  // Function to decrement the quantity of an item in the cart
  const decrementQuantity = (id) => {
    setCartItem(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  discountedPrice:
                    (item.price - (item.price * item.discount) / 100) *
                    (item.quantity - 1),
                }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  return (
    <RestContext.Provider
      value={{
        restid,
        tableid,
        foodData,
        addToCart,
        cartItem,
        incrementQuantity,
        decrementQuantity,
        totalBill,
      }}
    >
      {props.children}
    </RestContext.Provider>
  );
};

export default RestState;
