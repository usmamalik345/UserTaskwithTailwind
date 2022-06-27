import React from "react";
import "./Footer.css";
import { BiLinkAlt } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-start mt-4 ml-4 footer_row">
      <div className="main-footer mt-2 ">
        <div>
          <BiLinkAlt className=" text-xs inline footer-icon" />
          <span className="font-medium	text-sm	leading-5 footer-link ">
            {" "}
            Copy story Link{" "}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="font-medium	ml-48 mr-1 leading-5	footer_link">Anyone with link: </p>
        <button className="leading-5 text-sm font-normal can_view	">
          Can view
          <svg
            className="-mr-1 ml-2 h-5 w-5 svg_color inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>{" "}
        </button>
      </div>
    </div>
  );
};

export default Footer;
