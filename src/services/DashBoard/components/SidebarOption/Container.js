import React from "react";
import Presentation from "./Presentation";
const Container = (props) => {
  //   console.log(props);
  return (
    <div>
      <Presentation {...props} />
    </div>
  );
};

export default Container;
