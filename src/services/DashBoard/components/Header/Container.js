import React from "react";
import Presentation from "./Presentation";
import { useStateValue } from "../../../../Utility/StateProvider";
const Container = () => {
  const [{ user }] = useStateValue();
  return (
    <div>
      <Presentation user={user} />
    </div>
  );
};

export default Container;
