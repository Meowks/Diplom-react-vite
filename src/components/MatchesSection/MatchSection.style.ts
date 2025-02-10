import styled from "styled-components";


export const SMatchSection = styled.ul`
background-color:${props => props.theme.color.lightGray};
margin:20px 0;
border-radius: 10px;
box-shadow: 10px 10px 10px gray;
padding: 20px;

  .metaDataCont{
    display:flex;
    gap:30px;
    margin-bottom:20px;
  }
  .metaData{
    background-color:${props => props.theme.color.elemCont};
    padding: 10px;
    border-radius:10px;
    width:50%;
    box-shadow:7px 7px 7px gray;

    p{
      font-size:18px;
      margin-bottom: 15px;
    }
  }
  .mainData{
    background-color:${props => props.theme.color.elemCont};
    padding: 10px;
    border-radius:10px;
    width:50%;
    box-shadow:7px 7px 7px gray;
    
    .favBtn{
      font-size:20px;
      padding:5px;
      border-radius:8px;
      outline:none;
      border:none;
      margin:10px;
      box-shadow:3px 3px 3px gray;

      cursor: pointer;
      &:hover{
        box-shadow:2px 2px 2px gray;
      }
      &.active{
        background-color: green;
        box-shadow:3px 3px 3px darkgreen;
      }
    }

    .homeAwey{
      display:flex;
      justify-content:space-around;

      span{
        font-size:22px;
        font-weight: 700;
      }
    }

    .score{
      display:flex;
      justify-content: space-around;
      margin-top: 20px;
      img{
        width:25px;
      }
      span{
        font-size:18px;
        font-weight: 500;
      }
      .doubleDot{
        font-weight:700;
      }

      .win {
        color: green;
      }
      .lose {
        color: red;
      }
      .draw {
        color: yellow;
      }
    }
  }

`