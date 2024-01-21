import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const Firstpage = () => {
  //   const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      event.returnValue = "";
    });
  }, []);

  const handlebtnClick = async () => {
    setLoading(true); // Set loading to true before navigation
    console.log(11);

    // await router.push("/menulist");
  };

  // router.events.on("beforeExit", () => {
  //   setLoading(false); // Set loading to false when navigation is complete
  // });
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
          <div className="firstpage_food">Food Courtyard</div>
        </div>
        <div className="">
          <div className="firstpage_areyou">Are You</div>
          <div className="firstpage_areyou">Hungry</div>
        </div>
        <div className="">
          <div className="firstpage_btndiv">
            {/* <button className="firstpage_btn" onClick={handlebtnClick}>
              Get Started */}
            {/* {loading ? "Loading..." : "Get Started"}  */}
            {/* </button> */}

            {/* <Link href={`/menulist`}>
              <button className="firstpage_btn" >
                Get Started
              </button>
            </Link> */}
            <Link to={"/homemenu"}>
              <button className="firstpage_btn" onClick={handlebtnClick}>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      {loading && (
        <div className="loading-overlay firstpage_loadingicon">
          <div
            id="loading-custom-icon"
            className="h-[300px] w-full flex items-center justify-center"
          >
            <div
              data-te-loading-management-init
              data-te-parent-selector="#loading-custom-icon"
            >
              <div
                data-te-loading-icon-ref
                className="inline-block h-8 w-8 animate-spin border-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="[&>svg]:w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Firstpage;
