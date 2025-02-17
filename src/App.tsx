import { Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import Layout from "./components/Layout"; // Import Layout
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Protected Page (Authenticator Required) */}
        <Route
          path="/protected"
          element={
            <Authenticator>
              {({ signOut, user }) => (
                <div>
                  <h1>Protected Page</h1>
                  <p>Welcome, {user?.userId}!</p>
                  <button onClick={signOut}>Sign Out</button>
                  <button onClick={signOut}>Upload Games</button>
                </div>
              )}
            </Authenticator>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
