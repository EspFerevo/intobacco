import React, { useEffect } from 'react';
import './AgeVerification.css';

const AgeVerification = ({ onVerify }) => {
  // Предотвращение прокрутки страницы когда модалка открыта
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Отклонение - перенаправляем на google
  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className="age-verification">
      <div className="age-verification__card">
        <div className="age-verification__logo">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 14.3431 15 16C15 17.6569 13.6569 19 12 19C10.3431 19 9 17.6569 9 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="age-verification__title">
          inTobacco
        </h1>

        <p className="age-verification__text">
          Ласкаво просимо на сайт inTobacco. Цей сайт містить інформацію про тютюнові вироби і призначений лише для відвідувачів старше 18 років.
        </p>

        <h2 className="age-verification__subtitle">
          Вам вже виповнилося 18 років?
        </h2>

        <div className="age-verification__buttons">
          <button
            className="age-verification__button age-verification__button--yes"
            onClick={onVerify}
          >
            Так, мені є 18 років
          </button>

          <button
            className="age-verification__button age-verification__button--no"
            onClick={handleReject}
          >
            Ні, мені немає 18 років
          </button>
        </div>

        <p className="age-verification__disclaimer">
          Натискаючи "Так", ви підтверджуєте, що вам виповнилося 18 років і ви погоджуєтесь з нашими правилами використання сайту.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
