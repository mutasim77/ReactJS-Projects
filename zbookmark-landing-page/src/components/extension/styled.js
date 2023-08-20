import styled from "styled-components";

export const Container = styled.section`
  padding: 8rem 10rem 2rem;
  min-height: 100vh;
  #card2 {
    margin-top: 4rem;
  }
  #card3 {
    margin-top: 8rem;
  }
  @media (max-width: 900px) {
    text-align: center;
    margin: 2rem;
    padding: 0;
  }
`;

export const Imagem = styled.img`
  margin-bottom: 1.5rem;
`;

export const Linha = styled.hr`
  margin: 2rem 0 1.5rem;
  border-bottom: 4px dotted ${(props) => props.theme.Grayish};
`;

export const TituloCard = styled.h3`
  color: ${(props) => props.theme.Dark};
  margin-bottom: 0.5rem;
`;

export const Card = styled.div`
  text-align: center;
  box-shadow: 0 0 0.6rem 0 ${(props) => props.theme.Dark};
  padding: 2rem 1rem 2rem;
  border-radius: 0.8rem;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Titulo = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.Dark};
  margin-bottom: 0.7rem;
`;

export const Paragrafo = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 1.3;
  @media (max-width: 800px) {
    margin: 3rem;
  }
`;

export const Links = styled.a`
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;
