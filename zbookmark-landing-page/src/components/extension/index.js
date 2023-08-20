import {
  Container,
  Links,
  Paragrafo,
  Titulo,
  Cards,
  Card,
  Linha,
  TituloCard,
  Imagem,
} from "./styled";
import chrome from "./../../assets/images/logo-chrome.svg";
import firefox from "./../../assets/images/logo-firefox.svg";
import opera from "./../../assets/images/logo-opera.svg";
import { i18n } from "./../../translate/i18n";
export default function extension() {
  return (
    <Container>
      <Titulo>{i18n.t("extension.titulo")}</Titulo>
      <Paragrafo>{i18n.t("extension.paragrafo")}</Paragrafo>
      <Cards>
        <Card>
          <Imagem src={chrome} alt="chrome logo" />
          <TituloCard>{i18n.t("extension.chrome.titulo")}</TituloCard>
          <Paragrafo>{i18n.t("extension.chrome.paragrafo")}</Paragrafo>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>
        <Card id="card2">
          <Imagem src={firefox} alt="firefox logo" />
          <TituloCard>{i18n.t("extension.firefox.titulo")}</TituloCard>
          <Paragrafo>{i18n.t("extension.firefox.paragrafo")}</Paragrafo>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>
        <Card id="card3">
          <Imagem src={opera} alt="opera logo" />
          <TituloCard>{i18n.t("extension.opera.titulo")}</TituloCard>
          <Paragrafo>{i18n.t("extension.opera.paragrafo")}</Paragrafo>
          <Linha />
          <Links href="/">{i18n.t("extension.button")}</Links>
        </Card>
      </Cards>
    </Container>
  );
}
