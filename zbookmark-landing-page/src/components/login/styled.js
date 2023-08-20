import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    margin-left: auto;
    margin-right: auto;
    width: 15rem;
    @media (max-width: 800px) {
      width: 10rem;
    }
  }
  input {
    width: 97%;
    height: 2rem;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
  }
`;

export const Titulo = styled.h4`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.White};
`;

export const Botao = styled.button`
  width: 20rem;
  height: 2rem;
  border-radius: 5px;
  margin: 5px;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;

export const Entrar = styled.button`
  width: 20rem;
  height: 2rem;
  width: 100%;
  margin-top: 1rem;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  :hover {
    color: ${(props) => props.theme.Blue};
    background: ${(props) => props.theme.Green};
  }
`;

export const Campo = styled.div`
  padding: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Navegacao = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 5px;
`;

export const EstiloCaixa = styled.form`
  background: ${(props) => props.theme.Blue};
  padding: 2rem;
  border-radius: 20px;
`;
