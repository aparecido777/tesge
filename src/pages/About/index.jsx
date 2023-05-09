import "./styles.css";
import eu from "../../assets/eu.png";
import insta from "../../assets/insta.png";
import git from "../../assets/github.png";
import zap from "../../assets/zap.png";
import email from "../../assets/email.png";

export default function About() {
  return (
    <div className="boxabout">
      <table>
        <tr>
          <td>
            <h1 className="texttitulo">Um pouco sobre mim:</h1>
            <br />

            <img src={eu} className="imgeu" />
          </td>
          <td className="boxh2">
            <h2 className="textabtme">
              Meu nome é Guilherme Aparecido, tenho 16 anos e sou um programador
              iniciante com estudos em: <b>C, JavaScript, CSS e HTML</b>. Fiz a
              escolha do website sobre o filme "O Poderoso Chefão" pois tenho
              grande admiração pela obra e sinto que há diversos ensinamentos e
              curiosidades que eu possa juntar em um só lugar.
            </h2>
            <br />
            <h2 className="textabtme1">
              <b>Escola: ETEC Prof. Milton Gazzetti</b>
            </h2>
          </td>
          <td>
            <ul
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "0 auto",
                marginTop: "60px",
                maxWidth: "20em"
              }}
            >
              <li>
                <a className="redes" href="https://github.com/aparecido777">
                  <img src={git} alt="Símbolo do GitHub" className="asocial" />
                  GitHub
                </a>
              </li>
              <br />
              <li>
                <a className="redes" href="https://wa.me/qr/XDEBAOJJMRSBJ1">
                  <img
                    src={zap}
                    alt="Símbolo do WhatsApp "
                    className="asocial"
                  />
                  WhatsApp
                </a>
              </li>
              <br />
              <li>
                <a className="redes" href="mailto:guilhermeapereiras@gmail.com">
                  <img src={email} alt="Símbolo do Email" className="asocial" />
                  Email
                </a>
              </li>
              <br />
              <li>
                <a className="redes" href="#">
                  <img
                    src={insta}
                    alt="Símbolo do Instagram"
                    className="asocial"
                  />
                  Instagram
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <div>
        <h1
          style={{
            color: "black",
            fontSize: "22px",
            fontWeight: "bold"
          }}
        >
          "Eu não luto porque acho que vou vencer. Eu luto porque tenho que
          vencer."
        </h1>
        <div style={{ alignItems: "right", textAlign: "right" }}>
          <h1
            style={{
              marginRight: "20%",
              color: "black",
              fontSize: "22px",
              fontWeight: "bold"
            }}
          >
            -Bleach
          </h1>
        </div>
      </div>
    </div>
  );
}
