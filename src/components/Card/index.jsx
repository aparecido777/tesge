import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import "./styles.css";
import mike from "../../assets/michealcorloene.png";
import vito from "../../assets/vitocorleone.png";
import tom from "../../assets/tomhagen.png";
export default function Mensagem() {
  return (
    <CardGroup className="cardgroup1">
      <Card className="card1">
        <Card.Img
          variant="top"
          img
          className="d-block w-270 img.carrossel"
          src={vito}
          alt="foto publico egs"
        />
        <Card.Body>Vito Corleone</Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Don corleone é um mafioso de origem italiana que foi aos Estados
            Unidos quando criança pois perdeu seus pais na Itália para um
            mafioso da região. O personagem é interpretado por Marlon Brando.{" "}
          </small>
          <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=cq3iI5FgeJE"
            class="btn btn-outline-dark"
          >
            Veja mais
          </a>
        </Card.Footer>
      </Card>
      <Card className="card1">
        <Card.Img
          variant="top"
          img
          className="d-block w-270 img.carrossel"
          src={mike}
          alt="foto publico egs"
        />
        <Card.Body>Michael Corleone</Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Filho de Vito Corleone, mike é um homem que diferente dos demais
            irmãos não queria entrar nos negócios criminais da família, mas no
            final das contas se tornou o novo <i>"Don"</i>. É interpretado por
            Al Pacino.
          </small>
          <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=u3xpLCnV7xE"
            class="btn btn-outline-dark"
          >
            Veja mais
          </a>
          <br />
        </Card.Footer>
      </Card>
      <Card className="card1">
        <Card.Img
          variant="top"
          img
          className="d-block w-270 img.carrossel"
          src={tom}
          alt="foto publico egs"
        />{" "}
        <Card.Body>Tom hagen</Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Tom era o <i>"consigliere"</i>(posição de grande confiança na
            família), sendo filho adotado de Vito, ele era o advogado da família
            e o irmão adotivo de Sonny, Fredo, Michael, e Connie Corleone.
          </small>
          <br />
          <br />
          <a
            href="https://www.youtube.com/watch?v=ChsrRYkVddg"
            class="btn btn-outline-dark"
          >
            Veja mais
          </a>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
