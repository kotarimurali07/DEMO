import React from "react";
import "../styles/Google.css";
import Button from "@material-ui/core/Button";

const Presentation = (props) => {
  const { SignIn } = props;
  return (
    <div className="login">
      <div className="login__container">
        <Button variant="contained" color="primary" onClick={SignIn}>
          Google
        </Button>
      </div>
    </div>
  );
};

export default Presentation;
