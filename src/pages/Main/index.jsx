import "./mainstyles.css";
import Card from "../../components/Card";
import Mensagem from "../../components/Mensagem";
import corleone from "../../assets/corleone.png";
import mike from "../../assets/mikecorleone.png";
import vmike from "../../assets/vitoemike.jpg";
import jogo from "../../assets/jogo.jpg";
import relogio from "../../assets/relogio.jpg";
import familia from "../../assets/familia.jpg";
import textofilme from "../../assets/textochefao.png";
import { Table } from "react-bootstrap";

export default function Main() {
  return (
    <div id="iniciopag" className="main_main">
      <br />
      <br />
      <table>
        <tr
          style={{
            marginLeft: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <td>
            <img
              src={mike}
              className="textocss"
              alt="Poderoso Chefão Michael Corleone"
              height="350px"
            />
          </td>
          <td>
            <img
              src={textofilme}
              alt="Um filme que marcou a história"
              className="textocss"
              height="400px"
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <br />
      <table>
        <tr>
          <td className="caixatexto">
            <h1
              style={{
                color: "black",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              A trama e o contexto por trás de um dos maiores filmes do Mundo: O
              Poderoso Chefão.
            </h1>
            <h2 className="h21">
              O Poderoso Chefão é um filme norte-americano que se trata de uma
              família mafiosa extremamente poderoso nos Estados Unidos que passa
              por diversas crises. Em pouco tempo <i>"The Godfather"</i>("O
              Poderoso Chefão") já se tornou um dos filmes mais importantes da
              história do cinema mundial.
            </h2>
          </td>
          <td>
            <img
              src={corleone}
              alt="Don Corleone"
              height="300px"
              className="imgcorleone"
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <details>
        <summary className="sumario">Principais premiações</summary>
        <p className="sumario1">
          Oscar de Melhor Ator 1973 · Marlon Brando | Oscar de Melhor Filme 1973
          · Albert S. Ruddy | Oscar de Melhor Roteiro Adaptado 1973 · Francis
          Ford Coppola, Mario Puzo | Prêmio Globo de Ouro: Melhor Ator em Filme
          Dramático 1973 · Marlon Brando | Prêmio Globo de Ouro: Melhor Trilha
          Sonora Original 1973 · Nino Rota | Prêmio Globo de Ouro: Melhor Filme
          Dramático 1973 · Albert S. Ruddy | Prêmio Globo de Ouro: Melhor
          Roteiro de Cinema 1973 · Francis Ford Coppola | Prêmio Globo de Ouro:
          Melhor Diretor 1973 · Francis Ford Coppola
        </p>
      </details>
      <br id="trama" />
      <br />
      <br />
      <br />
      <h1
        style={{
          color: "black",
          fontSize: "28px",
          fontWeight: "bold"
        }}
      >
        O desenrolar da trama
      </h1>
      <table
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <td>
          <h2 className="h22">
            Ao longo do filme Don Corleone(até o momento sendo o Vito Corleone)
            faz diversos favores e serviços para amigos e família, geralmente
            esses favores sendo com busca de poder, dinheiro ou fama, como por
            exemplo Johnny Fontane, que é um cantor afilhado do Don, ele pede
            ajuda para estrelar um filme que vai ajudá-lo a reerguer sua
            carreira. Esse favor acarretando na famosa cena da cabeça do cavalo
            na cama do Jack Woltz(chefe de estúdio).
          </h2>
        </td>
        <img
          src={familia}
          alt="Família Corleone"
          style={{ marginRight: "20px", width: "400px", borderRadius: "10px" }}
        />
      </table>
      <br />
      <table
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <tr>
          <td>
            <img
              src={vmike}
              alt="Vito Corleone e Michael Corleone"
              style={{
                marginLeft: "20px",
                width: "400px",
                borderRadius: "10px"
              }}
            />
          </td>
          <td>
            <h2 className="h22">
              Depois de diversos eventos Vito Corleone sofre um atentado contra
              sua vida e é baleado 5 vezes, porém consegue continuar vivo, mas
              não consegue se manter no papel de Don, por isso coloca Michael no
              papel seu lugar, que era visto como um "civil" pois não tinha
              ligação com a máfia.
            </h2>
          </td>
        </tr>
      </table>

      <br id="psgs" />
      <br />
      <hr style={{ marginTop: "10px", borderTop: "3px dotted whitesmoke" }} />
      <span>
        {" "}
        <a
          href="https://noqqmr.csb.app/"
          style={{ color: "whitesmoke", textDecoration: "none" }}
        >
          {" "}
          Para ver mais sobre cinema clique aqui!
        </a>
      </span>
      <hr style={{ marginTop: "10px", borderTop: "3px dotted whitesmoke" }} />

      <br />
      <br />
      <h1
        style={{
          color: "black",
          fontSize: "28px",
          fontWeight: "bold"
        }}
      >
        Persnagens Marcantes
      </h1>
      <br />
      <Card />
      <br id="curiosidades" />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          color: "black",
          fontSize: "28px",
          fontWeight: "bold"
        }}
      >
        {" "}
        Curiosidades
      </h1>
      <br />
      <table>
        <tr>
          <td>
            <h1
              style={{
                marginLeft: "20px",
                color: "black",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              O Relógio "Jacob & Co. Opera Godfather Edition"
            </h1>
            <h2 className="h22">
              Um relógio da joalheria e relojoaria Jacob & Co em parceria com O
              Poderoso Chefão que além de ser um complexo relógio com movimentos
              sofisticados, ainda toca uma{" "}
              <a
                style={{ textDecoration: "none", color: "whitesmoke" }}
                href="https://www.youtube.com/watch?v=ZJcCPmPKlPQ"
              >
                música do filme.
              </a>
            </h2>
            <img
              src={relogio}
              alt="Relógio Jacob & Co Opera"
              style={{ width: "250px" }}
            />
          </td>
          <td
            style={{
              marginLeft: "20px",
              color: "black",
              fontSize: "22px",
              fontWeight: "bold"
            }}
          >
            <h1
              style={{
                marginLeft: "20px",
                color: "black",
                fontSize: "22px",
                fontWeight: "bold"
              }}
            >
              O jogo "The Godfather: The Game"
            </h1>
            <h2 className="h22">
              "The Godfather: The Game" é um jogo de ação e aventura da
              Electronic Arts baseado no filme de 1972 The Godfather. O jogo foi
              inicialmente lançado em março de 2006 para PlayStation 2, Xbox e
              Microsoft Windows.
            </h2>
            <img
              src={jogo}
              alt="Relógio Jacob & Co Opera"
              style={{ width: "250px" }}
            />
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <Mensagem titulo="A história por trás do filme" corpo="" />
      <br />
    </div>
  );
}
