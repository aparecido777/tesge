import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import "./styles.css";
import logo from "../../assets/logo1.png";
import { useState } from "react";

export default function Signin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      signIn({ user, password });
      navigate(from, { replace: true });
    } catch (error) {
      console.log("Erro de login");
      setUser("");
      setPassword("");
    }
  };

  const handleLimpar = (evt) => {
    evt.preventDefault();
    setUser("");
    setPassword("");
  };

  return (
    <div className="content">
      <div className="signin">
        <div>
          <h1 className="text">FAZER LOGIN</h1>
          <form className="formulario">
            <input
              className="cssinput"
              value={user}
              onChange={(evt) => setUser(evt.target.value)}
              placeholder="Usuário"
            />
            <input
              className="cssinput"
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <button className="bn32" onClick={handleSubmit}>
              Acessar
            </button>
            <button className="bn32" onClick={handleLimpar}>
              Limpar
            </button>
          </form>
        </div>
        <Link style={{ color: "white" }} to="/signup">
          {" "}
          Cadastrar-se
        </Link>
      </div>
    </div>
  );
}
