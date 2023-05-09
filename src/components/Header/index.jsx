import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/index";
import "./styles.css";

export default function Header() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="headercfg">
      <nav className="navcfg">
        <h3 className="h31">PRCD/MOVIES</h3>
        <div className="atalhos">
          <Link className="textopags" to="/">
            Home
          </Link>
          <Link className="textopags" to="/areapedagogica">
            Área Pedagógica
          </Link>
          <Link className="textopags" to="/sobre">
            Sobre
          </Link>
        </div>
        <div className="divbutton">
          {user?.id ? (
            <>
              <span className="textola">Olá, {user.usu_nome}</span>
              <button className="bn32" onClick={signOut}>
                Sair
              </button>
            </>
          ) : (
            <div className="quit">
              <button className="bn32" onClick={() => navigate("/signin")}>
                ENTRAR
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
