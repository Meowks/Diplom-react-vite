import { MatchesSection } from "../../components/MatchesSection/MatchesSection";
import { LeaguesSection } from "../../components/LeaguesSection/LeaguesSection";
import { Title } from "../../components/UI/Title/Title";


import { SMainPage } from "./MainPage.style";
import { Header } from "../../components/Header/Header";

export const MainPage = () => {
  return (
    <>
      <Header/>
      
    <SMainPage>
      
      <Title mainText="⚽ Главная страница"></Title>
      <MatchesSection />
      <LeaguesSection />
    </SMainPage>
    </>
  );
}