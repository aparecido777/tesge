import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import Sidebar from "../Sidebar/index";
import Rodape from "../Rodape/index";
import "./style.css";

export default function Layout() {
  return (
    <div className="grid">
      <header className="gheader">
        <Header />
      </header>
      <aside className="gsidebar">
        <Sidebar />
      </aside>
      <main className="gmain">
        <Outlet />
        <Rodape />
      </main>
    </div>
  );
}
