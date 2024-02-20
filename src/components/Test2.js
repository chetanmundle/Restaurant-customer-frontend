import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Test2 = () => {
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://44a6-2405-201-1003-980c-5d0f-9bc8-3b67-dc74.ngrok-free.app/restaurant/getall`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (response.ok) {
          const data = await response.json(); // Await the response.json() to properly get the data

          console.log("DAta : ", data);
        } else if (response.status === 404) {
          console.log("404");
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
      } finally {
        // setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return <div>Hello</div>;
};

export default Test2;
