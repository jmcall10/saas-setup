import { Link } from "react-router-dom";
import "./Layout.css"; // ✅ Import CSS file

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar">
        <div className="site-name">Centipawn Lexicon</div>
        <div className="links-container">
        <Link to="/" className="nav-link">Control Room</Link>
          <Link to="/about" className="nav-link">Data Vault</Link>
          <Link to="/pricing" className="nav-link">Engine Bay</Link>
          <Link to="/protected" className="nav-link">Login</Link>
        </div>
      </nav>
      <div style={{ padding: "20px", textAlign: "center", marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
}
