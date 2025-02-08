import { MatchesSection } from "../../components/MatchesSection/MatchesSection";
import { LeaguesSection } from "../../components/LeaguesSection/LeaguesSection";



import { SMainPage } from "./MainPage.style";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AppContext } from "../../components/Context/Context";
import { MainPag } from "../MainPag/MainPag";
import { SLigueSections } from "../MainPag/MainPag.style";
import { Ligue } from "../../components/Ligue/Ligue";
import { Seasons } from "../../components/Seasons/Seasons";


export const MainPage = () => {
  const { selectedItem } = useContext(AppContext);

  return (

    <>
      <Header />
      <main >
        <SLigueSections>
          <Ligue />
          <Seasons />
        </SLigueSections>
        
        <MatchesSection/>







        <section className="commandSection">

        </section>
        <section className="personSection">

        </section>

      </main>



      {/* <SMainPage>
        <LeaguesSection />
        <MatchesSection />
      </SMainPage> */}

      <MainPag />
    </>
  );
}