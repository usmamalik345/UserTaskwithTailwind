import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header ">
      <p className="w-18 h-1.2 font-black text-xs-15 leading-6 mt-4 mb-2 ml-3 users "> Invite users </p>
      <div className="flex items-center  flex-row mb-3 pt-2 gap-6 user-input ">
        <input
          type="text"
          className=" box-border border-2 border-#D5D5D5 rounded	w-96 h-8 bg-#FFFFFF pl-2 "
          placeholder="   Email (Press enter for multiple)"
        />
        <div className="flex flex-row  justify-center items-center gap-6 w-28 h-8 rounded user-btn">
          <button className="w-28 h-10 font-bold  leading-5 butn"> Send invite </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
