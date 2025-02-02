import React from "react";
import { SAppInput, SErrorText } from "./AppInput.style";



type IAppInputProps = {
  inputClassName:string;
  inputType:"text" | "password" | "email" | "search";
  inputPlaceholder:string;
  inputValue?:string;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
  isError?: boolean;
  errorText?: string;
}& React.InputHTMLAttributes<HTMLInputElement>;

export const AppInput = React.forwardRef<HTMLInputElement, IAppInputProps> (({
    inputClassName, 
    inputType, 
    inputPlaceholder,
    inputValue,
    onChange,
    isError,
    errorText,

    ...props
  },ref ) => {
  return (
    <>
    <SAppInput
      className={inputClassName}
      type={inputType}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={onChange} 
      ref={ref}

      {...props}
      />
      {isError && <SErrorText>{errorText}</SErrorText>}
    </>
      
  );
}
)
