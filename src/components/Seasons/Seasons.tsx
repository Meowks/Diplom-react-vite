import { useContext } from "react";
import { SSeasons } from "./Seasons.style";
import { AppContext } from "../Context/Context";
import { useGetLigueQuery } from "../../store/API/postApi";

export const Seasons = () => {
  const { selectedItem } = useContext(AppContext);
  const ligueKey = selectedItem?.key || "";
  const { data, isLoading, isError } = useGetLigueQuery(ligueKey);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError || !data) return <p>Ошибка загрузки данных</p>;

  const currentSeason = data?.currentSeason;
  const pastSeasons = data?.seasons;

  


  return (
    <SSeasons>
      <h2>Сезоны:</h2>
      <div className="seasons_cont">
        {currentSeason ? (
          <div className="current_season">
            <p>Текущий:</p>
            <span>{`Начало сезона: ${currentSeason.startDate}`}</span>
            <span>{`Конец сезона: ${currentSeason.endDate}`}</span>
            <span>{`Сыграно матчей: ${currentSeason.currentMatchday || "Нет данных"}`}</span>
          </div>
        ) : (
          <div className="current_season">
            <p>Нет данных </p>
          </div>
        )}

        {pastSeasons?.slice(2, 4).map((season) => (
          <div className="back_seasons">
            <p>Прошлый:</p>

            <span>{`Начало сезона: ${season.startDate}`}</span>
            <span>{`Конец сезона: ${season.endDate}`}</span>
            <span>{`Сыграно матчей: ${season.currentMatchday}`}</span>

            {season.winner && 
            
            <div className="winner">
              <p>Победители</p>
              <span><a href={season.winner?.website}>{season.winner?.name}</a></span>
              <img src={season.winner?.crest} alt="" />
              <span>{`Место проведения: ${season.winner?.venue}`}</span>
              <span>{`Последнее обновление: ${season.winner?.lastUpdated}`}</span>
            </div>
            }
          </div>
        ))}


      </div>
    </SSeasons>
  );
};