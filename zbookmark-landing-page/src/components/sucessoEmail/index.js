import { Container, Sucesso, PerguntasCard } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import { ParagrafoPrincipal } from "../features/styled";
import { Link } from "react-router-dom";
import { i18n } from "./../../translate/i18n";
export default function SucessoEmail() {
  return (
    <Container>
      <h1>{i18n.t("sucessoEmail.titulo")}</h1>
      <ParagrafoPrincipal>
        {i18n.t("sucessoEmail.paragrafo")}
      </ParagrafoPrincipal>
      <PerguntasCard>
        <img src={arrow} alt="bookmark" />
        <Link to="/">
          <Sucesso>{i18n.t("sucessoEmail.button")}</Sucesso>
        </Link>
      </PerguntasCard>
    </Container>
  );
}
