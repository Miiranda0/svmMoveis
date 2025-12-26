import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pergunta: 'A SVM faz orçamento pelo site?',
      resposta: 'Não, o orçamento é feito manualmente para garantir precisão e personalização.'
    },
    {
      pergunta: 'Como funciona o processo?',
      resposta: 'Você entra em contato, coletamos medidas ou realizamos visita, desenvolvemos o projeto, produzimos e instalamos.'
    },
    {
      pergunta: 'Vocês fazem instalação?',
      resposta: 'Sim. Fazemos toda a instalação dos móveis planejados com equipe profissional.'
    },
    {
      pergunta: 'Atendem em quais regiões?',
      resposta: 'Atendemos Salvador e região metropolitana.'
    },
    {
      pergunta: 'Quais materiais vocês trabalham?',
      resposta: 'Trabalhamos com MDF e MDF Naval (resistente à umidade), utilizando dobradiças com amortecedores e ferragens de qualidade.'
    },
    {
      pergunta: 'Qual o prazo de entrega?',
      resposta: 'Normalmente entre 30 e 45 dias após a aprovação do projeto.'
    },
    {
      pergunta: 'Posso escolher materiais e cores?',
      resposta: 'Sim. Apresentamos opções e ajudamos a escolher o melhor custo-benefício.'
    },
    {
      pergunta: 'Vocês oferecem garantia?',
      resposta: 'Sim. Oferecemos suporte após a instalação, quando necessário.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        .faq-section {
          padding: 60px 10%;
          background: #ffffff;
        }

        .faq-title {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 50px;
          letter-spacing: 1px;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .accordion {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          margin-bottom: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .accordion:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
        }

        .accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          cursor: pointer;
          user-select: none;
          background: white;
          transition: background 0.3s ease;
        }

        .accordion-header:hover {
          background: #f9fafb;
        }

        .accordion-header span:first-child {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          flex: 1;
        }

        .accordion-icon {
          font-size: 24px;
          font-weight: 300;
          color: #3b82f6;
          transition: transform 0.3s ease;
          min-width: 24px;
          text-align: center;
        }

        .accordion-icon.open {
          transform: rotate(45deg);
        }

        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
          background: #f9fafb;
        }

        .accordion-content.open {
          max-height: 500px;
          padding: 20px 24px;
        }

        .accordion-content p {
          margin: 0;
          color: #6b7280;
          line-height: 1.6;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 40px 5%;
          }

          .faq-title {
            font-size: 24px;
            margin-bottom: 30px;
          }

          .accordion-header {
            padding: 16px 20px;
          }

          .accordion-header span:first-child {
            font-size: 15px;
          }

          .accordion-content.open {
            padding: 16px 20px;
          }
        }
      `}</style>

      <section className="faq-section">
        <h2 className="faq-title">DÚVIDAS FREQUENTES</h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion">
              <div 
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.pergunta}</span>
                <span className={`accordion-icon ${openIndex === index ? 'open' : ''}`}>
                  +
                </span>
              </div>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}