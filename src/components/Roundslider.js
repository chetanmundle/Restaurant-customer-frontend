import React from "react";
import Pizza from "../images/foodidimg/Pizza.jpg";
// import Pizza from "../public/images/foodidimg/Pizza.png";
import Soupe from "../images/foodidimg/Soupe.jpg";
import Roll from "../images/foodidimg/Roll.jpg";
import Burger from "../images/foodidimg/Burger.jpg";
import Salad from "../images/foodidimg/Salad.jpg";
import Vada from "../images/foodidimg/Vada.jpg";
import biryani from "../images/foodidimg/biryani.jpg";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import Link from "next/link";

const Roundslider = ({ type }) => {
  const items = [
    { id: 1, name: "Biryani", image: biryani, foodtype: "biryani" },
    { id: 2, name: "Pizza", image: Pizza, foodtype: "pizza" },
    { id: 3, name: "Soup", image: Soupe, foodtype: "soup" },
    { id: 4, name: "Burger", image: Burger, foodtype: "burger" },
    { id: 5, name: "Salad", image: Salad, foodtype: "salad" },
    { id: 6, name: "Vada", image: Vada, foodtype: "vada" },
    { id: 7, name: "Soup", image: Soupe, foodtype: "soup" },
    { id: 8, name: "Roll", image: Roll, foodtype: "roll" },
    { id: 9, name: "Soup", image: Soupe, foodtype: "soup" },
    { id: 10, name: "Roll", image: Roll, foodtype: "roll" },
  ];
  return (
    <div className="roundslider_container">
      <div className="roundeslider_seconddiv">
        <div className="roundslider_mapparent">
          {/* Using map function to render items */}

          {items.map((item) => (
            <div key={item.id}>
              <Link
                to={`/perticularfoodtype/${encodeURIComponent(
                  type
                )}/${encodeURIComponent(item.foodtype)}`}
              >
                <div className="roundslider_imgdiv">
                  <img
                    src={item.image}
                    className="roundslider_img"
                    alt={"img"}
                  />
                </div>
                {/* <div className="w-16 h-16 rounded-full">
                <Image src={Pizza} alt="img" className=""/>
              </div> */}
                <div className="rounslider_namediv">{item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div>
    //   <div className="mt-5 grid grid-cols-5 gap-2">
    // <div>
    //   <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-100 veg ml-2"></div>
    //   <div className="text-center">Pizza</div>
    // </div>
    //     <div>
    //       <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-100 veg"></div>
    //       <div className="text-center">soupe</div>
    //     </div>
    //     <div>
    //       <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-100 veg"></div>
    //       <div className="text-center">roll</div>
    //     </div>
    //     <div>
    //       <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-100 veg"></div>
    //       <div className="text-center">burger</div>
    //     </div>
    //     <div>
    //       <div className="rounded-full h-16 w-16 flex items-center justify-center bg-slate-100 veg"></div>
    //       <div className="text-center">salad</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Roundslider;
