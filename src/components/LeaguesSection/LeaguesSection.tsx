import { SLeagueList } from "./LeaguesSection.styled";

export const LeaguesSection = () => {
  return (
    <section>
      <h2>Популярные лиги</h2>
      <SLeagueList>
        <li>Лига 1</li>
        <li>Лига 2</li>
        <li>Лига 3</li>
      </SLeagueList>
    </section>
  );
};