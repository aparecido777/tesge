import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import Rodape from "../Rodape/index";
import "./styles.css";

export default function Layout() {
  return (
    <div className="grid">
      <header className="gheader">
        <Header />
      </header>
      <main className="gmain">
        <Outlet />
      </main>
    </div>
  );
}
