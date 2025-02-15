import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // ✅ Import CSS file

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ State for mobile menu

  // ✅ Close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="site-name">Centipawn Lexicon</div>

          {/* ✅ Hamburger menu (only visible on mobile) */}
          <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>

        {/* ✅ Navigation links (always visible on desktop, collapsible on mobile) */}
        <div className={`links-container ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Control Room</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>Data Vault</Link>
          <Link to="/pricing" className="nav-link" onClick={closeMenu}>Engine Bay</Link>
          <Link to="/protected" className="nav-link" onClick={closeMenu}>Login</Link>
        </div>
      </nav>

      <div style={{ padding: "20px", textAlign: "center", marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
}
