import { SAppButton } from "./AppButton.style";

interface IAppButtonProps {
  buttonType:"button" | "submit";
  buttonClassName:string;
  buttonText:string;
  onChange?:()=>void;
  isDisabled:boolean;
}

export const AppButton = ({buttonType, buttonClassName, buttonText, onChange, isDisabled}: IAppButtonProps) => {
  return (
    <SAppButton 
    type={buttonType} 
    className={buttonClassName}
    onClick={()=>onChange}
    disabled={isDisabled}
    >
      {buttonText}
      </SAppButton>
  );
};
