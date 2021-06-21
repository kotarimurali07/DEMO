import React from "react";
import "../styles/Header.css";
import { Avatar, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
const Presentation = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="murali" src="" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Presentation;
