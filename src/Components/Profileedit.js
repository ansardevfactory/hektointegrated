import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Profileedit.css";
export default function Profileedit() {
  return (
    <>
      <div className="profileedit">
        <div className="profileedit_outer">
          <div className="profileedit_row1">
            <div className="profileedit_row1_img">
              {/* <div className="profileedit_row1_img_circle"> */}
              <FaUserCircle style={{ fontSize: "150" }} />
              {/* </div> */}
            </div>
            <div className="profileedit_row1_label">
              <label>Welcome back Vinay</label>
            </div>
          </div>
          <div className="profileedit_row2">
            <div className="profileedit_row2_row1">
              <div className="profileedit_row2_row1_col1">
                <label>First name</label>
              </div>
              <div className="profileedit_row2_row1_col2">
                <label>Last name</label>
              </div>
            </div>
            <div className="profileedit_row2_row2">
              <label>Phone</label>
            </div>
            <div className="profileedit_row2_row3">
              <label>Email</label>
            </div>
            <div className="profileedit_row2_row4">
              <div className="profileedit_row2_row4_col1">
                <label>Password</label>
              </div>
              <div className="profileedit_row2_row4_col2">
                <label>RePassword</label>
              </div>
            </div>
          </div>
          <div className="profileedit_row3">
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
