import { useContext } from "react";
import { AppContext } from "../../components/Context/Context";
import { SMatchSection } from "../../components/MatchesSection/MatchSection.style";


export const FavoritesPage = () => {
  const { favorites, toggleFavorites } = useContext(AppContext);

  return (
    <SMatchSection>
      <h2>Избранные матчи:</h2>
      {favorites.length === 0 ? (
        <p>Нет избранных матчей</p>
      ) : (
        favorites.map((match: any) => (
          <div key={match.id}>
            <p>{`${match.homeTeam.name} vs ${match.awayTeam.name}`}</p>
            <button onClick={() => toggleFavorites(match)}>Удалить</button>
          </div>
        ))
      )}
    </SMatchSection>
  );
};