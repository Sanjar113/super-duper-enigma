import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineMail,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const ForgatPassStud = () => {
  const [glaza, setGlaza] = useState(true);
  return (
    <div id="login">
      <div className="container">
        <div className="login">
          <div className="login__block">
            <h1>Восстановление пароля</h1>
            <div className="login__block-input">
              <label htmlFor="al">Почта</label>
              <input type="email" required />
              <AiOutlineMail className="icon" />
            </div>
            {glaza ? (
              <div className="login__block-input">
                <label htmlFor="al">Пароль</label>
                <input type="password" />
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
            {glaza ? (
              <div className="login__block-input">
                <label htmlFor="al">Подтверждение нового пароля</label>
                <input type="password" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEyeInvisible
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            ) : (
              <div className="login__block-input">
                <label htmlFor="al">Подтверждение нового пароля</label>
                <input type="text" />
                <RiLockPasswordFill className="icon" />
                <AiOutlineEye
                  className="glaza"
                  onClick={() => setGlaza(!glaza)}
                />
              </div>
            )}
            <div className="login__block-button">
              <Link to={"/studLogin"}>
                <button
                  style={{ display: 'flex',gap:'10px',background: "none", border: "1px solid #fff" }}
                >
                  <MdOutlineKeyboardBackspace size={'19px'}/>назад
                </button>
              </Link>
              <button>Войти</button>
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

export default ForgatPassStud;
