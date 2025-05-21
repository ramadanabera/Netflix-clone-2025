import React from "react";
import "./Header.css";
import netflix_logo from "./../../assets/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_inner_container">
          <div className="header_left">
            <ul className="header_list_style">
              <li>
                <a href="#">
                  <img
                    className="netflix_logo"
                    src={netflix_logo}
                    alt="netflix-logo"
                  />
                </a>
              </li>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tvshows">TV Shows</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/latest">Latest</Link>
                </li>
                <li>
                  <Link to="/my-list">My List</Link>
                </li>
                <li>
                  <Link to="/languages">Browse by Languages</Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="header_right">
            <ul className="header_list_style">
              <li>
                <a href="#">
                  <SearchIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <NotificationsIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <AccountBoxIcon />
                </a>
              </li>
              <li>
                <a href="#">
                  <ArrowDropDownIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
