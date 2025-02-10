import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Our App 🎉</h1>
      <p>Explore the features and learn more about what we offer.</p>
    </div>
  );
}

// Correctly typed CSS styles
const styles: { container: CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "50px", // Ensure valid CSS units (e.g., '50px', '2rem')
  },
};
