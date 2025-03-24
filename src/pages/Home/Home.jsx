import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const categoriesRef = useRef(null);
  const popularRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

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
      heroRef.current,
      featuresRef.current,
      categoriesRef.current,
      popularRef.current,
      testimonialsRef.current,
      ctaRef.current,
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

  // Варианты для анимации листа табака с Framer Motion
  const leafVariants = {
    initial: {
      rotate: -5,
      y: 0,
      scale: 1,
    },
    animate: {
      rotate: 5,
      y: [0, -20, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const smokeVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0, 0.2, 0],
      y: -100,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero__overlay"></div>
        <div className="container hero__container">
          <div className="hero__content">
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Відкрийте світ якісного тютюну
            </motion.h1>
            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Стильна платформа для поціновувачів тютюну, яка допоможе вам зробити
              правильний вибір
            </motion.p>
            <motion.div
              className="hero__buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/catalog" className="btn btn--primary hero__button">
                Переглянути каталог
              </Link>
              <Link to="/about" className="btn btn--outline hero__button">
                Дізнатись більше
              </Link>
            </motion.div>
          </div>

          {/* Animated tobacco leaf */}
        </div>
      </section>

      {/* Features Section */}
      <section className="section features" ref={featuresRef}>
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Чому обирають нас
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Переваги нашої платформи
          </motion.p>

          <div className="features__grid">
            <motion.div
              className="feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="feature__icon-wrapper">
                <svg className="feature__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature__title">Якісна продукція</h3>
              <p className="feature__description">
                Ми презентуємо лише перевірену продукцію від надійних виробників
              </p>
            </motion.div>

            <motion.div
              className="feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature__icon-wrapper">
                <svg className="feature__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature__title">Зручний вибір</h3>
              <p className="feature__description">
                Детальна інформація та зручна категоризація допоможуть вам зробити вибір
              </p>
            </motion.div>

            <motion.div
              className="feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="feature__icon-wrapper">
                <svg className="feature__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature__title">Корисні поради</h3>
              <p className="feature__description">
                У нашому блозі ви знайдете корисні статті про правильне зберігання та використання
              </p>
            </motion.div>

            <motion.div
              className="feature"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="feature__icon-wrapper">
                <svg className="feature__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H17C18.0609 15 19.0783 15.4214 19.8284 16.1716C20.5786 16.9217 21 17.9391 21 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="feature__title">Експертна підтримка</h3>
              <p className="feature__description">
                Наші експерти допоможуть вам з вибором та нададуть відповіді на всі запитання
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories" ref={categoriesRef}>
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Наші категорії
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Широкий вибір продукції для справжніх поціновувачів
          </motion.p>

          <div className="categories__grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link to="/catalog?category=tobacco" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1590422749897-47036c472e75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Тютюн"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Тютюн</h3>
                  <p className="category__description">Різноманітні сорти якісного тютюну</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/catalog?category=tubes" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1529896412993-76be7c64af32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Гільзи для самокруток"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Гільзи для самокруток</h3>
                  <p className="category__description">Якісні гільзи різних розмірів</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/catalog?category=cases" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1574027056118-27f725ca2623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Портсигари"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Портсигари</h3>
                  <p className="category__description">Стильні та надійні портсигари</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/catalog?category=grinders" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Гріндери"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Гріндери</h3>
                  <p className="category__description">Механічні подрібнювачі для тютюну</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/catalog?category=filters" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Фільтри"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Фільтри</h3>
                  <p className="category__description">Різноманітні фільтри для самокруток</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/catalog?category=machines" className="category">
                <div className="category__image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1574027057394-347079740d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Машинки для скручування"
                    className="category__image"
                  />
                </div>
                <div className="category__content">
                  <h3 className="category__title">Машинки для скручування</h3>
                  <p className="category__description">Зручні машинки для самокруток</p>
                  <span className="category__link">Переглянути <span className="category__arrow">→</span></span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="section popular" ref={popularRef}>
        <div className="container">
          <motion.h2
            className="section__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Популярні товари
          </motion.h2>
          <motion.p
            className="section__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Обрані нашими клієнтами
          </motion.p>

          <div className="popular__slider">
            <motion.div
              className="product"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="product__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1574027057308-55f547f26ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Тютюн Virginia"
                  className="product__image"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">Тютюн Virginia Gold</h3>
                <p className="product__category">Тютюн</p>
                <div className="product__description">
                  Преміальний тютюн з відмінним ароматом і смаком
                </div>
                <Link to="/catalog?product=virginia-gold" className="btn btn--outline product__button">
                  Дізнатись більше
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="product"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="product__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1574027057312-62c288d31c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Портсигар Classic"
                  className="product__image"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">Портсигар Classic</h3>
                <p className="product__category">Портсигари</p>
                <div className="product__description">
                  Стильний шкіряний портсигар з металевими вставками
                </div>
                <Link to="/catalog?product=case-classic" className="btn btn--outline product__button">
                  Дізнатись більше
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="product"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="product__image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1574027057299-e5b5aea4222e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Гільзи Premium"
                  className="product__image"
                />
              </div>
              <div className="product__content">
                <h3 className="product__title">Гільзи Premium 200 шт</h3>
                <p className="product__category">Гільзи для самокруток</p>
                <div className="product__description">
                  Якісні гільзи з фільтром для самокруток
                </div>
                <Link to="/catalog?product=tubes-premium" className="btn btn--outline product__button">
                  Дізнатись більше
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="popular__more"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/catalog" className="btn btn--primary">Переглянути всі товари</Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta" ref={ctaRef}>
        <div className="container">
          <motion.div
            className="cta__content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta__title">Хочете дізнатись більше?</h2>
            <p className="cta__text">
              Відвідайте наш блог, де ви знайдете корисні статті про тютюн та правильне використання аксесуарів
            </p>
            <div className="cta__buttons">
              <Link to="/blog" className="btn btn--primary cta__button">
                Перейти до блогу
              </Link>
              <Link to="/contacts" className="btn btn--outline cta__button">
                Зв'язатись з нами
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
