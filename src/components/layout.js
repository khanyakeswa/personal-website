import Menu from "./menu";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="navbar">
        <Menu
        />
      </div>
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
