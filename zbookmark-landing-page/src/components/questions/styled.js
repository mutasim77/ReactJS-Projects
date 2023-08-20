import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 23rem;
  text-align: center;
  a {
    display: inline-block;
    margin-top: 2rem;
  }
  @media (max-width: 800px) {
    text-align: center;
    margin: 2rem;
    padding: 0;
  }
`;

export const PerguntasCard = styled.ul`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Lista = styled.li`
  width: 100%;
  list-style: none;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.Grayish};
  font-weight: 500;
  :nth-child(1) {
    border-top: 1px solid ${(props) => props.theme.Grayish};
  }
`;

export const Pergunta = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: 500;
`;

export const Resposta = styled.details`
  padding: 1.5rem 0 0.5rem;
  text-align: left;
  line-height: 1.6;
  color: ${(props) => props.theme.Dark};
  font-weight: 400;
`;
