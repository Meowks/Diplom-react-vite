import { MatchesSection } from "../../components/MatchesSection/MatchesSection";





import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AppContext } from "../../components/Context/Context";
import { MainPag } from "../MainPag/MainPag";
import { SLigueSections } from "../MainPag/MainPag.style";
import { Ligue } from "../../components/Ligue/Ligue";
import { Seasons } from "../../components/Seasons/Seasons";
import { dataMenu } from "../../components/LigueMenu/dataLigue";


export const MainPage = () => {
  const { selectedItem } = useContext(AppContext);
  const { selectedMenuItem } = useContext(AppContext);
  console.log(selectedMenuItem);
  

  return (

    <>
      <Header />
      <main >
        <SLigueSections>
          <Ligue />
          <Seasons />
        </SLigueSections>
        
        {selectedMenuItem === "Матчи" && <MatchesSection />}
        
        {selectedMenuItem === "Команды" && (
          <section className="commandSection">
            <h2>Команды</h2>
          </section>
        )}
        {selectedMenuItem === "Игроки" && (
          <section className="personSection">
            <h2>Игроки</h2>
          </section>
        )}
        {selectedMenuItem === "Турнирные таблицы" && (
          <section className="tournamentSection">
            <h2>Турнирные таблицы</h2>
          </section>
        )}

      </main>



      {/* <SMainPage>
        <LeaguesSection />
        <MatchesSection />
      </SMainPage> */}

      <MainPag />
    </>
  );
}