import React from "react";
import Presentation from "./Presentation";
import { auth, provider } from "../../../../config/firebaseConfig";
import { useStateValue } from "../../../../Utility/StateProvider";
import { actionTypes } from "../../../../Utility/reducer";
const Container = () => {
  const [state, dispatch] = useStateValue;
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <Presentation SignIn={SignIn} />
    </div>
  );
};

export default Container;
