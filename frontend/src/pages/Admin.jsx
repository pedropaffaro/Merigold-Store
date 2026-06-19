import React, { useState } from 'react';

export default function Admin({ potions, onCadastrar, onRemover }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastrar({ nome, descricao, preco: Number(preco), imagem: imagem || "https://images.unsplash.com/photo-1512207736890-6ffed8aee723?w=150" });
    setNome(''); setDescricao(''); setPreco(''); setImagem('');
  };

  const inputStyle = {
    backgroundColor: 'var(--color-bg)',
    border: '1px solid rgba(232, 233, 235, 0.1)',
    color: 'var(--color-text-main)',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '15px'
  };

  return (
    <main className="container-fullscreen" style={{ paddingTop: '40px' }}>
      <h2 style={{ marginBottom: '32px' }}>Painel Administrativo</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', alignItems: 'start' }}>
        {/* Formulário */}
        <section style={{ backgroundColor: 'var(--color-surface)', padding: '28px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Nova Poção</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input type="text" placeholder="Nome do Produto" value={nome} onChange={e => setNome(e.target.value)} style={inputStyle} required />
            <textarea placeholder="Descrição dos efeitos..." value={descricao} onChange={e => setDescricao(e.target.value)} style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} required />
            <input type="number" placeholder="Preço (Moedas)" value={preco} onChange={e => setPreco(e.target.value)} style={inputStyle} required />
            <input type="text" placeholder="URL da Imagem" value={imagem} onChange={e => setImagem(e.target.value)} style={inputStyle} />
            <button type="submit" className="btn" style={{ marginTop: '8px' }}>Salvar no Acervo</button>
          </form>
        </section>

        {/* Tabela de Gerenciamento */}
        <section style={{ backgroundColor: 'var(--color-surface)', padding: '28px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px' }}>Acervo Atual</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-bg)', color: 'var(--color-text-sub)' }}>
                  <th style={{ padding: '12px 8px' }}>Nome</th>
                  <th style={{ padding: '12px 8px' }}>Preço</th>
                  <th style={{ padding: '12px 8px', textAlign: 'center' }}>Ações</th>
                </tr>
              </thead>
              <tbody>
                {potions.map(p => (
                  <tr key={p.id} style={{ borderBottom: '1px solid rgba(232, 233, 235, 0.05)' }}>
                    <td style={{ padding: '14px 8px', fontWeight: '500' }}>{p.nome}</td>
                    <td style={{ padding: '14px 8px' }}>{p.preco} moedas</td>
                    <td style={{ padding: '14px 8px', textAlign: 'center' }}>
                      <button 
                        onClick={() => onRemover(p.id)} 
                        className="btn" 
                        style={{ padding: '6px 12px', fontSize: '13px', backgroundColor: '#bf3647' }}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}