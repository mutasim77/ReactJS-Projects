import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 7rem 6rem;
  min-height: 100vh;
  position: relative;
  #lendo,
  #paragrafo {
    text-align: left;
  }
  @media (max-width: 800px) {
    text-align: center;
    padding: 1rem 3rem 6rem;
  }
`;
export const Texto = styled.div`
  margin: 2rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
  padding: 0;
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 1rem 2rem;
    border-bottom: 1px solid ${(props) => props.theme.Grayish};
    position: relative;
    cursor: pointer;
    color: ${(props) => props.theme.Dark};
    transition: 0.5s;
    :hover {
      color: ${(props) => props.theme.Red};
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Ilustracao = styled.div`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    left: -10rem;
    bottom: -4rem;
    width: 120%;
    height: 95%;
    background: ${(props) => props.theme.Blue};
    z-index: -1;
    border-top-right-radius: 30% 50%;
    border-bottom-right-radius: 30% 50%;
  }
  img {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 25rem;
    @media (max-width: 800px) {
      width: 20rem;
    }
  }
`;

export const TituloPrincipal = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.Dark};
  margin-bottom: 0.7rem;
  @media (max-width: 800px) {
    margin-top: 7rem;
    text-align: center;
  }
`;

export const Titulo = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  color: ${(props) => props.theme.Dark};
  margin-bottom: 0.7rem;
  @media (max-width: 800px) {
    margin-top: 7rem;
    width: 20rem;
    text-align: center;
  }
`;
export const ParagrafoPrincipal = styled.p`
  margin-top: 1.5rem;
  padding-bottom: 1.6rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme.Grayish};
  margin-bottom: 1rem;
`;

export const Paragrafo = styled.p`
  margin-top: 1.5rem;
  padding-bottom: 1.6rem;
  text-align: left;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme.Grayish};
  margin-bottom: 1rem;
`;

export const Informacao = styled.a`
  padding: 0.6rem 1.2rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  border-radius: 0.3rem;
  font-size: 0.9rem;
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;
