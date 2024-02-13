import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import { useHistory } from 'react-router-dom';

const Firstpage = () => {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [className, setClassName] = useState("firstpage_sweetalertinputs");
  // const [restid, setRestid] = useState(1);
  // const [tableid, setTableid] = useState(1);

  // geting id of table and restauurant
  const { restid, tableid } = useParams();

  useEffect(() => {
    localStorage.setItem("restid", JSON.stringify(restid));
    localStorage.setItem("tableid", JSON.stringify(tableid));
  }, [restid, tableid]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 767;
      setClassName(isMobile ? "firstpage_sweetalertinputs" : "swal2-input");
    };
    handleResize();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      event.returnValue = "";
    });
  }, []);

  const isValidPhoneNumber = (phoneNumber) => {
    // Customize this regular expression based on your desired phone number format
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlebtnClick = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Enter Your Details",
      html: `
        <input id="cname" class="${className}" type="text" placeholder="Enter Your Name">
        <input id="cphone" class="${className}" type="number" placeholder="Enter Your Mobile Number" Maxlength=10>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById("cname").value;
        const phoneNumber = document.getElementById("cphone").value;

        // Validate phone number before returning the values
        if (!isValidPhoneNumber(phoneNumber)) {
          Swal.showValidationMessage("Invalid phone number");
          return false;
        }

        return [name, phoneNumber];
      },
    });

    if (formValues) {
      const [cname, cphone] = formValues;
      if (cname && cphone) {
        localStorage.setItem("cname", JSON.stringify(cname));
        localStorage.setItem("cphone", JSON.stringify(cphone));

        navigate("/homemenu");
      }
    }
  };

  // router.events.on("beforeExit", () => {
  //   setLoading(false); // Set loading to false when navigation is complete
  // });

  const words = ["Food Courtyard"];
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }

      const newPart = words[i].substr(0, offset);
      if (skipCount === 0) {
        setOffset((prevOffset) => (forwards ? prevOffset + 1 : prevOffset - 1));
      }

      setPart(newPart);
    }, speed);

    return () => {
      clearInterval(wordFlickInterval); // Clear the interval on component unmount
    };
  }, [forwards, offset, i, skipCount, words]);
  return (
    <div className={`firstpage_container `}>
      <div className="firstpage_staic_div1"></div>
      <div className="firstpage_staic_div2_parent">
        <div className="firstpage_staic_div2"></div>
      </div>
      <div className={`firstpage_container1 ${loading ? "blurred" : ""}`}>
        <div>
          {/* {foodname[3].name} */}
          <div className="firstpage_welcome">WELCOME TO</div>
          {/* <div className="firstpage_food ">Food Courtyard</div> */}
          <div className="firstpage_typewriter-container">
            <div className="firstpage_word firstpage_food">{part}</div>
          </div>
        </div>
        <div className="">
          <div className="firstpage_areyou">Are You Hungry</div>
          {/* <div className="firstpage_areyou"></div> */}
        </div>
        <div className="">
          <div className="firstpage_btndiv">
            {/* <Link to={"/homemenu"}>
              <button className="firstpage_btn" onClick={handlebtnClick}>
                Get Started
              </button>
            </Link> */}
            <button className="firstpage_btn" onClick={handlebtnClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
