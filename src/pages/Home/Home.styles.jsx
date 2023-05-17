import styled from "styled-components";
import { Card } from "../../components/UI";

export const HomeContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;

  #fav-icon {
    color: red;
    font-size: 30px;
    position: absolute;
    top: 20%;
    left: 15%;
  }
`;

export const StyledCard = styled(Card)`
  width: 24%;
  padding: 1rem;
  text-align: center;
  box-shadow: ${({ shadow }) => shadow && "2px 2px 2px rgba(0,0,0,0.4)"};
  border-radius: 0px;
  position: relative;

  img {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint}) {
    width: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 50px;
  right: 25px;
  cursor: pointer;
  border: none;
  z-index: 100;
`;
