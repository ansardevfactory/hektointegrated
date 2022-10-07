import React from "react";
import "./Menubar.css";

export default function Menubar() {
  return (
    <>
      <div className="menubar">
        <ul>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
          <li>
            <label className="menubar_title">Mobile</label>
            <Popup />
          </li>
        </ul>
      </div>
    </>
  );
}

function Popup() {
  return (
    <>
      <div className="menubar_popup">
        <div className="menubar_popup_left">
          <ul>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
          </ul>
        </div>
      </div>
    </>
  );
}
