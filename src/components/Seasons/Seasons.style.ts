import styled from "styled-components";

export const SSeasons = styled.div`

  padding: 10px;
  background-color:${props => props.theme.color.elemCont};
  border-radius: 8px;
  box-shadow: 5px 5px 5px gray;
  
  .seasons_cont{
    display:flex;
    margin-left:20px
  }

  .current_season{
    min-width: 400px;

    p{
      font-size:22px;
      font-weight:500;
    }
    span{
      display:block;
      font-size:18px;
    }
  }
  .back_seasons{
    margin:0 15px;
    p{
      font-size:22px;
      font-weight:500;
    }
    span{
      display:block;
      font-size:18px;
      a{
        text-decoration:none;
        color: ${props => props.theme.color.darkPrime};
      }
    }
    img{
      width: 100px;
    }
  }

`