import "./stylepedago.css";
import mafia from "../../assets/mafia.png";
import geo from "../../assets/geo.png";
import arte from "../../assets/arte.png";
import { Alert } from "react-bootstrap";
export default function AreaPedagogica() {
  return (
    <div className="divpedago">
      <br />
      <br />
      <br />
      <br />
      <h1 className="h14">
        As matérias que podem ser estudadas com o filme O Poderoso Chefão
      </h1>
      <div style={{ display: "flex" }}>
        <div>
          <br />
          <h1 style={{ fontWeight: "bold", fontSize: "24px", color: "black" }}>
            História
          </h1>

          <br />
          <h2 style={{ fontSize: "18px", color: "black" }}>
            A máfia foi introduzida nos Estados Unidos da América graças aos
            imigrantes de Sicília, Nápoles e da Calábria na Itália, que buscavam
            uma vida melhor em outro lugar pois a Europa estava passando por
            grandes transformações provenientes da luta contra o Antigo Regime e
            a instalação de regimes liberais. A condição econômica um pouco mais
            privilegiada de certas famílias italianas acabou impondo relações de
            poder semelhantes àquelas impostas dos grandes latifundiários sobre
            os pequenos camponeses. Através da violência, empréstimos e
            atividades econômicas ilegais essas famílias um pouco mais
            privilegiadas formaram as máfias que seriam tão conhecidas nas
            primeiras décadas do século XX.
          </h2>
          <h2 style={{ fontSize: "18px", color: "whitesmoke" }}>
            Fonte:
            <a
              href="https://www.historiadomundo.com.br/idade-contemporanea/mafia-norte-americana.htm"
              style={{ color: "whitesmoke", textDecoration: "none" }}
            >
              História do Mundo
            </a>
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "40px"
          }}
        >
          <img src={mafia} alt="Mafiosos de 1920" style={{ width: "200px" }} />
        </div>
      </div>
      <br />
      <hr style={{ marginTop: "10px", borderTop: "3px dotted whitesmoke" }} />

      <br />
      <div style={{ display: "flex" }}>
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "22px", color: "black" }}>
            Arte
          </h1>

          <br />
          <br />
          <h2 style={{ fontSize: "18px", color: "black" }}>
            A arte por trás de O Poderoso Chefão é notória e explêndida, os
            ângulos da câmera, a iluminação, a música e principalmente a
            atuação, que fez com que Marlon Brando ganhasse o Oscar de Melhor
            Ator de 1973, além de todos os demais premios que o filme venceu.
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "40px"
          }}
        >
          <img
            src={arte}
            alt="Fotografia em O Poderoso Chefão"
            style={{ width: "200px" }}
          />
        </div>
      </div>
      <br />
      <hr style={{ marginTop: "10px", borderTop: "3px dotted whitesmoke" }} />

      <br />
      <div style={{ display: "flex" }}>
        <div>
          <h1 style={{ fontWeight: "bold", fontSize: "22px", color: "black" }}>
            Geografia
          </h1>

          <br />
          <h2 style={{ fontSize: "18px", color: "black" }}>
            Ainda que a maior parte da história aconteça em Nova York, alguns
            episódios importantes da trama de O Poderoso Chefão se desenrolam em
            território siciliano. Corleone, a cidade-natal da família de
            mafiosos, realmente existe e fica ao sul de Palermo.{" "}
          </h2>
          <h2 style={{ fontSize: "18px", color: "whitesmoke" }}>
            {" "}
            Fonte:
            <a
              href="https://viagemeturismo.abril.com.br/coluna/piacere-italia/cenarios-de-o-poderoso-chefao-nos-arredores-de-taormina/#:~:text=Ainda%20que%20a%20maior%20parte,fica%20ao%20sul%20de%20Palermo."
              style={{ color: "whitesmoke", textDecoration: "none" }}
            >
              {" "}
              Viagem e Turismo
            </a>{" "}
          </h2>
        </div>
        <div>
          <img
            src={geo}
            alt="Nova York e Corleone"
            style={{ width: "200px" }}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <table>
        <td></td>
      </table>
      <br />
      <br />
      <br />
    </div>
  );
}
