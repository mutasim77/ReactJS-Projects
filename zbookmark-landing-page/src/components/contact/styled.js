import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 7rem;
  background: ${(props) => props.theme.Blue};
  text-align: center;
  color: ${(props) => props.theme.White};
  @media (max-width: 800px) {
    padding: 4rem;
  }
`;

export const Titulo = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.8rem;
  color: ${(props) => props.theme.White};
`;

export const TituloPrincipal = styled.h3`
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 5px;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.White};
`;

export const Formulario = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Email = styled.input`
  position: relative;
  padding: 0.7rem 5rem 0.7rem 1rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  color: ${(props) => props.theme.Dark};
  border: 2px solid ${(props) => props.theme.Blue};
  ::placeholder {
    color: ${(props) => props.theme.Grayish};
  }
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const Enviar = styled.button`
  padding: 0.7rem 1rem;
  color: ${(props) => props.theme.White};
  border: 2px solid ${(props) => props.theme.Red};
  background: ${(props) => props.theme.Red};
  font-size: 0.8rem;
  border-radius: 0.2rem;
  margin-left: 1rem;
  transition: 0.5s;
  :hover {
    background: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Red};
  }
  @media (max-width: 800px) {
    margin-top: 0.6rem;
    margin-left: 0rem;
    width: 14.5rem;
  }
`;
