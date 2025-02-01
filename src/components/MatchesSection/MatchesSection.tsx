import { SMatchSection } from "./MatchSection.style";

export const MatchesSection = () => {
  return (
    <section>
      <h2>Ближайшие матчи</h2>
      <SMatchSection>
        <li>Команда 1 🆚 Команда 2</li>
        <li>Команда 3 🆚 Команда 4</li>
        <li>Команда 5 🆚 Команда 6</li>
      </SMatchSection>
    </section>
  );
};