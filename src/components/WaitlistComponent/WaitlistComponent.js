import React, { useState } from 'react';
import './WaitlistComponent.css';

const WaitlistComponent = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    setMessage('');
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Obrigado por se juntar à lista de espera!');
        setMessageType('success');
        setEmail('');
        setIsValid(false);
      } else {
        setMessage('Algo deu errado. Por favor, tente novamente.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Erro ao enviar e-mail. Por favor, tente novamente.');
      setMessageType('error');
    }
  };

  return (
    <div className="waitlist-section">
      <div className="waitlist-main">
        <div className="waitlist-wrapper">
          <div className="waitlist-headers">
            <h1 className="waitlist-title">Lista de Espera</h1>
            <p>
              Entra na lista de espera para o lançamento em breve da platforma completa de Cabo Air Cargo. Seja o primeiro a ser notificado e aproveite os descontos limitados.
            </p>
          </div>
          
          <div className="waitlist-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Digite seu email"
              className="email-input"
            />
            
            <button
              onClick={handleSubmit}
              disabled={!isValid}
              className="submit-button"
            >
              Juntar
            </button>
          </div>
          
          {message && (
            <p className={`message ${messageType === 'success' ? 'success-message' : 'error-message'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistComponent;