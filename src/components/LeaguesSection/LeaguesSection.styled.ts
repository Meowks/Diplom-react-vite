import styled from "styled-components"


export const SLeagueSection = styled.section`
  margin:0;
  font-size:20px;
  .ligue_data{
    display: flex;
    gap:20px;
    
  }
  .ligue,
  .ligue_seasons{
    background-color: ${props => props.theme.color.elemCont};
    border-radius: 10px;
    padding: 10px;
  }
  .ligue{
    width:1fr;
  }
  .ligue_seasons{
    width:2fr
  }
  .emblemLigue{
    margin: 20px;
    width: 200px
  }
  .flagLigue{
    margin: 0 20px;
    width: 150px
  }

`