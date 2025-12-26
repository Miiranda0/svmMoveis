import React from 'react';

export default function FloatingButtons() {
  return (
    <>
      <style>{`
        .floating-buttons {
          position: fixed;
          bottom: 30px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          z-index: 1000;
        }

        .floating-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          font-size: 28px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .floating-btn.whatsapp {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
        }

        .floating-btn.whatsapp:hover {
          background: linear-gradient(135deg, #128c7e 0%, #25d366 100%);
        }

        .floating-btn.instagram {
          background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
        }

        .floating-btn.instagram:hover {
          background: linear-gradient(135deg, #bc1888 0%, #cc2366 25%, #dc2743 50%, #e6683c 75%, #f09433 100%);
        }

        /* Animação de pulso */
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
          50% {
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.5);
          }
          100% {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }
        }

        .floating-btn.whatsapp {
          animation: pulse 2s infinite;
        }

        @media (max-width: 768px) {
          .floating-buttons {
            bottom: 20px;
            right: 20px;
          }

          .floating-btn {
            width: 55px;
            height: 55px;
            font-size: 24px;
          }
        }
      `}</style>

      <div className="floating-buttons">
        <a
          href="https://wa.me/5571986319812?text=Olá! Gostaria de um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp"
          title="Fale conosco no WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a
          href="https://instagram.com/svmmoveis"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn instagram"
          title="Siga no Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </>
  );
}