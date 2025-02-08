import { useContext, useEffect } from "react";
import { SLeagueSection } from "./LeaguesSection.styled";
import { AppContext } from "../Context/Context";
import { useGetLigueQuery } from "../../store/API/postApi";
import { useParams } from "react-router-dom";
import { dataLigue } from "../LigueMenu/dataLigue";
import { MainPag } from "../../pages/MainPag/MainPag";

export const LeaguesSection = () => {
  const { selectedItem } = useContext(AppContext);
  const ligueKey = selectedItem?.key || "";

  const ligueData = dataLigue

  const { ligue } = useParams<{ ligue: string }>();
  const { data, isLoading, } = useGetLigueQuery(ligueKey);

  console.log(data?.id);

  return (
    <SLeagueSection>
      <div className="ligue_data">
        <div className="ligue">
          <h2>{`Турнир: ${selectedItem?.ligue || ""}`}</h2>
          {isLoading && "Идет загрузка"}
          {data?.emblem && <img className="emblemLigue" src={data?.emblem} alt="" />}
          {data?.area && <img className="flagLigue" src={data?.area.flag} alt="" />}
        </div>
        <div className="ligue_seasons">
          <h2>Сезоны:</h2>
          <div className="dataSeasons">
            <p>Текущий:</p>
          </div>

          <div>
            <p>Прошлые:</p>
          </div>
        </div>
      </div>

      
    </SLeagueSection>
  );
};


{/* <SLeagueList>
  <li>Лига 1</li>
  <li>Лига 2</li>
  <li>Лига 3</li>
</SLeagueList> */}

// useEffect(()=>{
//   if(selectedItem == ){
//     fetchTrigger()
//   }
// },[ligue, fetchTrigger])