import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 2rem;
  justify-content: space-between;
`;

export const Itens = styled.div`
  margin: 3rem;
`;

export const Conjunto2 = styled.div`
  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    padding-left: 1rem;
  }
`;

export const Rede = styled.a``;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    background-color: hsla(229, 31%, 21%, 0.951);
    position: absolute;
    z-index: 20;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
  }
`;

export const Logo = styled.img`
  margin: 3rem;
`;

export const Rota = styled.text`
  margin: 1.4rem;
  @media (max-width: 800px) {
    color: ${(props) => props.theme.White};
    margin: 2rem;
    display: flex;
    border-top: 1px solid ${(props) => props.theme.Grayish};
    padding: 20px 3rem;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  :hover {
    color: ${(props) => props.theme.Red};
  }
`;

export const BotaoLogin = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Red};
  :hover {
    background: ${(props) => props.theme.White};
    border: 2px solid ${(props) => props.theme.Red};
    color: ${(props) => props.theme.Red};
  }
  @media (max-width: 800px) {
    background: transparent;
    :hover {
      background: none;
    }
  }
`;

export const MobileNav = styled.div`
  display: none;
  button {
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  i {
    font-size: 1.4rem;
    color: ${({ navToggle }) => (navToggle ? "hsl(229, 31%, 21%)" : "black")};
  }
  @media (max-width: 800px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;
