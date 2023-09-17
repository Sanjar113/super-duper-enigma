import React, { useRef, useState } from "react";
import {
  AiFillYoutube,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiImageAddFill, RiLockPasswordFill } from "react-icons/ri";
import { PiCurrencyDollarBold, PiGenderFemaleFill } from "react-icons/pi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import {
  MdAccountCircle,
  MdApartment,
  MdElderly,
  MdSchool,
} from "react-icons/md";
const StudProfile = () => {
   const [glaza, setGlaza] = useState(true);
   const [selectedImage, setSelectedImage] = useState(null);
   const fileInputRef = useRef(null);

   const handleImageChange = (event) => {
     const file = event.target.files[0];
     if (file && file.type.startsWith("image/")) {
       const reader = new FileReader();
       reader.onload = function (event) {
         setSelectedImage(event.target.result);
       };
       reader.readAsDataURL(file);
     }
   };
   const handleIconClick = (event) => {
     event.stopPropagation();
     fileInputRef.current.click();
   };
  return (
    <div id="repProfile">
      <div className="container">
        <h1>Заполните свой профиль!</h1>
        <div className="repProfile">
          <div className="repProfile__img">
            <label
              htmlFor="fileInput"
              className="fileInputIcon"
              onClick={handleIconClick}
            >
              <RiImageAddFill />
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="selectedImageContainer">
                <img src={selectedImage} alt="Выбранное изображение" />
              </div>
            )}
          </div>
          <div className="repProfile__block">
            <div className="repProfile__block-input">
              <label htmlFor="al">Фио</label>
              <input type="text" />
              <MdAccountCircle className="icon" />
            </div>
            <div className="repProfile__block-input">
              <label htmlFor="al">Образование </label>
              <input type="number" />
              <SlCalender className="icon" />
            </div>
            <div className="repProfile__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Twitter</label>
                <BsTwitter className="icons" />
                <input type="text" />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Facebook</label>
                <BsInstagram className="iconsemail" />
                <input type="number" />
              </div>
            </div>
            <div className="repProfile__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="al">Instagram</label>
                <AiFillYoutube className="gender" />
                <input type="email" />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="al">YouTube</label>
                <BiLogoFacebook className="elderly" />
                <input type="text" />
              </div>
            </div>
            <div className="repProfile__block-button">
              <button>Войти</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudProfile