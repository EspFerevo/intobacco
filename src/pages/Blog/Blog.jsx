import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Як правильно зберігати тютюн щоб зберегти аромат',
      excerpt: 'Детальний гід з правильного зберігання тютюну, щоб він залишався свіжим і ароматним протягом тривалого часу.',
      image: 'https://images.unsplash.com/photo-1574665348546-918a172098b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '15 березня 2023',
      author: 'Олександр Петренко',
      category: 'Поради'
    },
    {
      id: 2,
      title: 'Огляд кращих гріндерів 2023 року',
      excerpt: 'Порівняння найпопулярніших моделей гріндерів для тютюну з детальним описом переваг та недоліків кожного.',
      image: 'https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '5 квітня 2023',
      author: 'Іван Мельник',
      category: 'Огляди'
    },
    {
      id: 3,
      title: 'Історія тютюну: від давніх цивілізацій до сучасності',
      excerpt: 'Захоплива розповідь про історію тютюну, його поширення по світу та еволюцію культури куріння.',
      image: 'https://images.unsplash.com/photo-1574027056118-27f725ca2623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '20 травня 2023',
      author: 'Марія Ковальчук',
      category: 'Історія'
    },
    {
      id: 4,
      title: 'Як вибрати портсигар: матеріали, дизайн, функціональність',
      excerpt: 'Корисні поради щодо вибору портсигара, який найкраще відповідатиме вашим потребам та стилю.',
      image: 'https://images.unsplash.com/photo-1574027057312-62c288d31c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '10 червня 2023',
      author: 'Олександр Петренко',
      category: 'Поради'
    },
    {
      id: 5,
      title: 'Сорти тютюну Virginia: класифікація та особливості',
      excerpt: 'Детальний огляд сортів тютюну Virginia, їх характеристики, аромат, смак та особливості використання.',
      image: 'https://images.unsplash.com/photo-1574027057308-55f547f26ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '25 липня 2023',
      author: 'Іван Мельник',
      category: 'Огляди'
    },
    {
      id: 6,
      title: 'Техніка скручування ідеальної самокрутки: поради професіонала',
      excerpt: 'Покрокова інструкція з техніки скручування ідеальної самокрутки від експерта з багаторічним досвідом.',
      image: 'https://images.unsplash.com/photo-1575486235707-81a4e576322a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      date: '8 серпня 2023',
      author: 'Марія Ковальчук',
      category: 'Поради'
    }
  ];

  return (
    <div className="blog">
      {/* Header */}
      <section className="blog-header">
        <div className="container">
          <h1 className="blog-header__title">Блог</h1>
          <p className="blog-header__subtitle">Корисні статті та поради для поціновувачів тютюну</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="blog-posts">
        <div className="container">
          <div className="blog-posts__grid">
            {blogPosts.map((post) => (
              <article className="blog-post" key={post.id}>
                <div className="blog-post__image-wrapper">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-post__image"
                  />
                  <span className="blog-post__category">{post.category}</span>
                </div>
                <div className="blog-post__content">
                  <div className="blog-post__meta">
                    <span className="blog-post__date">{post.date}</span>
                    <span className="blog-post__author">Автор: {post.author}</span>
                  </div>
                  <h2 className="blog-post__title">{post.title}</h2>
                  <p className="blog-post__excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-post__link">
                    Читати далі <span className="blog-post__arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__content">
            <h2 className="newsletter__title">Підпишіться на нашу розсилку</h2>
            <p className="newsletter__text">
              Отримуйте найцікавіші статті та новини про світ тютюну
            </p>
            <form className="newsletter__form">
              <input
                type="email"
                className="newsletter__input"
                placeholder="Ваша електронна пошта"
                required
              />
              <button type="submit" className="btn btn--primary newsletter__button">
                Підписатися
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
