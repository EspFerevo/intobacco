import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const storeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [
      storyRef.current,
      valuesRef.current,
      teamRef.current,
      storeRef.current,
    ];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1 className="about-header__title">Про нас</h1>
          <p className="about-header__subtitle">Дізнайтеся більше про inTobacco</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story" ref={storyRef}>
        <div className="container">
          <div className="story__content">
            <div className="story__text">
              <h2 className="section__title">Наша історія</h2>
              <p className="story__paragraph">
                Ми заснували inTobacco у 2018 році з однією метою — створити місце,
                де справжні поціновувачі якісного тютюну зможуть знайти найкращу продукцію
                та отримати професійну консультацію.
              </p>
              <p className="story__paragraph">
                За роки роботи ми розвинули нашу платформу від невеликого магазину до
                повноцінної інформаційної системи, де кожен може не лише ознайомитися з
                товарами, але й дізнатися багато корисної інформації про культуру
                споживання тютюну.
              </p>
              <p className="story__paragraph">
                Сьогодні inTobacco — це не просто магазин, а спільнота людей, які цінують
                якість та розбираються в тонкощах тютюнової справи.
              </p>
            </div>
            <div className="story__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1574026438399-890d7b875609?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Наша історія"
                className="story__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values" ref={valuesRef}>
        <div className="container">
          <h2 className="section__title">Наші цінності</h2>
          <p className="section__subtitle">Що для нас найважливіше</p>

          <div className="values__grid">
            <div className="value">
              <div className="value__icon-wrapper">
                <svg className="value__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value__title">Якість</h3>
              <p className="value__description">
                Ми співпрацюємо лише з перевіреними постачальниками, щоб гарантувати
                найвищу якість кожного товару в нашому асортименті.
              </p>
            </div>

            <div className="value">
              <div className="value__icon-wrapper">
                <svg className="value__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value__title">Інформативність</h3>
              <p className="value__description">
                Ми віримо, що важливо не лише надавати товари, але й ділитися знаннями,
                щоб допомогти клієнтам зробити правильний вибір.
              </p>
            </div>

            <div className="value">
              <div className="value__icon-wrapper">
                <svg className="value__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value__title">Професіоналізм</h3>
              <p className="value__description">
                Наша команда складається з експертів, які знають усе про тютюн
                та аксесуари і завжди готові поділитися своїми знаннями.
              </p>
            </div>

            <div className="value">
              <div className="value__icon-wrapper">
                <svg className="value__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value__title">Задоволеність клієнтів</h3>
              <p className="value__description">
                Ми прагнемо, щоб кожен відвідувач нашого магазину отримав не лише
                якісний товар, але й позитивні емоції від спілкування з нами.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="team" ref={teamRef}>
        <div className="container">
          <h2 className="section__title">Наша команда</h2>
          <p className="section__subtitle">Професіонали, які знають усе про тютюн</p>

          <div className="team__grid">
            <div className="team-member">
              <div className="team-member__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Олександр Петренко"
                  className="team-member__image"
                />
              </div>
              <div className="team-member__content">
                <h3 className="team-member__name">Олександр Петренко</h3>
                <p className="team-member__position">Засновник і головний експерт</p>
                <p className="team-member__description">
                  Олександр заснував inTobacco у 2018 році. Має більше 10 років досвіду
                  в тютюновій індустрії та глибокі знання про різні сорти тютюну.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Марія Ковальчук"
                  className="team-member__image"
                />
              </div>
              <div className="team-member__content">
                <h3 className="team-member__name">Марія Ковальчук</h3>
                <p className="team-member__position">Контент-менеджер</p>
                <p className="team-member__description">
                  Марія відповідає за інформаційне наповнення нашого сайту та блогу.
                  Вона знаходить і створює корисний контент про тютюн та аксесуари.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Іван Мельник"
                  className="team-member__image"
                />
              </div>
              <div className="team-member__content">
                <h3 className="team-member__name">Іван Мельник</h3>
                <p className="team-member__position">Продакт-менеджер</p>
                <p className="team-member__description">
                  Іван відповідає за асортимент продукції. Він працює з постачальниками,
                  щоб гарантувати найвищу якість кожного товару.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Store */}
      <section className="store" ref={storeRef}>
        <div className="container">
          <div className="store__content">
            <div className="store__text">
              <h2 className="section__title">Наш магазин</h2>
              <p className="store__paragraph">
                Наш фізичний магазин розташований у центрі Києва, де ви можете
                особисто оцінити якість нашої продукції та отримати консультацію
                від наших експертів.
              </p>
              <p className="store__paragraph">
                У нас створена атмосфера, де кожен поціновувач тютюну почуватиметься
                комфортно. Ми запрошуємо вас відвідати наш магазин і переконатися в якості
                нашої продукції та сервісу.
              </p>
              <div className="store__info">
                <div className="store__info-item">
                  <svg className="store__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>м. Київ, вул. Тютюнова, 42</p>
                </div>
                <div className="store__info-item">
                  <svg className="store__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.9209V19.9209C22.0011 20.1893 21.9441 20.4545 21.8329 20.7001C21.7216 20.9456 21.5583 21.1662 21.3536 21.348C21.1488 21.5299 20.9073 21.669 20.6462 21.7554C20.385 21.8418 20.1097 21.8734 19.84 21.8481C16.7429 21.5209 13.7872 20.4937 11.19 18.8481C8.77383 17.3509 6.72524 15.3023 5.22799 12.8862C3.5741 10.2815 2.54632 7.31515 2.22799 4.2081C2.20315 3.9388 2.23464 3.66404 2.32051 3.40323C2.40638 3.14241 2.5447 2.90093 2.72578 2.69591C2.90686 2.49089 3.12669 2.32723 3.37168 2.21533C3.61667 2.10344 3.88137 2.04593 4.14999 2.0462H7.14999C7.61651 2.04187 8.07015 2.20632 8.42207 2.5081C8.77399 2.80988 8.9987 3.22549 9.05999 3.6881C9.17384 4.62688 9.39065 5.55151 9.70799 6.4381C9.83168 6.76492 9.85353 7.12237 9.77062 7.46096C9.68771 7.79954 9.5042 8.10454 9.24799 8.3381L8.00799 9.5781C9.40568 12.0761 11.4239 14.0944 13.922 15.4922L15.162 14.2522C15.3955 13.996 15.7005 13.8125 16.0391 13.7296C16.3777 13.6467 16.7351 13.6685 17.062 13.7922C17.9486 14.1095 18.8732 14.3264 19.812 14.4402C20.2774 14.5016 20.6953 14.7292 20.9972 15.0849C21.2991 15.4406 21.4608 15.8987 21.454 16.3702L22 16.9209Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>+38 (012) 345-67-89</p>
                </div>
                <div className="store__info-item">
                  <svg className="store__info-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Пн-Пт: 10:00 - 20:00, Сб-Нд: 11:00 - 18:00</p>
                </div>
              </div>
              <Link to="/contacts" className="btn btn--primary store__button">
                Контакти та карта
              </Link>
            </div>
            <div className="store__image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Наш магазин"
                className="store__image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
