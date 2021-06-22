import React from "react";
import Presentation from "./Presentation";
import { useStateValue } from "../../../../Utility/StateProvider";
const Container = (props) => {
  const [{ user }] = useStateValue();
  return (
    <div>
      <Presentation {...props} user={user} />
    </div>
  );
};

export default Container;
