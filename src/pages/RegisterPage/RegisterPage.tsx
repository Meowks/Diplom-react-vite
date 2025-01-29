import { SLoginPage } from "../loginPage/LoginPage.styled";
import { useState } from "react";


interface IRegisterPageProps {

}

export const RegisterPage = ({ }: IRegisterPageProps) => {

  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  function saveLocal() {
    if (formData.name && formData.password) {
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Данные сохранены!");
    } else {
      alert("Заполните все поля!");
    }
  }

  return (
    <SLoginPage>
      <h1>Регистрация</h1>
      <div className="submit_wrapper">

        <input 
          className="input_wrapper" 
          type="text" 
          placeholder="Ваше имя" 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        <input 
          className="input_wrapper" 
          type="password" 
          placeholder="Создайте пароль" 
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        <button className="button_submit" onClick={saveLocal}>Зарегистрироваться</button>
      </div>
      <div className="reg_wrapper">
        <span>Уже зарегистрированны?</span>
        <a href="/">Авторизоватся</a>
      </div>
    </SLoginPage>
  );
};
