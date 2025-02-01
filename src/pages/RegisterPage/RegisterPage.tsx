
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { SLoginPage } from "../loginPage/LoginPage.styled";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../store/firebase-config";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";


export interface IRegisterForm {
  email: string;
  password: string
}

const schema = yup.object().shape({
  email: yup.string()
    .email("Введите корректный email")
    .required("Email обязателен"),
  password: yup.string()
    .min(6, "Пароль должен быть минимум 6 символов")
    .required("Пароль обязателен"),
});

export const RegisterPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),

    defaultValues: {
      email: "",
      password: "",
    }
  });


  const formData: SubmitHandler<IRegisterForm> = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    }

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          dispatch(changeUser(payload))
          navigate("/")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);

        if (errorCode === "auth/email-already-in-use") {
          dispatch(changeUser(payload))
          alert(`Этот Email уже зарегистрирован! Переход к "Авторизации"`);
          navigate("/")
        } else if (errorCode === "auth/weak-password") {
          alert("Пароль слишком слабый. Введите минимум 6 символов.");
        } else {
          alert("Произошла ошибка: " + errorMessage);
        }
      });
  };

  return (
    <SLoginPage>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit(formData)} className="submit_wrapper">

        <Controller
          control={control}
          name="email"
          render={({ field }) => (

            <AppInput
              inputClassName="input_wrapper"
              inputPlaceholder="Ваша почта"
              inputType="email"

              inputValue={field.value}

              isError={!!errors.email}
              errorText={errors.email?.message}

              {...field}
            />

          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (

            <AppInput
              inputClassName="input_wrapper"
              inputPlaceholder="Создайте пароль"
              inputType="password"

              inputValue={field.value}

              isError={!!errors.password}
              errorText={errors.password?.message}

              {...field}

            />
          )}
        />

        <AppButton
          buttonClassName="button_submit"
          buttonText={isSubmitting ? "Загрузка..." : "Зарегистрироваться"}
          buttonType="submit"
          isDisabled={isSubmitting}
        />
      </form>

      <div className="reg_wrapper">
        <span>Уже зарегистрированы?</span>
        <a href="/">Авторизоваться</a>
      </div>
    </SLoginPage>
  );
};