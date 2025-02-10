import { useContext } from "react";
import { dataMenu } from "../LigueMenu/dataLigue";
import { SPopupMenu } from "./PopupMenu.style";
import { AppContext } from "../Context/Context";


interface IPopupMenuProps {

}

export const PopupMenu = ({ }: IPopupMenuProps) => {
  const { setSelectedMenuItem } = useContext(AppContext)
  const { selectedMenuItem } = useContext(AppContext)

  return (
    <SPopupMenu>
      <ul className="popup_list">
        {dataMenu.map((elem, index) => (
          <li
            key={index}
            className={`popup_item ${selectedMenuItem === elem.elemMenu ? "active" : ""}`}

            onClick={() => setSelectedMenuItem(elem.elemMenu)}
          >
            {elem.elemMenu}
          </li>
        ))}

      </ul>

    </SPopupMenu>
  );
};
