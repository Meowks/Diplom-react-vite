import { SLoginPage } from "./LoginPage.styled";

interface ILoginPageProps {

}

export const LoginPage = ({}: ILoginPageProps) => {
  return (
    <SLoginPage>
      <h1>Авторизация</h1>
      <div className="submit_wrapper">

        <input className="input_wrapper" type="text" placeholder="Ваше имя" />
        <input className="input_wrapper" type="password" placeholder="Введите пароль" />
        <button className="button_submit">Войти</button>
      </div>
      <div className="reg_wrapper">
        <span>Нет аккаунта?</span>
        <a href="/registration">Зарегистрироваться</a>
      </div>
    </SLoginPage>
  );
};
