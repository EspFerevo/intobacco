import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import FloatingSocials from '../FloatingSocials/FloatingSocials';
import './Layout.css';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Обработка прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие мобильного меню при изменении маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Блокирование скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout">
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__container">
          <Link to="/" className="header__logo">
            <svg className="header__logo-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 5C10.5 10 10 12 10 12C10 16 11 17.5 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 8C12 10 13 10.5 15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 10.5C12 12.5 13 13 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M10 13C12 15 13 15.5 15 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M12 5C13.5 10 14 12 14 12C14 16 13 17.5 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            inTobacco
          </Link>

          <nav className="header__nav">
            <ul className={`header__menu ${isMobileMenuOpen ? 'header__menu--mobile' : ''}`}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                  end
                >
                  Головна
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                >
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                >
                  Про нас
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                >
                  Блог
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => isActive ? 'header__menu-item header__menu-item--active' : 'header__menu-item'}
                >
                  Контакти
                </NavLink>
              </li>
            </ul>

            <button
              className={`header__burger ${isMobileMenuOpen ? 'header__burger--active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Відкрити меню"
            >
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
              <span className="header__burger-line"></span>
            </button>
          </nav>
        </div>
      </header>

      <div className={`header__overlay ${isMobileMenuOpen ? 'header__overlay--visible' : ''}`}></div>

      {/* Floating Social Media Icons */}
      <FloatingSocials />

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                <svg className="footer__logo-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 5C10.5 10 10 12 10 12C10 16 11 17.5 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 8C12 10 13 10.5 15 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 10.5C12 12.5 13 13 15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 13C12 15 13 15.5 15 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 5C13.5 10 14 12 14 12C14 16 13 17.5 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                inTobacco
              </div>
              <p className="footer__description">
                Ми пропонуємо найкращий вибір тютюнових виробів та аксесуарів для справжніх цінителів. Наша мета - задовольнити потреби навіть найвибагливіших клієнтів.
              </p>
              <div className="footer__social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="https://t.me/intobacco" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Telegram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.332-.373-.119l-6.868 4.326-2.96-.924c-.64-.204-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.938z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="footer__title">Навігація</h3>
              <ul className="footer__menu">
                <li><Link to="/" className="footer__menu-item">Головна</Link></li>
                <li><Link to="/catalog" className="footer__menu-item">Каталог</Link></li>
                <li><Link to="/about" className="footer__menu-item">Про нас</Link></li>
                <li><Link to="/blog" className="footer__menu-item">Блог</Link></li>
                <li><Link to="/faq" className="footer__menu-item">FAQ</Link></li>
                <li><Link to="/contacts" className="footer__menu-item">Контакти</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Категорії</h3>
              <ul className="footer__menu">
                <li><Link to="/catalog?category=tobacco" className="footer__menu-item">Тютюн</Link></li>
                <li><Link to="/catalog?category=tubes" className="footer__menu-item">Гільзи для самокруток</Link></li>
                <li><Link to="/catalog?category=cases" className="footer__menu-item">Портсигари</Link></li>
                <li><Link to="/catalog?category=grinders" className="footer__menu-item">Гріндери</Link></li>
                <li><Link to="/catalog?category=filters" className="footer__menu-item">Фільтри</Link></li>
                <li><Link to="/catalog?category=machines" className="footer__menu-item">Машинки для скручування</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Контакти</h3>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>м. Житомир, Сінний ринок</span>
                </div>
                <div className="footer__contact-item">
                  <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.9209V19.9209C22.0011 20.1893 21.9441 20.4545 21.8329 20.7001C21.7216 20.9456 21.5583 21.1662 21.3536 21.348C21.1488 21.5299 20.9073 21.669 20.6462 21.7554C20.385 21.8418 20.1097 21.8734 19.84 21.8481C16.7429 21.5209 13.7872 20.4937 11.19 18.8481C8.77383 17.3509 6.72524 15.3023 5.22799 12.8862C3.5741 10.2815 2.54632 7.31515 2.22799 4.2081C2.20315 3.9388 2.23464 3.66404 2.32051 3.40323C2.40638 3.14241 2.5447 2.90093 2.72578 2.69591C2.90686 2.49089 3.12669 2.32723 3.37168 2.21533C3.61667 2.10344 3.88137 2.04593 4.14999 2.0462H7.14999C7.61651 2.04187 8.07015 2.20632 8.42207 2.5081C8.77399 2.80988 8.9987 3.22549 9.05999 3.6881C9.17384 4.62688 9.39065 5.55151 9.70799 6.4381C9.83168 6.76492 9.85353 7.12237 9.77062 7.46096C9.68771 7.79954 9.5042 8.10454 9.24799 8.3381L8.00799 9.5781C9.40568 12.0761 11.4239 14.0944 13.922 15.4922L15.162 14.2522C15.3955 13.996 15.7005 13.8125 16.0391 13.7296C16.3777 13.6467 16.7351 13.6685 17.062 13.7922C17.9486 14.1095 18.8732 14.3264 19.812 14.4402C20.2774 14.5016 20.6953 14.7292 20.9972 15.0849C21.2991 15.4406 21.4608 15.8987 21.454 16.3702L22 16.9209Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+38 (012) 345-67-89</span>
                </div>
                <div className="footer__contact-item">
                  <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>info@intobacco.com</span>
                </div>
                <div className="footer__contact-item">
                  <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Пн-Пт: 10:00 - 20:00, Сб-Нд: 11:00 - 18:00</span>
                </div>
              </div>

              <div className="footer__newsletter">
                <h3 className="footer__title">Підписка на новини</h3>
                <form className="footer__newsletter-form">
                  <input
                    type="email"
                    className="footer__newsletter-input"
                    placeholder="Ваш email"
                    aria-label="Email для підписки"
                  />
                  <button type="submit" className="footer__newsletter-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copyright">
              © {new Date().getFullYear()} inTobacco. Всі права захищені
            </p>
            <div className="footer__links">
              <Link to="/privacy" className="footer__link">Політика конфіденційності</Link>
              <Link to="/terms" className="footer__link">Умови використання</Link>
              <Link to="/delivery" className="footer__link">Доставка та оплата</Link>
            </div>
            <div className="footer__developer">
              <span className="footer__developer-text">Розроблено</span>
              <span className="footer__developer-logo">EspFerevo</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
