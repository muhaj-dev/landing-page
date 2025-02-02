import React from "react";
import { BsClipboard2 } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import "../ContactUs.css";

export const LMEO = () => {
  return (
    <div className="LMEO_container">
      <div className="LMEO_Content">
        <div className="lmeo_Icon_Text">
          <CiLocationOn className="lmeo_Icon" />
          <p className="lmeo_Text">Location</p>
        </div>
        <p className="lmeo_black_Text">
         Suite 4, Right Wing, SUG Secretariat, Bayero University Kano
        </p>
      </div>

      <div className="LMEO_Content">
        <div className="lmeo_Icon_Text">
          <FiPhone className="lmeo_Icon" />
          <p className="lmeo_Text">Mobile</p>
        </div>
        <p className="lmeo_black_Text">+2348059303261, +2348038156896</p>
      </div>

      <div className="LMEO_Content">
        <div className="lmeo_Icon_Text">
          <CiMail className="lmeo_Icon" />
          <p className="lmeo_Text">Email</p>
        </div>
        <p className="lmeo_black_Text">info@diboruwa.com</p>
      </div>

      <div className="LMEO_Content">
        <div className="lmeo_Icon_Text">
          <BsClipboard2 className="lmeo_Icon" />
          <p className="lmeo_Text">Office Hours</p>
        </div>
        <p className="lmeo_black_Text">8am - 5pm monday to friday</p>
      </div>
    </div>
  );
};
