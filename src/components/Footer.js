import React from "react";
import logo from "../images/logo.png";
import { BiLogoFacebookSquare, BiLogoInstagram } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-[100%]">
      <div className="flex py-10 justify-between items-center w-[80%] mx-auto">
      <img className="w-[100px] inline" src={logo} alt="" />
      <div className="flex flex-col text-center gap-2">
        <Link className="hover:text-blue-900 hover:underline transition-colors" href="">Местные экологические организации</Link>
        <Link className="hover:text-blue-900 hover:underline transition-colors" href="">Раздел "Полезные ресурсы"</Link>
        <Link className="hover:text-blue-900 hover:underline transition-colors" href="">экологические приложения</Link>
      </div>
      <div className="flex gap-4">
        <BiLogoInstagram className="text-[25px] cursor-pointer "/>
        <BiLogoFacebookSquare className="text-[25px] cursor-pointer "/>
        <FaYoutube className="text-[25px] cursor-pointer "/>
      </div>
    </div>
    </div>
  );
};

export default Footer;
