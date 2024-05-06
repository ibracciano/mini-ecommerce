// import React from 'react'
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-5 py-5 bg-white dark:bg-slate-950">
      <div className="flex items-center justify-center gap-5 ">
        <div className="flex items-center gap-2 ">
          <FaFacebook size={25} style={{ color: "blue" }} />
          <FaInstagram size={30} style={{ color: "purple" }} />
          <TiSocialYoutubeCircular size={32} style={{ color: "red" }} />
        </div>
        <p className="text-sm dark:text-white">© eShop - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
