import { useSelector } from "react-redux";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SLoginPage } from "./LoginPage.styled";

import * as yup from "yup";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../store/firebase-config";


const AuthFormScheme = yup.object({
  userEmail: yup
    .string()
    .required("Email обязателен")
    .email("Введите корректный email")
    .min(4, "Введите минимум 4 символа")
    .max(30, "Не больше 30 символов"),

  userPassword: yup
    .string()
    .required("Пароль обязателен")
    .min(6, "Минимум 6 символов")
    .max(30, "Не больше 30 символов"),
});
interface ILoginPageProps {
  userEmail: string;
  userPassword: string;
}

export const LoginPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPageProps>({
    resolver: yupResolver(AuthFormScheme),
    defaultValues: {
      userEmail: `${user?.email ? user.email : ""}`,
      userPassword: `${user?.password ? user.password : ""}`,
    }
  })

  const formData: SubmitHandler<ILoginPageProps> = async (data) => {

    signInWithEmailAndPassword(auth, data.userEmail, data.userPassword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user) {
          navigate("main-page")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          alert(`"Пользователь с данным Email не зарегестрирован" или "Введен не верный пароль"`)
        } 
      });
  }
  return (
    <SLoginPage>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(formData)}>

        <div className="submit_wrapper">
          <Controller
            control={control}
            name="userEmail"
            render={({ field }) => (
              <AppInput
                inputClassName="input_wrapper"
                inputPlaceholder="Ваша почта"
                inputType="email"
                {...field}

                inputValue={field.value}
                isError={!!errors.userEmail}
                errorText={errors.userEmail?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="userPassword"
            render={({ field }) => (
              <AppInput
                inputClassName="input_wrapper"
                inputPlaceholder="Введите пароль"
                inputType="password"
                {...field}

                inputValue={field.value}
                isError={!!errors.userPassword}
                errorText={errors.userPassword?.message}
              />
            )}
          />

          <AppButton
            buttonClassName="button_submit"
            buttonText="Войти"
            buttonType="submit"
            isDisabled={false}
          />

        </div>
      </form>
      <div className="reg_wrapper">
        <span>Нет аккаунта?</span>
        <a href="/registration">Зарегистрироваться</a>
      </div>
    </SLoginPage>
  );
};
