import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f111a', padding: '32px 0', marginTop: '80px', borderTop: '1px solid var(--color-surface)' }}>
      <div className="container" style={{ textAlign: 'center', color: 'var(--color-text-sub)', fontSize: '14px', lineHeight: '1.6' }}>
        <p style={{ margin: '0 0 8px 0', color: 'var(--color-text-main)' }}>Poções e Soluções &copy; 1867 - 2026</p>
        <p style={{ margin: 0 }}>Contato corporativo: <strong>merigold@potionssolutions.br</strong></p>
        <p style={{ margin: '4px 0 0 0' }}>Sede Oficial: Beco da Última Saída, nº 404</p>
      </div>
    </footer>
  );
}