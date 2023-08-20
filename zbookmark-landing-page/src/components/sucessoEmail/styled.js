import styled from "styled-components";

export const Container = styled.div`
  padding: 10rem 2rem 16rem;
  text-align: center;
`;

export const PerguntasCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Sucesso = styled.h4`
  background: ${(props) => props.theme.Green};
  color: ${(props) => props.theme.White};
  padding: 0.6rem;
  margin: 2rem;
  width: 16rem;
  transition: 0.5s;
  :hover {
    background: ${(props) => props.theme.GreenDark};
  }
`;
