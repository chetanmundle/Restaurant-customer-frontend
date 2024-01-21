import React, { useEffect, useState } from "react";

const Test = () => {
  const savedRestId = JSON.parse(localStorage.getItem("restid"));
  const savedTableId = JSON.parse(localStorage.getItem("tableid"));

  console.log("RestID:", savedRestId);
  console.log("TableId:", savedTableId);
  return (
    <div className="text-white">
      {/* Your content goes here */}
      hello world
    </div>
  );
};

export default Test;
