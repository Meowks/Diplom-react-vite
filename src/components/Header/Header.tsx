import { useContext, useState } from "react";
import bolpng from "../../assets/img/bolpng.png"
import { AppButton } from "../UI/AppButton/AppButton";
import { AppInput } from "../UI/AppInput/AppInput";
import { SHeader } from "./Header.styled";
import { PopupMenu } from "../PopupMenu/PopupMenu";
import { LigueMenu } from "../LigueMenu/LigueMenu";
import { AppContext } from "../Context/Context";

interface IHeaderProps {

}

export const Header = ({ }: IHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLigue, setIsOpenLigue] = useState(false)

 

  const toggleMenu = () => {
    setIsOpen((prev) => {
      if (!prev) {
        setIsOpenLigue(false);
      }
      return !prev;
    });
  };

  const toggleLigueMenu = () => {
    setIsOpenLigue((prev) => {
      if (!prev) {
        setIsOpen(false);
      }
      return !prev;
    });
  };

  return (
    <>
      <SHeader>
        <div className="menuCont">
          <img className="bollPng" src={bolpng} alt="boll" />
          <AppButton
            buttonClassName="buttonMenu"
            buttonText="Меню"
            buttonType="button"
            onClick={toggleMenu}
            isDisabled={false} />

          <AppButton
            buttonClassName="buttonMenu"
            buttonText="Турниры"
            buttonType="button"
            onClick={toggleLigueMenu}
            isDisabled={false} />
        </div>

        <div className="cearchCont">
          <AppInput
            inputClassName=""
            inputPlaceholder="Введите для поиска"
            inputType="search"
          />
          <AppButton
            buttonClassName=""
            buttonText="Поиск"
            buttonType="button"
            isDisabled={false}
          />

        </div>
      </SHeader>
      {isOpen && <PopupMenu />}
      {isOpenLigue && <LigueMenu />}
    </>
  );
};
