import { CSSProperties } from "react";

export default function Pricing() {
    return (
    <div className="mycontainer">

        <div style={styles.container}>
          <h2>London</h2>
          <p>London is the capital city of England.</p>
          <p>London has over 9 million inhabitants.</p>
        </div>
        
        <div style={styles.container}>
          <h2>Oslo</h2>
          <p>Oslo is the capital city of Norway.</p>
          <p>Oslo has over 700,000 inhabitants.</p>
        </div>
        
        <div style={styles.container}>
          <h2>Rome</h2>
          <p>Rome is the capital city of Italy.</p>
          <p>Rome has over 4 million inhabitants.</p>
        </div>
      
    </div>

    
    );
  }
  
  // Correctly typed CSS styles
  const styles: { container: CSSProperties } = {
    container: {
      textAlign: "center",
      marginTop: "50px", // Ensure valid CSS units (e.g., '50px', '2rem')
      backgroundColor: "#93C47D",
      padding: "20px"
    },
  };
  