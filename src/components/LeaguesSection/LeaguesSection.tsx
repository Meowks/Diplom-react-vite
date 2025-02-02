import { useContext, useEffect } from "react";
import { SLeagueList } from "./LeaguesSection.styled";
import { AppContext } from "../Context/Context";
import { useLazyGetLigueQuery } from "../../store/API/postApi";
import { useParams } from "react-router-dom";
import { dataLigue } from "../LigueMenu/dataLigue";

export const LeaguesSection = () => {
  const { selectedItem } = useContext(AppContext);

  const {ligue} = useParams<{ ligue: string }>();
  const [fetchTrigger,{data, isLoading, isSuccess }] = useLazyGetLigueQuery();


  useEffect(()=>{
    if(ligue){
      fetchTrigger(ligue)
    }
  },[ligue, fetchTrigger])
  return (
    <section>
      <h2>Популярные лиги</h2>
      <div className="ligue_data">
        <div className="ligue">
          <img src="" alt="" />
          <span>{data?.name}</span>
        </div>
        <div className="ligue_seasons">
          <ul>
            
          </ul>
        </div>
      </div>

    </section>
  );
};


{/* <SLeagueList>
  <li>Лига 1</li>
  <li>Лига 2</li>
  <li>Лига 3</li>
</SLeagueList> */}