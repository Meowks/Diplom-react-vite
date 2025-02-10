import { SMainButton } from "./AppButton.style";

interface IAppButtonProps {
  buttonType: "button" | "submit";
  buttonClassName: string;
  buttonText: string;
  onClick?: () => void;
  isDisabled: boolean;
  
}

export const AppButton = ({
  buttonType,
  buttonClassName,
  buttonText,
  onClick,
  isDisabled
}: IAppButtonProps) => {
  return (
    <SMainButton
      type={buttonType}
      className={buttonClassName}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </SMainButton>
  );
};
