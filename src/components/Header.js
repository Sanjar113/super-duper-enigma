import React from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="w-[100%] z-10">
      <div className="text-white  w-full">
        <div className="bg-[#3b3b3b]">
          <div className="w-[80%] m-auto py-1">
            <div className="flex justify-between">
              <div className="flex w-full justify-between items-center">
                <div className="flex gap-4 text-[0.8rem]">
                  <a
                    className="font-medium hover:text-orange-600 transition-colors cursor-pointer"
                    href="#"
                  >
                    ТУРИСТИЧЕСКИЙ ПУТЕВОДИТЕЛЬ ПО КЫРГЫЗСТАНУ
                  </a>
                  <a
                    className="font-medium hover:text-orange-600 transition-colors cursor-pointer"
                    href="#"
                  >
                    Контакты
                  </a>
                  <div className="font-medium">
                    <span className="hover:text-orange-600 transition-colors cursor-pointer">
                      English
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <NavLink to={'/login'} className="hover:text-orange-600 transition-colors cursor-pointer">
                    Войти
                  </NavLink>
                  <BiLogoInstagram
                    href="google.com"
                    className="hover:text-orange-600 transition-colors cursor-pointer"
                  />
                  <FaFacebookF className="hover:text-orange-600 transition-colors cursor-pointer" />
                  <AiFillYoutube className="hover:text-orange-600 transition-colors cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="head"
          className="w-full h-full sticky top-0 py-3 text-[15px] font-medium text-[#202020]"
        >
          <div className="w-[80%] m-auto flex justify-between items-center">
            <div className="flex items-start">
              <Link to="/">
                <img src={Logo} className="w-[50px] cursor-pointer" />
              </Link>
              <ul className="uppercase flex gap-8">
                <Link to="about">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    О нас
                  </li>
                </Link>
                <Link to="where">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    Куда поехать
                  </li>
                </Link>
                <Link to="tours">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    Туры
                  </li>
                </Link>
                <Link to="gallery">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    Галерея
                  </li>
                </Link>
                <Link to="hotels">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    Отели
                  </li>
                </Link>
                <Link to="flights">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    Рейсы
                  </li>
                </Link>
                <Link to="map">
                  <li className="cursor-pointer hover:text-orange-600 transition-colors">
                    карта
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex bg-gray-200 px-2 py-1 items-center">
              <input
                type="text"
                placeholder="Поиск"
                className="text-normal placeholder:font-normal outline-none bg-transparent "
              />
              <FiSearch className="text-orange-600 text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
