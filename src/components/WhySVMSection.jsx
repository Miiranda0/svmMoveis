import React from 'react';

export default function WhySVMSection() {
  return (
    <>
      <style>{`
        .why-svm-section {
          padding: 80px 10%;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .why-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .why-header h2 {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .why-header p {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.6;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .benefit-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
        }

        .benefit-image {
          width: 100%;
          height: 280px;
          background-size: cover;
          background-position: center;
        }

        .benefit-content {
          padding: 30px;
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          background: #dbeafe;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .benefit-icon i {
          font-size: 24px;
          color: #3b82f6;
        }

        .benefit-content h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .benefit-content p {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .benefit-highlight {
          background: #f0f9ff;
          border-left: 3px solid #3b82f6;
          padding: 16px 20px;
          border-radius: 8px;
          margin-top: 16px;
        }

        .benefit-highlight p {
          margin: 0;
          font-size: 14px;
          color: #1e40af;
          font-style: italic;
        }

        .benefit-author {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
        }

        .benefit-author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e5e7eb;
        }

        .benefit-author-info {
          font-size: 13px;
        }

        .benefit-author-name {
          font-weight: 600;
          color: #374151;
        }

        .benefit-author-role {
          color: #9ca3af;
        }

        @media (max-width: 968px) {
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .why-svm-section {
            padding: 50px 5%;
          }

          .why-header h2 {
            font-size: 24px;
          }

          .benefit-image {
            height: 220px;
          }
        }
      `}</style>

      <section className="why-svm-section">
        <div className="why-header">
          <h2>Por Que a SVM Móveis é Referência em Salvador?</h2>
          <p>
            Mais de 100 projetos entregues confirmam nossa experiência em planejamento,
            qualidade e transformação de ambientes com móveis sob medida.
          </p>
        </div>

        <div className="benefits-grid">
          {/* Card 1 */}
          <div className="benefit-card">
            <div className="benefit-content">
              <div className="benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Qualidade Comprovada em Cada Projeto</h3>
              <p>
                Usamos apenas MDF e MDF Naval de primeira linha, com ferragens
                originais e amortecedores de qualidade. Isso assegura que seu
                projeto terá durabilidade, acabamento impecável e funcionamento
                suave por muitos anos.
              </p>
              <div className="benefit-highlight">
                <p>
                  "Usamos MDF de primeira linha e ferragens com amortecedores
                  para garantir durabilidade e acabamento impecável em cada projeto."
                </p>
                <div className="benefit-author">
                  <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6'}}></div>
                  <div className="benefit-author-info">
                    <div className="benefit-author-name">Equipe SVM</div>
                    <div className="benefit-author-role">Especialistas em Móveis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="benefit-card">
            <div 
              className="benefit-image"
              style={{backgroundImage: 'url(/banheiro1.jpg)'}}
            ></div>
            <div className="benefit-content">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Garantia e Acompanhamento em Cada Projeto</h3>
              <p>
                Todos os nossos projetos incluem garantia e acompanhamento,
                cobrindo desde a medição até a instalação final. Oferecemos suporte
                completo para qualquer dúvida ou ajuste necessário, garantindo sua
                total tranquilidade.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="benefit-card">
            <div 
              className="benefit-image"
              style={{backgroundImage: 'url(/cozinha4.jpg)'}}
            ></div>
            <div className="benefit-content">
              <div className="benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h3>Economia no Custo</h3>
              <p>
                Nossa experiência nos permite otimizar projetos e evitar
                desperdícios de material. Isso reduz significativamente o custo
                final sem comprometer a qualidade, oferecendo o melhor
                custo-benefício do mercado.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="benefit-card">
            
            <div className="benefit-content">
              <div className="benefit-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Materiais Originais e Técnicos Especializados</h3>
              <p>
                Utilizamos exclusivamente MDF e MDF Naval originais, direto dos
                fabricantes. Nossa equipe é altamente treinada e atualizada com
                as melhores práticas do mercado, garantindo instalação perfeita
                e acabamento profissional.
              </p>
              <div className="benefit-highlight">
                <p>
                  "Os armários da minha cozinha ficaram perfeitos! A equipe foi
                  super atenciosa e o acabamento ficou impecável. Recomendo muito!"
                </p>
                <div className="benefit-author">
                  <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#f59e0b'}}></div>
                  <div className="benefit-author-info">
                    <div className="benefit-author-name">David Miranda</div>
                    <div className="benefit-author-role">Cliente • Salvador</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}