import React from "react";
import "./Main.css";
import { data } from "./Data";
import Dropdown from "./Dropdown";

const Main = () => {
  return (
    <div className="flex flex-col	 items-start">
      <div className="flex child-id mt-4">
        <div className="flex flex-row justify-center align-center ml-3">
          <div className="mr-9 text-xs w-4 mb-2 flex justify-center align-center font-bold main-icon	"> E </div>
          <p className="main-name"> Evelin (You)</p>
        </div>
        <span className="font-normal text-sm leading-4	main-owner owner"> Owner </span>
      </div>

      {data.map((currtEl) => {
        return (
          <>
            <div className="flex child-id mt-4">
              <div className="flex flex-row justify-center align-center ml-3">
                <div className="main-icon mr-9 text-xs w-4 flex justify-center align-center font-bold" style={{"background-color": currtEl.bgcolor }}> {currtEl.icon} </div>
                <p className="main-name"> {currtEl.name}</p>
              </div>
              <div className="font-normal text-sm leading-4	main-owner ">
                <span >
                  {" "}
                  <Dropdown />{" "}
                </span>
              </div>
            </div>
          </>
        );
      })}

      
    </div>
  );
};

export default Main;
