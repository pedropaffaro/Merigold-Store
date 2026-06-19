import React, { useState, useEffect } from "react";
import PotionCard from "../components/PotionCard";

export default function Shop({ potions }) {
  const [precoMaximo, setPrecoMaximo] = useState(0);

  // Sempre que a lista de poções mudar, descobre o maior preço
  useEffect(() => {
    if (potions.length > 0) {
      // Mapeia apenas os preços e acha o maior deles
      const maiorPreco = Math.max(...potions.map((p) => p.preco));
      setPrecoMaximo(maiorPreco);
    }
  }, [potions]); // Executa sempre que o array de poções atualizar

  // Filtra as poções com base no valor digitado
  const potionsFiltradas = potions.filter((p) => p.preco <= precoMaximo);

  return (
    <main className="container-fullscreen" style={{ paddingTop: "20px" }}>
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "72px",
            fontWeight: "300",
            textTransform: "uppercase",
            letterSpacing: "4px",
            margin: 0,
          }}
        >
          Nossa História
        </h2>
      </div>

      <section
        style={{
          marginTop: "40px",
          padding: "80px",
          backgroundColor: "var(--color-surface)",
          borderRadius: "40px",
          border: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "60%" }}>
          <span
            style={{
              color: "var(--color-accent)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
          >
            Legado Merigold
          </span>
          <h3
            style={{
              fontSize: "36px",
              fontWeight: "300",
              textTransform: "uppercase",
              letterSpacing: "2px",
              margin: "12px 0 20px 0",
            }}
          >
            Beco da Última Saída
          </h3>
          <p
            style={{
              color: "var(--color-text-sub)",
              lineHeight: "1.8",
              fontSize: "16px",
              margin: 0,
            }}
          >
            Fundada originalmente em 1867, a renomada boutique de Anna Innabelle
            Merigold transpõe as barreiras físicas para entregar elixires puros
            e soluções autênticas diretamente através da malha digital bruxa.
          </p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              borderLeft: "1px solid rgba(232,233,235,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "300",
                color: "var(--color-text-main)",
              }}
            >
              159+
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "var(--color-text-sub)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Anos de Tradição
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              borderLeft: "1px solid rgba(232,233,235,0.1)",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: "300",
                color: "var(--color-accent)",
              }}
            >
              100%
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "var(--color-text-sub)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Fórmula Pura
            </div>
          </div>
        </div>
      </section>

      {/* TÍTULO */}
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "72px",
            fontWeight: "300",
            textTransform: "uppercase",
            letterSpacing: "4px",
            margin: 0,
          }}
        >
          Coleção Alquímica
        </h2>
      </div>

      {/* PAINEL DE FILTRO DE PREÇO */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "40px",
          marginTop: "40px",
          paddingBottom: "40px",
          borderBottom: "1px solid rgba(193, 165, 169, 0.1)",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--color-text-sub)",
              display: "block",
              marginBottom: "10px",
            }}
          >
            Filtrar por Preço Máximo (Moedas)
          </span>
          <input
            type="number"
            placeholder="Ex: 500"
            value={precoMaximo}
            onChange={(e) => {
              const valor = e.target.value === "" ? 0 : Number(e.target.value);
              setPrecoMaximo(valor);
            }}
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid rgba(35, 57, 91, 0.4)",
              color: "var(--color-text-main)",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "14px",
              width: "120px",
              outline: "none",
            }}
          />
        </div>

        <div
          style={{
            borderLeft: "1px solid rgba(193, 165, 169, 0.1)",
            paddingLeft: "40px",
          }}
        >
          <span
            style={{
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "var(--color-text-sub)",
            }}
          >
            Resultados Exibidos: {potionsFiltradas.length} de {potions.length}
          </span>
        </div>
      </div>

      {/* GRADE DE CARDS */}
      <section>
        <div className="desktop-cards-grid">
          {potionsFiltradas.map((potion) => (
            <PotionCard key={potion.id} potion={potion} />
          ))}
        </div>
      </section>
    </main>
  );
}
