import React from 'react';

export default function Navbar({ currentView, setView }) {
  return (
    <header style={{ padding: '30px 0', backgroundColor: 'transparent' }}>
      <div className="container-fullscreen" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* LOGO */}
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '400', letterSpacing: '4px', textTransform: 'uppercase' }}>
          MERIGOLD
        </h1>
        
        {/* LINKS CENTRAIS */}
        <nav style={{ display: 'flex', gap: '40px' }}>
          {['Boutique', 'História', 'Garantia'].map((item) => (
            <span key={item} style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-text-sub)', cursor: 'pointer' }}>
              {item}
            </span>
          ))}
        </nav>

        {/* SELETORES DA DIREITA / NAVEGAÇÃO ADMIN */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: 'var(--color-text-sub)', letterSpacing: '1px' }}>MOEDAS (₥)</span>
          <button 
            style={{
              background: currentView === 'admin' ? 'var(--color-accent)' : 'rgba(35, 57, 91, 0.4)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-main)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer'
            }}
            onClick={() => setView(currentView === 'shop' ? 'admin' : 'shop')}
          >
            {currentView === 'shop' ? 'Painel Admin' : 'Voltar à Loja'}
          </button>
        </div>

      </div>
    </header>
  );
}