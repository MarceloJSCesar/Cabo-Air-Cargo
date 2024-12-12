import React, { useState } from 'react';
import './WaitlistComponent.css';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const WaitlistComponent = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value.toLowerCase().trim();
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    setMessage('');
  };

  const handleSubmit = async () => {
    if (!isValid || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const emailsRef = collection(db, "emails");
      const q = query(emailsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(emailsRef, {
          email: email,
          timestamp: new Date(),
          source: 'website_waitlist'
        });

        setMessage('Obrigado pelo seu interesse! Em breve receberá novidades exclusivas.');
        setMessageType('success');
        setEmail('');
        setIsValid(false);
      } else {
        setMessage('Este email já está registrado na nossa lista de espera.');
        setMessageType('warning');
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage('Não foi possível registrar seu email. Por favor, tente novamente.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
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
              disabled={isSubmitting}
            />
            
            <button
              onClick={handleSubmit}
              disabled={!isValid || isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Enviando...' : 'Juntar'}
            </button>
          </div>
          
          {message && (
            <div className={`message-container ${messageType}-message`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistComponent;