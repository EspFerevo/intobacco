import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Faq.css';

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      category: 'general',
      question: 'Як вибрати тютюн для самокруток?',
      answer: 'При виборі тютюну для самокруток зверніть увагу на його вологість, аромат і міцність. Для початківців рекомендуємо обирати легкі та середні сорти Virginia або Burley. Перед покупкою переконайтеся у свіжості продукту - якісний тютюн має бути помірно вологим і не містити сторонніх домішок.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Як правильно зберігати тютюн?',
      answer: 'Тютюн слід зберігати у прохолодному темному місці, в герметичній упаковці або спеціальному контейнері. Оптимальна температура зберігання: 15-20°C при відносній вологості 65-70%. Уникайте впливу прямих сонячних променів, різких температурних коливань та зберігання поруч із сильно пахучими речовинами. При правильному зберіганні тютюн може залишатися свіжим протягом 1-2 років.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Які є види тютюну і в чому їх різниця?',
      answer: 'Основні види тютюну: Virginia (легкий, солодкуватий), Burley (нейтральний, без цукру), Oriental/Turkish (ароматний, пряний), Dark-Fired/Kentucky (копчений, міцний). Вони відрізняються за вирощуванням, обробкою, смаком, ароматом і вмістом нікотину. Більшість комерційних сумішей містять кілька видів тютюну для досягнення бажаного смаку і аромату.'
    },
    {
      id: 4,
      category: 'general',
      question: 'Яка різниця між фільтрованими і нефільтрованими гільзами?',
      answer: 'Фільтровані гільзи мають вбудований фільтр (зазвичай з ацетату целюлози), який зменшує кількість смол і шкідливих речовин, що потрапляють у легені, і робить дим менш дратівливим. Нефільтровані гільзи не мають такого фільтра, що забезпечує більш інтенсивний смак і аромат тютюну, але менший захист від шкідливих речовин. Вибір залежить від особистих уподобань курця.'
    },
    {
      id: 5,
      category: 'products',
      question: 'Як вибрати гріндер для тютюну?',
      answer: 'При виборі гріндера зверніть увагу на матеріал (металеві найміцніші, але дорожчі; пластикові економічні, але менш довговічні), розмір (залежить від обсягу тютюну, який ви зазвичай подрібнюєте), кількість відсіків та зубців, а також на зручність використання. Якісний гріндер повинен рівномірно подрібнювати тютюн без застрягань і бути легким у чищенні.'
    },
    {
      id: 6,
      category: 'products',
      question: 'Яку машинку для самокруток обрати новачку?',
      answer: 'Для початківців рекомендуємо ручні машинки з важільним механізмом 70-78 мм, які прості у використанні та доступні за ціною. Зверніть увагу на бренди OCB, Smoking або RAW - вони зарекомендували себе якісними моделями з довгим терміном служби. Важливо також, щоб машинка була з якісного пластику, мала невелику вагу та легко розбиралась для чищення.'
    },
    {
      id: 7,
      category: 'products',
      question: 'Який портсигар краще обрати?',
      answer: 'Вибір портсигара залежить від ваших потреб: для самокруток підійдуть моделі з м\'якою внутрішньою поверхнею, що запобігає пошкодженню; для сигар - із кедровою підкладкою, що підтримує вологість. Матеріал портсигара може бути різним: шкіра (елегантно, але менш захищає від вологи), метал (міцний, добре захищає), дерево (класика, але вимагає догляду). Зверніть увагу на герметичність, місткість і зручність застібки.'
    },
    {
      id: 8,
      category: 'products',
      question: 'Яку кількість тютюну можна придбати одночасно?',
      answer: 'Ви можете придбати будь-яку кількість тютюну, обмежень немає. Проте ми рекомендуємо не купувати занадто багато за один раз, якщо ви не маєте умов для довгострокового зберігання. Оптимальна кількість - той обсяг, який ви зможете використати протягом 3-4 місяців, щоб гарантувати свіжість продукту.'
    },
    {
      id: 9,
      category: 'delivery',
      question: 'Чи займаєтесь ви доставкою?',
      answer: 'Ні, наш сайт є лише інформаційною платформою про продукцію, яку ми представляємо у нашому фізичному магазині. Ми не здійснюємо доставку товарів. Ви можете ознайомитися з асортиментом онлайн, а потім відвідати наш магазин за адресою: м. Київ, вул. Тютюнова, 42. Години роботи: Пн-Пт: 10:00 - 20:00, Сб-Нд: 11:00 - 18:00.'
    },
    {
      id: 10,
      category: 'delivery',
      question: 'Чи можна замовити товар і забрати його самостійно?',
      answer: 'Так, ви можете зателефонувати нам за номером +38 (012) 345-67-89 і зарезервувати товар, який вас цікавить. Ми підготуємо його до вашого приходу. Будь ласка, вкажіть приблизний час, коли ви плануєте забрати замовлення. Резерв діє протягом 24 годин.'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredItems = activeCategory === 'all'
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="faq">
      {/* Header */}
      <section className="faq-header">
        <div className="container">
          <h1 className="faq-header__title">Часті запитання</h1>
          <p className="faq-header__subtitle">Знайдіть відповіді на найпоширеніші запитання</p>
        </div>
      </section>

      {/* Categories */}
      <section className="faq-categories">
        <div className="container">
          <div className="faq-categories__buttons">
            <button
              className={`faq-categories__button ${activeCategory === 'all' ? 'faq-categories__button--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Всі запитання
            </button>
            <button
              className={`faq-categories__button ${activeCategory === 'general' ? 'faq-categories__button--active' : ''}`}
              onClick={() => setActiveCategory('general')}
            >
              Загальні
            </button>
            <button
              className={`faq-categories__button ${activeCategory === 'products' ? 'faq-categories__button--active' : ''}`}
              onClick={() => setActiveCategory('products')}
            >
              Продукція
            </button>
            <button
              className={`faq-categories__button ${activeCategory === 'delivery' ? 'faq-categories__button--active' : ''}`}
              onClick={() => setActiveCategory('delivery')}
            >
              Доставка
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="faq-items">
        <div className="container">
          <div className="faq-items__list">
            {filteredItems.map((item) => (
              <div
                className={`faq-item ${activeItem === item.id ? 'faq-item--active' : ''}`}
                key={item.id}
              >
                <div
                  className="faq-item__header"
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className="faq-item__question">{item.question}</h3>
                  <div className="faq-item__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={activeItem === item.id ? 'faq-item__icon-line faq-item__icon-line--hidden' : 'faq-item__icon-line'} />
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className={`faq-item__content ${activeItem === item.id ? 'faq-item__content--visible' : ''}`}>
                  <p className="faq-item__answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="faq-cta__content">
            <h2 className="faq-cta__title">Не знайшли відповідь на своє запитання?</h2>
            <p className="faq-cta__text">
              Зв'яжіться з нами, і ми з радістю допоможемо вам з будь-яким питанням
            </p>
            <Link to="/contacts" className="btn btn--primary faq-cta__button">
              Зв'язатися з нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
