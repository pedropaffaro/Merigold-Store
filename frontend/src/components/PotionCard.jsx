import React from 'react';

export default function PotionCard({ potion }) {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface)',
      borderRadius: '36px', /* Bordas super circulares como a referência */
      padding: '30px',
      position: 'relative',
      height: '480px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgba(35, 57, 91, 0.2)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.borderColor = 'var(--color-accent)';
      e.currentTarget.style.boxShadow = '0 35px 60px rgba(0,0,0,0.7)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(35, 57, 91, 0.2)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.5)';
    }}
    >
      {/* Tag de Edição Limitada superior esquerda */}
      <div style={{
        position: 'absolute',
        top: '30px',
        left: '30px',
        backgroundColor: 'rgba(153, 57, 85, 0.15)',
        border: '1px solid var(--color-accent)',
        color: 'var(--color-text-main)',
        fontSize: '9px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        padding: '6px 14px',
        borderRadius: '20px'
      }}>
        Lote Exclusivo
      </div>

      {/* Imagem Flutuante Centralizada com Sombra Tridimensional */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}>
        <img 
          src={potion.imagem} 
          alt={potion.nome} 
          style={{ 
            maxHeight: '220px', 
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 35px rgba(0,0,0,0.8))' 
          }} 
        />
      </div>

      {/* Textos na Base alinhados à esquerda */}
      <div style={{ textAlign: 'left' }}>
        <span style={{ color: 'var(--color-text-sub)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '6px' }}>
          Fórmula ID: 00{potion.id}-M
        </span>
        
        <h4 style={{ margin: '0 0 8px 0', fontSize: '22px', fontWeight: '300', letterSpacing: '1px' }}>
          {potion.nome}
        </h4>
        
        <p style={{ color: 'rgba(193, 165, 169, 0.6)', fontSize: '13px', lineHeight: '1.5', margin: '0 0 20px 0', minHeight: '40px' }}>
          {potion.descricao}
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderTop: '1px solid rgba(232, 233, 235, 0.08)',
          paddingTop: '16px'
        }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '1px' }}>
            {potion.preco} <span style={{ fontSize: '11px', color: 'var(--color-text-sub)', fontWeight: 'normal' }}>MOEDAS</span>
          </span>
          
          <button style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--color-text-main)',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-main)'}
          >
            Adquirir →
          </button>
        </div>
      </div>

    </div>
  );
}