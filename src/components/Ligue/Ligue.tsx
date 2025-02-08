import { useContext } from "react";
import { AppContext } from "../Context/Context";
import { useGetLigueQuery } from "../../store/API/postApi";
import { SLigue } from "./Ligue.style";


export const Ligue = () => {
  const { selectedItem } = useContext(AppContext);
  const ligueKey = selectedItem?.key || "";
  const { data, isLoading, } = useGetLigueQuery(ligueKey);

  return (
    <SLigue>
      <h2>{`Турнир: ${selectedItem?.ligue || ""}`}</h2>
      {isLoading && "Идет загрузка"}
      <div className="emblemCont">
        {data?.emblem && <img className="emblem" src={data?.emblem} alt="" />}
        {data?.area && <img className="flag" src={data?.area.flag} alt="" />}
      </div>
    </SLigue>
  );
};