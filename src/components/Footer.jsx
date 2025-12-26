import React from 'react';

// Definimos o componente usando export const ou export default
export const Footer = () => {
  
  // Estilos organizados em um objeto para manter o JSX limpo
  const containerStyle = {
    backgroundColor: '#001e36',
    color: '#ffffff',
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    fontSize: '14px'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '30px'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '250px',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '15px',
    display: 'block'
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    lineHeight: '1.8',
    color: '#cbd5e0'
  };

  const hrStyle = {
    border: 'none',
    borderTop: '1px solid #2d3748',
    margin: '30px 0'
  };

  const bottomStyle = {
    textAlign: 'center',
    color: '#a0aec0'
  };

  const linkStyle = {
    color: '#ffffff',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  return (
    <footer style={containerStyle}>
      <div style={gridStyle}>
        
        {/* Coluna 1 */}
        <div style={columnStyle}>
          <span style={titleStyle}>SVM Móveis</span>
          <p style={{color: '#cbd5e0'}}>
            Especialistas em produção, instalação e manutenção de móveis em Salvador e região.
          </p>
        </div>

        {/* Coluna 2 */}
        <div style={columnStyle}>
          <span style={titleStyle}>Serviços</span>
          <ul style={listStyle}>
            <li>Projetos de armários</li>
            <li>Armários planejados</li>
            <li>Instalação</li>
            <li>Manutenção</li>
            
          </ul>
        </div>

        {/* Coluna 3 */}
        <div style={columnStyle}>
          <span style={titleStyle}>Contato</span>
          <ul style={listStyle}>
            <li>Telefone: +55 71 98631-9812</li>
            <li>Salvador - BA</li>
            <li>Segunda a Sexta, 8h às 18h</li>
            <li>Sábado, 8h às 12h</li>
          </ul>
        </div>
      </div>

      <hr style={hrStyle} />

      <div style={bottomStyle}>
        <p>© 2025 SVM Móveis. Todos os direitos reservados.</p>
        <div style={{marginTop: '20px'}}>
          <a href="https://wa.me/557197227606" style={linkStyle}>Quer fazer um site para a sua empresa também? Clique aqui</a>
          <p style={{marginTop: '10px'}}>
            Site feito por <span style={linkStyle}>David Miranda</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;