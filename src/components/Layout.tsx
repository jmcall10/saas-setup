import { Link } from "react-router-dom";
import "./Layout.css"; // ✅ Import CSS file

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar">
        <div className="site-name">Centipawn Lexicon</div>
        <div className="links-container">
        <Link to="/" className="nav-link">Skill Corner</Link>
          <Link to="/about" className="nav-link">vs. Engines</Link>
          <Link to="/pricing" className="nav-link">My Dashboard</Link>
          <Link to="/protected" className="nav-link">Login</Link>
        </div>
      </nav>
      <div style={{ padding: "20px", textAlign: "center", marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
}
