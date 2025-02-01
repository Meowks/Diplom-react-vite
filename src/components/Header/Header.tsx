import bolpng from "../../assets/img/bolpng.png"
import { SHeader } from "./Header.styled";

interface IHeaderProps {

}

export const Header = ({ }: IHeaderProps) => {
  return (
    <SHeader>
      <div className="menuCont">
        <img className="bollPng" src={bolpng} alt="boll" />
        <h2>Меню</h2>
      </div>

      <div className="cearchCont">
        <input placeholder="Поиск" type="search" />
        <button>Авторизация</button>
      </div>
    </SHeader>
  );
};
