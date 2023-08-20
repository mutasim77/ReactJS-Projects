import { Container, Resposta, PerguntasCard, Lista, Pergunta } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import {
  Informacao,
  ParagrafoPrincipal,
  TituloPrincipal,
} from "../features/styled";
import { i18n } from "./../../translate/i18n";
export default function Questions() {
  return (
    <Container>
      <TituloPrincipal>{i18n.t("questions.titulo")}</TituloPrincipal>
      <ParagrafoPrincipal>{i18n.t("questions.paragrafo")}</ParagrafoPrincipal>

      <PerguntasCard>
        <Lista>
          <Resposta>
            <Pergunta>
              {i18n.t("questions.pergunta1.titulo")}

              <img src={arrow} alt="arrow" />
            </Pergunta>
            {i18n.t("questions.pergunta1.resposta")}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {i18n.t("questions.pergunta2.titulo")}

              <img src={arrow} alt="arrow" />
            </Pergunta>
            {i18n.t("questions.pergunta2.resposta")}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {i18n.t("questions.pergunta3.titulo")}

              <img src={arrow} alt="arrow" />
            </Pergunta>
            {i18n.t("questions.pergunta3.resposta")}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {i18n.t("questions.pergunta4.titulo")}

              <img src={arrow} alt="arrow" />
            </Pergunta>
            {i18n.t("questions.pergunta4.resposta")}
          </Resposta>
        </Lista>
      </PerguntasCard>
      <Informacao href="/">More Info</Informacao>
    </Container>
  );
}
