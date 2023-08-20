import { IMaskInput } from "react-imask";
import { useState } from "react";
import capa from "./../../assets/images/illustration-features-tab-3.svg";
import {
  Campo,
  Navegacao,
  EstiloCaixa,
  Entrar,
  Container,
  Botao,
  Titulo,
} from "./styled";
import { i18n } from "./../../translate/i18n";
function Login() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <Campo>
        <img src={capa} alt="logo" />
        <Navegacao>
          <Botao onClick={() => setOpcao("criar")}>
            {i18n.t("login.navegacao.criar")}
          </Botao>
          <Botao onClick={() => setOpcao("login")}>
            {i18n.t("login.navegacao.entrar")}
          </Botao>
        </Navegacao>
        <EstiloCaixa action="/sucessoEmail">
          {opcao === "criar" ? (
            <div className="criar-campo">
              <Titulo>{i18n.t("login.tituloCriar")}</Titulo>
              <input placeholder={i18n.t("login.inputs.nome")}></input>
              <IMaskInput
                mask="000.000.000-00"
                placeholder={i18n.t("login.inputs.cpf")}
                type="text"
                required
              />
              <IMaskInput
                mask="(00) 00000 - 0000"
                placeholder={i18n.t("login.inputs.telefone")}
                type="text"
                required
              />
              <input
                type="text"
                required
                placeholder={i18n.t("login.inputs.email")}
              ></input>
              <input
                type="text"
                required
                placeholder={i18n.t("login.inputs.senha")}
              ></input>
              <input
                type="text"
                required
                placeholder={i18n.t("login.inputs.confirmarSenha")}
              ></input>
            </div>
          ) : (
            <div>
              <Titulo>{i18n.t("login.tituloLogin")}</Titulo>
              <input
                type="text"
                required
                placeholder={i18n.t("login.inputs.email")}
              ></input>
              <input
                type="text"
                required
                placeholder={i18n.t("login.inputs.senha")}
              ></input>
            </div>
          )}
          <Entrar type="submit">{i18n.t("login.entrar")}</Entrar>
        </EstiloCaixa>
      </Campo>
    </Container>
  );
}
export default Login;
