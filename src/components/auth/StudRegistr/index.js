import React, { useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiGenderFemaleFill } from "react-icons/pi";
import "./index.scss";
import {
  MdAccountCircle,
  MdAddIcCall,
  MdElderly,
  MdSchool,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
const StudRegistr = () => {
  const [modal, setModal] = useState(false);
  const [glaza, setGlaza] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = formData;

      if (!email || !password) {
        alert("Заполните все обязательные поля.");
        return;
      }
      const response = await axios.post(
        "http://34.34.188.208:8080/api/users/register-student",
        formData
      );
      console.log(response.data);
      if (!modal) {
        setModal(true);
        window.setTimeout(() => {
          setModal(false);
          nav("/studProfile");
        }, 3000);
      }
    } catch (error) {
      console.error("Error registering student:", error);
      alert("Error registering student:");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div id="studRegister">
      <div className="container">
        <div className="studRegister">
          <div className="studRegister__block">
            <h1>Регистрация для студента</h1>
            <div className="studRegister__block-info">
              <div style={{ width: "100%" }}>
                <label htmlFor="firstName">Имя</label>
                <MdAccountCircle className="icons" />
                <input type="text" name="firstName" onChange={handleChange} />
              </div>
              <div style={{ width: "100%" }}>
                <label htmlFor="lastName">Фамилия</label>
                <AiOutlineMail className="iconsemail" />
                <input type="text" name="lastName" onChange={handleChange} />
              </div>
            </div>
            <div className="studRegister__block-input">
              <label htmlFor="email">Почта</label>
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="studRegister__block-input">
              <label htmlFor="phone">Номер телефона</label>
              <input
                type="text"
                name="phone"
                pattern="[0-9]+"
                onChange={handleChange}
              />
              <MdAddIcCall className="icon" />
            </div>
            {glaza ? (
              <div className="studRegister__block-input">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="studRegister__block-input">
                <label htmlFor="password">Пароль</label>
                <input type="text" name="password" onChange={handleChange} />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="studRegister__block-btn">
              <p style={{ width: "300px" }}>
                У вас уже есть учетная запись?
                <Link to={"/studLogin"}>
                  <span>Войти!</span>
                </Link>
              </p>
              <Link style={{ width: "180px" }} to={"/forgatPassStud"}>
                <h4>Забыли пароль?</h4>
              </Link>
            </div>
            <div className="studRegister__block-button">
              <Link onClick={handleSubmit}>
                <button>Зарегистрироваться</button>
              </Link>
              <Link to={"/repRegistr"}>
                <button className="btn">Я не студент!</button>
              </Link>
            </div>
            <div
              style={{
                display: modal ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: "37%",
                top: "30%",
                width: "500px",
                height: "200px",
                background: "#004A60",
                zIndex: 1,
                fontSize: "18px",
                color: "#fff",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              Вы успешно зарегистрировались! <br />
              <TiTick style={{ width: "30px", height: "30px" }} />
            </div>
            <span>или</span>
            <div className="studRegister__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudRegistr;
