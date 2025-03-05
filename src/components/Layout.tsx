import { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css"; // ✅ Import CSS file

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Close the menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <div className="site-name">Playbook Pro</div>

          {/* ✅ Hamburger menu (only visible on mobile) */}
          <div
            className={`hamburger-menu ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>

        {/* ✅ Navigation links (always visible on desktop, collapsible on mobile) */}
        <div className={`links-container ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>My Roster</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>Playbook</Link>
          <Link to="/pricing" className="nav-link" onClick={closeMenu}>Schedule</Link>
          <Link to="/protected" className="nav-link" onClick={closeMenu}>Login</Link>
        </div>
      </nav>

      <div style={{ padding: "20px", textAlign: "center", marginTop: "80px" }}>
        {children}
      </div>
    </div>
  );
}
