import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './scss/header.scss';
import './scss/mixins.scss';
import './scss/common.scss';
import './scss/video-section.scss'
import './scss/aside.scss'
import './scss/footer.scss'

export default function VideoPage() {

  const [showMore, setShowMore] = useState(false);

  const fullText = `A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. `;

  const shortText = `A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. `;

  const [isAutoplay, setIsAutoplay] = useState(true);

  const toggle = () => {
    setIsAutoplay(!isAutoplay);
  };

  const videos = [
  {
    title: 'Baby Monitor Technology',
    views: '123k views',
    author: 'Dollie Blair',
    img: '/src/images/1.png',
  },
  {
    title: 'A Good Autoresponder',
    views: '123k views',
    author: 'Dollie Blair',
    img: '/src/images/2.png',
  },
  {
    title: 'Selecting The Right Hotel',
    views: '123k views',
    author: 'Dollie Blair',
    img: '/src/images/3.png',
  },
  {
    title: 'Selecting The Right Hotel',
    views: '123k views',
    author: 'Dollie Blair',
    img: '/src/images/4.png',
  },
];

  return (
  <body>
    <header>
      <div class="header-container">
        <div class="logo-container">
          <button>
            <img src="/src/assets/CombinedShape.svg" alt="Menu Icon" />
          </button>
          <a href="/">
            <img src="/src/assets/Black.svg" alt="YouTube Logo" />
          </a>
        </div>
        <div class="search-container">
          <input type="text" name="search" placeholder="Search" />
          <button>
            <img src="/src/assets/Search.svg" alt="Search Icon" />
          </button>
        </div>
        <div class="user-actions">
          <button>
            <img src="/src/assets/Camera.svg" alt="Create Video" />
          </button>
          <button>
            <img src="/src/assets/Options.svg" alt="Options Icon" />
          </button>
          <button>
            <img src="/src/assets/Notifications.svg" alt="Notifications Icon" />
            <span class="notification-badge">3</span>
          </button>
          <button>
            <img src="/src/assets/Userpic.png" alt="User Icon" />
          </button>
        </div>
        <button class="more-actions">
          <img src="/src/assets/Vertical-more.svg" alt="More Icon" />
        </button> 
      </div>
    </header>
    <div class="layout">
      <main className="main">
        <section className="video-section">
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/ukTm71Id0uE?si=GhBlP-JhJNo5nUKc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="video-header">
              <div className="video-text">
                <div className="video-title-wrapper">
                  <h1>Dude You Re Getting A Telescope</h1>
                  <p>123k views</p>
                </div>
                <img src="/src/assets/ArrowDownBold.svg" alt="Arrow down" className="arrow-down" />
              </div>
              <div className="video-actions">
                <div className="action-btn">
                  <button className="action-btn-container">
                    <img src="/src/assets/Like.svg" alt="Like icon" />
                    <p>123k</p>
                  </button>
                  <button className="action-btn-container">
                    <img src="/src/assets/Dislike.svg" alt="Dislike icon" />
                    <p>435k</p>
                  </button>
                  <button className="action-btn-container">
                    <img src="/src/assets/Share.svg" alt="Share Icon" />
                    <p>Share</p>
                  </button>
                </div>
                <button className="button-more-container">
                  <img src="/src/assets/More.svg" alt="More Icon" className="more-button" />
                </button>
              </div>
            </div>
          </div>
          <div className="channel-info">
            <div className="channel-header">
              <img src="/src/assets/FoodDrink.png" alt="Channel Logo" className="food-icon" />
              <div className="channel-description">
                <h2>Food & Drink</h2>
                <p className="subscription">Published on 14 Jan 2019</p>
                <p className="description">{showMore ? fullText : shortText}</p>
                <button
                  className="show-more"
                  onClick={() => setShowMore((prev) => !prev)}
                >
                  {showMore ? 'Show less' : 'Show more'}
                </button>
                <p className="subscription-mobile">245K subscribed</p>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe 2.3m</button>
            <button className="subscribe-btn-mobile">Subscribe</button>
          </div>
        </section>
      </main>
      <aside className="sidebar">
        <div className="next-header">
          <h3>Next</h3>
          <div className="autoplay" onClick={toggle}>
            <span>AUTOPLAY</span>
            <div className={`toggle-switch ${isAutoplay ? 'on' : 'off'}`}>
              <div className="dot" />
            </div>
          </div>
        </div>

        <Swiper
          direction="vertical"
          slidesPerView="auto"
          spaceBetween={23}
          className="swiper-container"
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide">
                <img className="video-thumb" src={video.img} alt={`Thumb ${i}`} />
                <span className="video-duration">8:00</span>
                <div className="video-info">
                  <span className="video-title">{video.title}</span>
                  <div className="video-meta-container">
                    <span className="video-meta">{video.views}</span>
                    <span className="video-author">{video.author}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
      <footer className="footer-container">
        <nav className="footer-menu">
          <ul className="menu-list">
            <li className="menu-item active">
              <a href="/">
                <img src="/src/assets/Home.svg" alt="Home Icon" />
                <span>Home</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/">
                <img src="/src/assets/Trending.svg" alt="Trending Icon" />
                <span>Trending</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/">
                <img src="/src/assets/Subscription.svg" alt="Subscriptions Icon" />
                <span>Subscriptions</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="/">
                <img src="/src/assets/Library.svg" alt="Library Icon" />
                <span>Library</span>
              </a>
            </li>
          </ul>
        </nav>
    </footer>
    </div>
  </body>   
  );
}
