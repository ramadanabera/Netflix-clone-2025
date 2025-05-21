import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <>
      <div className="outer_footer_container">
        <div className="inner_footer_container">
          <div className="footer_columons">
            <div>
              <div className="social_medias_icons">
                <p>
                  <li>
                    <a href="#">
                      <FacebookOutlinedIcon />
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="#">
                      <InstagramIcon />
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <a href="#">
                      <YouTubeIcon />
                    </a>
                  </li>
                </p>
              </div>
              <div className="footer_list">
                <ul>
                  <li>
                    <a href="">Audio Description</a>
                  </li>
                  <li>
                    <a href="">Investor Relations</a>
                  </li>
                  <li>
                    <a href="">Legal Notice</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_list coloumn_top_padding">
              <ul>
                <li>
                  <a href="">Help Center</a>
                </li>
                <li>
                  <a href="">Jobs</a>
                </li>
                <li>
                  <a href="">Cookies Preferences</a>
                </li>
              </ul>
            </div>
            <div className="footer_list coloumn_top_padding">
              <ul>
                <li>
                  <a href="">Gift Cards</a>
                </li>
                <li>
                  <a href="">Terms of Use</a>
                </li>
                <li>
                  <a href="">Corporate Information</a>
                </li>
              </ul>
            </div>
            <div className="footer_list coloumn_top_padding">
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_copyRight_text">
            <p className="service_code">Service Code</p>
            <p>
              <span style={{ color: "blue" }}>&copy;</span> 1997-2024
              Netflix.inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
