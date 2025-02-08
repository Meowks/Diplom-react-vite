import { useContext } from "react";
import { SMatchSection } from "./MatchSection.style";
import { AppContext } from "../Context/Context";
import { useGetMatchesQuery } from "../../store/API/postApi";

export const MatchesSection = () => {

  const { selectedItem } = useContext(AppContext);
  const ligueKey = selectedItem?.key || "";
  const { data, isLoading, isError } = useGetMatchesQuery(ligueKey);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError || !data) return <p>Ошибка загрузки данных</p>;
  const matchesLig = data?.matches

  console.log(matchesLig);


  return (
    <SMatchSection>
      <h2>Матчи:</h2>
      {matchesLig?.slice(0, 5).map((elem: any) => (

        <div className="metaDataCont">
          <div className="metaData">
            <p>{`День игры: ${elem.matchday}`}</p>
            <p>{`Этап: ${elem.stage}`}</p>
            <p>{`Группа: ${elem.group}`}</p>
            <p>{`Статус игры: ${elem.status}`}</p>

          </div>

          <div className="mainData">
            <button className="favBtn">Избранное</button>
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

                return (
                  <>
                    <span className={getResultClass(homeScore, awayScore, true)}>
                      {elem.homeTeam.name}
                    </span>
                    <img src={elem.homeTeam.crest} alt="" />
                    <span>{homeScore}</span>
                    <span className="doubleDot">:</span>
                    <span>{awayScore}</span>
                    <span className={getResultClass(homeScore, awayScore, false)}>
                      {elem.awayTeam.name}
                    </span>
                    <img src={elem.awayTeam.crest} alt="" />
                  </>
                );
              })()}



              {/* <span>{elem.homeTeam.name}</span>
              <img src={elem.homeTeam.crest} alt="" />
              <span>{elem.score.fullTime.home + elem.score.halfTime.home}</span>
              <span className="doubleDot">:</span>
              <span>{elem.score.fullTime.away + elem.score.halfTime.away}</span>
              <span>{elem.awayTeam.name}</span>
              <img src={elem.awayTeam.crest} alt="" /> */}
            </div>

          </div>
        </div>
      ))}
    </SMatchSection>
  );
};