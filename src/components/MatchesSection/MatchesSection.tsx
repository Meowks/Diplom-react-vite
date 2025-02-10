import { useContext } from "react";
import { SMatchSection } from "./MatchSection.style";
import { AppContext } from "../Context/Context";
import { useGetMatchesQuery } from "../../store/API/postApi";

export const MatchesSection = () => {

  const { selectedItem, favorites, toggleFavorites } = useContext(AppContext);
  const ligueKey = selectedItem?.key || "";
  const { data, isLoading, isError } = useGetMatchesQuery(ligueKey);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError || !data) return <p>"Выберите турнир"</p>;
  const matchesLig = data?.matches


  return (
    <SMatchSection>
      <h2>Матчи:</h2>
      {matchesLig?.slice(0, 10).map((elem: any) => {
        const isFavorite = favorites.some((fav) => fav.id === elem.id)

        return (
          <div className="metaDataCont">
            <div className="metaData">
              <p>{`День игры: ${elem.matchday}`}</p>
              <p>{`Этап: ${elem.stage}`}</p>
              <p>{`Группа: ${elem.group || "Отсутствует"}`}</p>
              <p>{`Статус игры: ${elem.status}`}</p>
              <p>{`ID: ${elem.id}`}</p>

            </div>

            <div className="mainData">
              <button
                className={`favBtn ${isFavorite ? "active" : ""}`}
                onClick={() => toggleFavorites(elem)}
              >
                Избранное
              </button>
              <div className="homeAwey">
                <span>Дома</span>
                <span>:</span>
                <span>Выезд</span>
              </div>

              <div className="score">

                {(() => {
                  const homeScore = (elem.score.fullTime.home ?? 0) + (elem.score.halfTime.home ?? 0);
                  const awayScore = (elem.score.fullTime.away ?? 0) + (elem.score.halfTime.away ?? 0);

                  const getResultClass = (home: number, away: number, isHomeTeam: boolean) => {
                    if (home > away) return isHomeTeam ? "win" : "lose";
                    if (away > home) return isHomeTeam ? "lose" : "win";
                    return "draw";
                  };

                  return(
                  <>
                    <span className={getResultClass(homeScore, awayScore, true)}>
                      {elem.homeTeam.name}
                    </span>
                    <img src={elem.homeTeam.crest} alt="" />
                    <span>{homeScore}</span>
                    <span className="doubleDot">:</span>
                    <span>{awayScore}</span>
                    <img src={elem.awayTeam.crest} alt="" />
                    <span className={getResultClass(homeScore, awayScore, false)}>
                      {elem.awayTeam.name}
                    </span>
                  </>
                );
              })()}
              </div>

            </div>
          </div>
      )})} : {("Выберите турнир")}
    </SMatchSection>
  );
};