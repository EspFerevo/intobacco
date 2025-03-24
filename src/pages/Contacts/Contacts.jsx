import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contacts.css';

// EmailJS configuration
// These are placeholder values - the site owner should replace these with actual values
const SERVICE_ID = 'service_xxxxxxx';
const TEMPLATE_ID = 'template_xxxxxxx';
const USER_ID = 'user_xxxxxxxxxxxxxx';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(USER_ID);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Помилка при відправці. Будь ласка, спробуйте пізніше.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contacts">
      {/* Header */}
      <section className="contacts-header">
        <div className="container">
          <h1 className="contacts-header__title">Контакти</h1>
          <p className="contacts-header__subtitle">Зв'яжіться з нами будь-яким зручним способом</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-info__grid">
            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card__title">Адреса</h3>
              <p className="contact-card__text">м. Житомир, Сінний ринок</p>
              <p className="contact-card__subtext">Головний офіс та магазин</p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.9209V19.9209C22.0011 20.1893 21.9441 20.4545 21.8329 20.7001C21.7216 20.9456 21.5583 21.1662 21.3536 21.348C21.1488 21.5299 20.9073 21.669 20.6462 21.7554C20.385 21.8418 20.1097 21.8734 19.84 21.8481C16.7429 21.5209 13.7872 20.4937 11.19 18.8481C8.77383 17.3509 6.72524 15.3023 5.22799 12.8862C3.5741 10.2815 2.54632 7.31515 2.22799 4.2081C2.20315 3.9388 2.23464 3.66404 2.32051 3.40323C2.40638 3.14241 2.5447 2.90093 2.72578 2.69591C2.90686 2.49089 3.12669 2.32723 3.37168 2.21533C3.61667 2.10344 3.88137 2.04593 4.14999 2.0462H7.14999C7.61651 2.04187 8.07015 2.20632 8.42207 2.5081C8.77399 2.80988 8.9987 3.22549 9.05999 3.6881C9.17384 4.62688 9.39065 5.55151 9.70799 6.4381C9.83168 6.76492 9.85353 7.12237 9.77062 7.46096C9.68771 7.79954 9.5042 8.10454 9.24799 8.3381L8.00799 9.5781C9.40568 12.0761 11.4239 14.0944 13.922 15.4922L15.162 14.2522C15.3955 13.996 15.7005 13.8125 16.0391 13.7296C16.3777 13.6467 16.7351 13.6685 17.062 13.7922C17.9486 14.1095 18.8732 14.3264 19.812 14.4402C20.2774 14.5016 20.6953 14.7292 20.9972 15.0849C21.2991 15.4406 21.4608 15.8987 21.454 16.3702L22 16.9209Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card__title">Телефон</h3>
              <p className="contact-card__text">+38 (012) 345-67-89</p>
              <p className="contact-card__subtext">Пн-Пт: 10:00 - 20:00, Сб-Нд: 11:00 - 18:00</p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card__title">Email</h3>
              <p className="contact-card__text">info@intobacco.com</p>
              <p className="contact-card__subtext">Ми відповідаємо протягом 24 годин</p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon-wrapper">
                <svg className="contact-card__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H19C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8H5C3.93913 8 2.92172 8.42143 2.17157 9.17157C1.42143 9.92172 1 10.9391 1 12C1 13.0609 1.42143 14.0783 2.17157 14.8284C2.92172 15.5786 3.93913 16 5 16H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="contact-card__title">Соціальні мережі</h3>
              <div className="contact-card__social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-card__social-link" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://t.me/intobacco" target="_blank" rel="noopener noreferrer" className="contact-card__social-link" aria-label="Telegram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.332-.373-.119l-6.868 4.326-2.96-.924c-.64-.204-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.938z"/>
                  </svg>
                </a>
                <a href="viber://chat?number=%2B380123456789" className="contact-card__social-link" aria-label="Viber">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.172 18.849c-3.944-.033-6.004-2.129-6.004-6.265 0-4.714 2.413-6.693 6.189-6.693 3.56 0 5.891 2.091 5.888 6.345-.003 4.007-2.056 6.607-6.073 6.613zm5.003-8.37c-.097-2.023-1.275-3.653-3.212-4.118v-.004c-.534-.138-1.161-.209-1.977-.209h-.001c-1.292.017-2.532.313-3.383 1.097-.901.832-1.192 1.832-1.216 3.182-.013.898-.013 1.794.01 2.679.125 2.694 1.901 3.985 4.21 4.126.604.037 1.202.004 1.801.004h.024c2.777-.08 4.421-1.919 4.516-4.631.007-.159.026-.319.038-.478v-.004c.043-1.204.017-1.445-.014-1.646l.004.002zm-3.258 3.097c-.327.483-.652.966-.674 1.75-.011.372-.038.577-.22.678-.209.142-.693.074-1.041-.008-1.707-.407-3.188-1.156-4.216-2.691-.508-.758-.847-1.656-1.123-2.591-.103-.351-.165-.705-.203-1.234-.297-.2.068-.643.366-.75.188-.035 1.013-.132 1.25-.1.217.029.379.108.505.282.172.236.285.482.378.738.172.48.368.962.62 1.403.145.255.335.371.607.307.197-.047.276-.219.29-.416.020-.267.033-.535.033-.803-.002-.562-.028-.643-.356-.884-.195-.145-.099-.462.196-.577.29-.112.591-.21.892-.323.209-.08.441-.057.598.067.339.266.676.542.964.862.278.307.346.732.074 1.096l-.04.057zm-4.319-2.699c-.013-.397.017-.687.376-.761.503-.104.925.123 1.176.513.134.21.193.461.161.905-.014.199-.138.32-.333.321-.218.000-.32-.125-.338-.363-.016-.207-.073-.408-.229-.531-.156-.123-.349-.12-.502.009-.259.219-.222.532-.281.783-.018.074-.028.15-.045.241zm1.187-1.135c-.101-.151-.204-.286-.29-.433-.351-.594-.913-.801-1.4-.776-.243.013-.361-.102-.387-.33-.021-.189.099-.337.307-.36.877-.095 1.849.459 2.217 1.269.103.226.132.455.162.68.018.143-.084.271-.242.318-.161.050-.283-.023-.351-.165-.058-.119-.088-.25-.106-.379-.004-.032-.002-.065-.002-.098-.003.001-.006.001-.009.001l.1.273zm1.071.144c-.315-.636-.833-1.168-1.55-1.376-.28-.082-.57-.115-.862-.139-.127-.01-.26-.021-.384-.062-.089-.03-.164-.111-.155-.24.009-.126.084-.215.203-.226.415-.039.818.006 1.215.123.628.185 1.122.544 1.501 1.063.202.277.343.59.427.937.038.158-.039.29-.187.339-.132.043-.268-.025-.31-.159-.028-.09-.042-.183-.058-.275.10.005-.033.019-.003.015h.163zm-3.871 4.015c.007.042-.018.088-.055.129-.118.131-.597.566-.843.622-.037.004-.073.009-.11.009-.194 0-.386-.067-.528-.263-.105-.146-.193-.304-.283-.461-.092-.159-.178-.322-.271-.481-.254-.433-.254-.433-.517-.007-.021.033-.043.066-.065.099-.126.193-.262.379-.379.577-.075.127-.167.213-.315.271-.194.076-.425.025-.544-.138-.012-.016-.023-.033-.038-.055-.022-.031-.238-.358-.249-.378-.128-.226-.134-.465-.002-.693.076-.132.188-.234.281-.35l.359-.443c.046-.057.091-.115.13-.178.125-.205.123-.445-.022-.63-.1-.128-.217-.243-.337-.352-.238-.219-.476-.437-.712-.658-.039-.036-.073-.078-.105-.12-.13-.171-.13-.37.001-.54.130-.17.354-.231.534-.148.087.04.171.088.252.145.132.092.259.192.387.29.053.041.105.082.161.121.27.185.554.185.823-.003.207-.144.406-.299.607-.45.1-.075.19-.147.365-.152.233-.007.412.103.513.305.067.135.044.266-.036.39-.008.012-.016.023-.025.034-.148.196-.303.387-.447.585-.071.098-.127.207-.179.318-.074.158-.062.318.035.467.115.176.245.341.373.507.15.196.307.388.453.587.055.076.09.17.107.265.033.192-.013.368-.1.53l.5.004zm-3.92-10.183c3.219 0 5.767 2.054 5.767 5.767 0 .219-.364.321-.458.096-.508-1.205-2.234-3.615-5.284-3.615h-.022c-3.048 0-4.775 2.41-5.283 3.615-.094.225-.459.123-.459-.096 0-3.713 2.549-5.767 5.768-5.767h-.029z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-section__grid">
            <div className="contact-form-section__form-wrapper">
              <h2 className="contact-form-section__title">Напишіть нам</h2>
              <p className="contact-form-section__subtitle">Заповніть форму і ми зв'яжемося з вами найближчим часом</p>

              {submitted ? (
                <div className="contact-form__success">
                  <svg className="contact-form__success-icon" width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Повідомлення надіслано!</h3>
                  <p>Дякуємо за звернення. Ми зв'яжемося з вами найближчим часом.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="name">Ваше ім'я</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact-form__input"
                      placeholder="Введіть ваше ім'я"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="email">Електронна пошта</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact-form__input"
                      placeholder="Введіть вашу електронну пошту"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="phone">Телефон</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="contact-form__input"
                      placeholder="Введіть ваш номер телефону"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-form__group">
                    <label className="contact-form__label" htmlFor="message">Повідомлення</label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact-form__textarea"
                      placeholder="Введіть ваше повідомлення"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {error && (
                    <div className="contact-form__error">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn--primary contact-form__button ${loading ? 'contact-form__button--loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Відправка...' : 'Надіслати'}
                  </button>
                </form>
              )}
            </div>

            <div className="contact-form-section__map-wrapper">
              <h2 className="contact-form-section__title">Як нас знайти</h2>
              <div className="contact-form-section__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.0244030458895!2d28.65966701571887!3d50.25408827944957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c64a8b53eb3bf%3A0xf9877d2df4436e3a!2z0JbQuNGC0L7QvNC40YDRgdC60LjQuSDRgdC10L3QvdC-0Lkg0YDRi9C90L7Qug!5e0!3m2!1suk!2sua!4v1659435523157!5m2!1suk!2sua"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
