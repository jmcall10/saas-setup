import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🏈 Sign Up & Take Control of Your Season</h1>
      <p><h3>We aren't just a roster platform - we're your team hub</h3>
<br/>


<br/>
Free to get started. No credit card required.<br/>
📥 Create your first team today</p>
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
