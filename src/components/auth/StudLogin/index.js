import React, { useState } from "react";
import "./index.scss";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

const StudLogin = () => {
  const [glaza, setGlaza] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Заполните все обязательные поля.");
        return;
      }
      const requestData = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:8080/api/users/register-mentor",
        requestData
      );
      console.log(response.data); // Вывод данных из ответа
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };
  return (
    <div id="login">
      <div className="w-[100%]">
        <div className="login w-[80%] mx-auto">
          <div className="login__block">
            <h1>Вход для студента</h1>
            <div className="login__block-input">
              <label htmlFor="al">Почта</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <AiOutlineMail className="icon" />
            </div>
            {glaza ? (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="text" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="login__block-btn">
              <p style={{ width: "300px" }}>
                У вас нет учетной записи?{" "}
                <Link to={"/registr"}>
                  <span>Создайте учетную запись!</span>
                </Link>
              </p>
            </div>
            <div className="login__block-button">
              <button onClick={handleLogin}>Войти</button>
            </div>
            <span>или</span>
            <div className="login__block-icon">
              <FcGoogle size={"30px"} />
              <BsTwitter size={"30px"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudLogin;
