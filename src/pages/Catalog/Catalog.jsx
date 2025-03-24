import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Імітація отримання даних
  useEffect(() => {
    const fetchProducts = () => {
      // В реальному додатку це було б API-запитом
      const dummyProducts = [
        {
          id: 1,
          name: 'Virginia Gold',
          category: 'tobacco',
          price: '250 грн',
          description: 'Преміальний тютюн з відмінним ароматом і смаком',
          image: 'https://images.unsplash.com/photo-1574027057308-55f547f26ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          name: 'Portmann Classic',
          category: 'cases',
          price: '450 грн',
          description: 'Стильний шкіряний портсигар з металевими вставками',
          image: 'https://images.unsplash.com/photo-1574027057312-62c288d31c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          name: 'Premium Tubes 200pcs',
          category: 'tubes',
          price: '120 грн',
          description: 'Якісні гільзи з фільтром для самокруток',
          image: 'https://images.unsplash.com/photo-1574027057299-e5b5aea4222e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 4,
          name: 'Metallic Grinder',
          category: 'grinders',
          price: '350 грн',
          description: 'Металевий гріндер для подрібнення тютюну',
          image: 'https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 5,
          name: 'Slim Filters 120pcs',
          category: 'filters',
          price: '80 грн',
          description: 'Тонкі фільтри для самокруток',
          image: 'https://images.unsplash.com/photo-1482440308425-276ad0f28b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 6,
          name: 'Rolling Machine',
          category: 'machines',
          price: '220 грн',
          description: 'Машинка для скручування самокруток',
          image: 'https://images.unsplash.com/photo-1574027057394-347079740d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 7,
          name: 'Kentucky Dark',
          category: 'tobacco',
          price: '280 грн',
          description: 'Насичений темний тютюн з глибоким смаком',
          image: 'https://images.unsplash.com/photo-1574665348546-918a172098b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 8,
          name: 'Luxury Case',
          category: 'cases',
          price: '580 грн',
          description: 'Розкішний портсигар з натуральної шкіри',
          image: 'https://images.unsplash.com/photo-1574027057297-69c262ff525e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 9,
          name: 'Royal Tobacco',
          category: 'tobacco',
          price: '320 грн',
          description: 'Преміальний бленд з унікальним ароматом',
          image: 'https://images.unsplash.com/photo-1574026305337-65f949e540df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ];

      setProducts(dummyProducts);
    };

    fetchProducts();
  }, []);

  // Фільтрація товарів при зміні категорії
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    }
  }, [activeCategory, products]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__header">
          <h1 className="catalog__title">Каталог товарів</h1>
          <p className="catalog__subtitle">Оберіть категорію та знайдіть потрібний товар</p>
        </div>

        <div className="catalog__categories">
          <button
            className={`catalog__category-btn ${activeCategory === 'all' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            Всі товари
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'tobacco' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('tobacco')}
          >
            Тютюн
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'tubes' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('tubes')}
          >
            Гільзи
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'cases' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('cases')}
          >
            Портсигари
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'grinders' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('grinders')}
          >
            Гріндери
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'filters' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('filters')}
          >
            Фільтри
          </button>
          <button
            className={`catalog__category-btn ${activeCategory === 'machines' ? 'catalog__category-btn--active' : ''}`}
            onClick={() => handleCategoryChange('machines')}
          >
            Машинки
          </button>
        </div>

        <div className="catalog__products">
          {filteredProducts.length > 0 ? (
            <div className="catalog__grid">
              {filteredProducts.map(product => (
                <div className="product catalog__product" key={product.id}>
                  <div className="product__image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product__image"
                    />
                  </div>
                  <div className="product__content">
                    <h3 className="product__title">{product.name}</h3>
                    <p className="product__category">{getCategoryName(product.category)}</p>
                    <div className="product__price">{product.price}</div>
                    <div className="product__description">
                      {product.description}
                    </div>
                    <Link to={`/catalog/${product.id}`} className="btn btn--outline product__button">
                      Дізнатись більше
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="catalog__empty">
              <p>Товарів у цій категорії не знайдено</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Допоміжна функція для відображення назви категорії українською
function getCategoryName(category) {
  const categories = {
    'tobacco': 'Тютюн',
    'tubes': 'Гільзи',
    'cases': 'Портсигари',
    'grinders': 'Гріндери',
    'filters': 'Фільтри',
    'machines': 'Машинки для скручування'
  };

  return categories[category] || category;
}

export default Catalog;
