
import {
  Container,
  Enviar,
  Email,
  Formulario,
  TituloPrincipal,
  Titulo,
} from "./styled";
import { i18n } from "./../../translate/i18n";
export default function Contact() {
  return (
    <Container>
      <TituloPrincipal>
      {i18n.t("contact.tituloPrincipal")}
        
      </TituloPrincipal>
      <Titulo>{i18n.t("contact.titulo")}</Titulo>

      <Formulario action="/sucessoEmail">
        <Email
          type="text"
          required
          placeholder={i18n.t("contact.textoBotao")}
          id="email"
          className="input"
        />
        <Enviar type="submit">{i18n.t("contact.botao")}</Enviar>
      </Formulario>
    </Container>
  );
}
