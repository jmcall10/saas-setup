import { CSSProperties } from "react";

export default function Pricing() {
    return (
    <div className="mycontainer">

        <div style={styles.container}>
          <h2>Free</h2>
          <p>Create and manage your roster</p>
          <p>Supports 1 team up to 55 players</p>
        </div>
        
        <div style={styles.container}>
          <h2>Basic</h2>
          <p>Create and manage your roster</p>
          <p>Create and distribute playbooks</p>
        </div>
        
        <div style={styles.container}>
          <h2>Pro</h2>
          <p>Create and manage your roster</p>
          <p>Distribute unlimited plays</p>
        </div>
      
    </div>

    
    );
  }
  
  // Correctly typed CSS styles
  const styles: { container: CSSProperties } = {
    container: {
      textAlign: "center",
      marginTop: "5px", // Ensure valid CSS units (e.g., '50px', '2rem')
      marginLeft: "5px",  // ✅ Adds space between each container
      marginRight: "5px",
      backgroundColor: "#93C47D",
      padding: "20px"
    },
  };
  