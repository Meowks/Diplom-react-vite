import { useContext } from "react";
import { SPopupMenu } from "../PopupMenu/PopupMenu.style";
import { dataLigue } from "./dataLigue";
import { AppContext } from "../Context/Context";



interface IPopupMenuProps {

}

export const LigueMenu = ({ }: IPopupMenuProps) => {
  const {setSelectedItem} = useContext(AppContext)

  return (
    <SPopupMenu>
      <ul className="popup_list">
        {dataLigue.map((elem, index) => (
          <li key={index + 1} className="popup_item" onClick={()=>setSelectedItem(elem.ligue)}><a href={elem.key}>{elem.ligue}</a></li>
        ))}
      </ul>
    </SPopupMenu>
  );
};
