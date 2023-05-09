import "./stylesidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>GUIA DA PÁGINA</h1>
      <a className="aspan" href="#iniciopag">
        Início
      </a>
      <br />
      <a className="aspan" href="#trama">
        A história
      </a>
      <br />
      <a className="aspan" href="#psgs">
        Pernsonagens
      </a>
      <br />
      <a className="aspan" href="#curiosidades">
        Curiosidades
      </a>
    </div>
  );
}
