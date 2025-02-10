import { Link } from "react-router-dom";
import { CSSProperties } from "react";

const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
      backgroundColor: "#93C47D",
      padding: "22px",
      display: "flex",
      justifyContent: "center",
      gap: "80px",
      position: "fixed", // Keeps navbar fixed at the top
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "26px",
    },
    content: {
      padding: "20px",
      textAlign: "center",
      marginTop: "60px", // Prevents content from being hidden under navbar
    },
  };
  

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}> Home </Link>
        <Link to="/about" style={styles.link}> About </Link>
        <Link to="/pricing" style={styles.link}> Pricing </Link>
        <Link to="/protected" style={styles.link}> Login </Link>
      </nav>

      {/* Page Content */}
      <div style={styles.content}>{children}</div>
    </div>
  );
}
