import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [view, setView] = useState("shop");
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/potions")
      .then((res) => res.json())
      .then((data) => setPotions(data));
  }, []);

  const handleCadastrar = async (novaPocao) => {
    const response = await fetch("http://localhost:3001/potions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaPocao),
    });
    const data = await response.json();
    setPotions([...potions, data]);
  };

  const handleRemover = async (id) => {
    await fetch(`http://localhost:3001/potions/${id}`, {
      method: "DELETE",
    });
    setPotions(potions.filter((p) => p.id !== id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Navbar currentView={view} setView={setView} />

        {view === "shop" ? (
          <Shop potions={potions} />
        ) : (
          <Admin
            potions={potions}
            onCadastrar={handleCadastrar}
            onRemover={handleRemover}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
