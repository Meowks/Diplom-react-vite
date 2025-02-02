import { SPopupMenu } from "./PopupMenu.style";


interface IPopupMenuProps {

}

export const PopupMenu = ({}: IPopupMenuProps) => {
  return (
    <SPopupMenu>
      <ul className="popup_list">
        <li className="popup_item"><a href="#">Матчи</a></li>
        <li className="popup_item"><a href="#">Команды</a></li>
        <li className="popup_item"><a href="#">Игроки</a></li>
        <li className="popup_item"><a href="#">Турниры</a></li>
        <li className="popup_item"><a href="#">Турнирные таблицы</a></li>
      </ul>
    </SPopupMenu>
  );
};
