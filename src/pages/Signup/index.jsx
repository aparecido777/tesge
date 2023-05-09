import "./styles.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="content">
      <div className="signin">
        <div>
          <h1>cadastrar-se</h1>
          <form>
            <input className="cssinput" placeholder="Nome Completo" />
            <input className="cssinput" placeholder="E-mail" type="email" />
            <input className="cssinput" placeholder="Senha" type="password" />
            <input
              className="cssinput"
              placeholder="Contra senha"
              type="password"
            />
            <button className="bn32">Acessar</button>
            <button className="bn32">Limpar</button>
          </form>
        </div>
        <Link style={{ color: "white" }} to="/signin">
          Voltar
        </Link>
      </div>
    </div>
  );
}
