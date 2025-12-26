import React from 'react';

export default function OrcamentoSection() {
  const servicos = [
    {
      id: 1,
      titulo: 'Cozinha Planejada',
      descricao: 'Projetos sob medida com MDF de alta qualidade. Otimização de espaços, acabamentos premium e instalação profissional.',
      imagem: '/cozinha.jpg',
      icone: 'utensils',
      link: 'https://wa.me/5571986319812?text=Olá! Quero orçamento para Cozinha'
    },
    {
      id: 2,
      titulo: 'Banheiro Planejado',
      descricao: 'Móveis em MDF resistente à umidade. Design funcional e elegante com materiais de primeira linha.',
      imagem: '/banheiro.jpg',
      icone: 'bath',
      link: 'https://wa.me/5571986319812?text=Olá! Quero orçamento para Banheiro'
    },
    {
      id: 3,
      titulo: 'Sala Planejada',
      descricao: 'Ambientes personalizados em MDF com acabamento impecável. Soluções criativas para otimizar seu espaço.',
      imagem: '/sala.jpg',
      icone: 'couch',
      link: 'https://wa.me/5571986319812?text=Olá! Quero orçamento para Sala'
    },
    {
      id: 4,
      titulo: 'Quarto Planejado',
      descricao: 'Guarda-roupas e móveis sob medida em MDF. Máximo aproveitamento com design elegante e funcional.',
      imagem: '/quarto.jpg',
      icone: 'bed',
      link: 'https://wa.me/5571986319812?text=Olá! Quero orçamento para Quarto'
    }
  ];

  return (
    <>
      <style>{`
        .orcamento-section {
          padding: 60px 10%;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
        }

        .orcamento-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 50px;
          letter-spacing: 1px;
        }

        .orcamento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto 50px;
        }

        .orcamento-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .orcamento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .orcamento-image {
          width: 100%;
          height: 320px;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .orcamento-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.15) 100%);
        }

        .orcamento-info {
          padding: 24px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }

        .orcamento-info-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .orcamento-info i {
          font-size: 24px;
          color: #3b82f6;
        }

        .orcamento-info h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .orcamento-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: white;
          text-decoration: none;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
          transition: all 0.3s ease;
          margin: 0 auto;
          display: flex;
          max-width: fit-content;
        }

        .whatsapp-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
        }

        .instagram-link {
          display: block;
          text-align: center;
          margin-top: 30px;
          color: #e4405f;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .instagram-link:hover {
          color: #c13584;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .orcamento-section {
            padding: 40px 5%;
          }

          .orcamento-title {
            font-size: 24px;
            margin-bottom: 30px;
          }

          .orcamento-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .orcamento-image {
            height: 200px;
          }

          .whatsapp-button {
            padding: 14px 32px;
            font-size: 16px;
          }
        }
      `}</style>

      <section className="orcamento-section">
        <h2 className="orcamento-title">SOLICITE SEU ORÇAMENTO</h2>

        <div className="orcamento-grid">
          {servicos.map((servico) => (
            <a
              key={servico.id}
              href={servico.link}
              target="_blank"
              rel="noopener noreferrer"
              className="orcamento-card"
            >
              <div
                className="orcamento-image"
                style={{ backgroundImage: `url(${servico.imagem})` }}
              />
              
              <div className="orcamento-info">
                <div className="orcamento-info-header">
                  <i className={`fas fa-${servico.icone}`}></i>
                  <h3>{servico.titulo}</h3>
                </div>
                <p className="orcamento-description">{servico.descricao}</p>
              </div>
            </a>
          ))}
        </div>

    
      </section>

      
    </>
  );
}