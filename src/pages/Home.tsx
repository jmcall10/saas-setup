import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🚀 Sign Up & Take Control of Your Chess Journey</h1>
      <p><h3>Centipawn Lexicon isn’t just a chess site - it’s your personal chess research lab.<br/><br/>
Join a community of data-driven players and start unlocking the insights hiding in your games.</h3>
<br/>





<br/>
🔹 Free to get started. No credit card required.<br/>
📥 Import your first game today!</p>
    </div>
  );
}

// Correctly typed CSS styles
const styles: { container: CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "-200px", // Ensure valid CSS units (e.g., '50px', '2rem')
  },
};
