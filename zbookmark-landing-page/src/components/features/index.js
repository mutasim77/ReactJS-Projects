import {
  Container,
  Informacao,
  Paragrafo,
  Titulo,
  Ilustracao,
  Card,
  TituloPrincipal,
  ParagrafoPrincipal,
  Menu,
  Texto,
} from "./styled";
import ilustracao1 from "./../../assets/images/illustration-features-tab-1.svg";
import ilustracao2 from "./../../assets/images/illustration-features-tab-2.svg";
import ilustracao3 from "./../../assets/images/illustration-features-tab-3.svg";
import { useState } from "react";
import { i18n } from "./../../translate/i18n";
export default function Features() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <TituloPrincipal>{i18n.t("features.titulo")}</TituloPrincipal>
      <ParagrafoPrincipal>{i18n.t("features.paragrafo")}</ParagrafoPrincipal>

      <Menu>
        <p onClick={() => setOpcao("1")}>{i18n.t("features.menu.opcao1")}</p>
        <p onClick={() => setOpcao("2")}>{i18n.t("features.menu.opcao2")}</p>
        <p onClick={() => setOpcao("3")}>{i18n.t("features.menu.opcao3")}</p>
      </Menu>

      <div>
        {opcao === "1" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao1} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{i18n.t("features.card1.titulo")}</Titulo>
              <Paragrafo>{i18n.t("features.card1.paragrafo")}</Paragrafo>
              <Informacao href="/">{i18n.t("features.button")}</Informacao>
            </Texto>
          </Card>
        ) : opcao === "2" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao2} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{i18n.t("features.card2.titulo")}</Titulo>
              <Paragrafo>{i18n.t("features.card2.paragrafo")}</Paragrafo>
              <Informacao href="/">{i18n.t("features.button")}</Informacao>
            </Texto>
          </Card>
        ) : (
          <Card>
            <Ilustracao>
              <img src={ilustracao3} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{i18n.t("features.card3.titulo")}</Titulo>
              <Paragrafo>{i18n.t("features.card3.paragrafo")}</Paragrafo>
              <Informacao href="/">{i18n.t("features.button")}</Informacao>
            </Texto>
          </Card>
        )}
      </div>
    </Container>
  );
}
