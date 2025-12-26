import React from 'react';

export default function ContactSection() {
  return (
    <>
      <style>{`
        .contact-section {
          padding: 80px 10%;
          background: #ffffff;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-header h2 {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .contact-header p {
          font-size: 16px;
          color: #6b7280;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto 40px;
        }

        .contact-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 30px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
          transform: translateY(-4px);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: #dbeafe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }

        .contact-icon i {
          font-size: 20px;
          color: #3b82f6;
        }

        .contact-card h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .contact-card p {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
          line-height: 1.5;
        }

        .contact-cta {
          text-align: center;
          margin-top: 40px;
        }

        .whatsapp-cta-btn {
          display: inline-flex;
          align-items: center;
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
        }

        .whatsapp-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
        }

        .contact-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 13px;
          color: #9ca3af;
        }

        .contact-footer a {
          color: #3b82f6;
          text-decoration: none;
        }

        .contact-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 968px) {
          .contact-section {
            padding: 50px 5%;
          }

          .contact-header h2 {
            font-size: 24px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .whatsapp-cta-btn {
            padding: 16px 36px;
            font-size: 16px;
          }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você com agilidade.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Telefone</h3>
            <p>(71) 98631-9812</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Localização</h3>
            <p>Salvador</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>contato@svmmoveis.com.br</p>
          </div>
        </div>

        <div className="contact-cta">
          <a
            href="https://wa.me/5571986319812?text=Olá! Gostaria de um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta-btn"
          >
            <i className="fab fa-whatsapp" style={{fontSize: '24px'}}></i>
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>

        <div className="contact-footer">
          Respeito à Privacidade • <a href="#">Regulamento</a> • Atendimento profissional
        </div>
      </section>

    
    </>
  );
}