import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate=useNavigate();
  return (
    <div
      style={{ position: "absolute", top: "0", width: "100%", zIndex: "999",left:"0" }}
    >
      <div
        className="ui borderless black inverted menu"
        style={{
          borderRadius: "0",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="ui  item " style={{ alignSelf: "center" }}>
          <a className="active item" onClick={()=>navigate("/about")}>About Us</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
