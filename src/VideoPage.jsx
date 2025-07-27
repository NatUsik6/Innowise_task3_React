
import './scss/header.scss';
import './scss/mixins.scss';
import './scss/common.scss';

export default function VideoPage() {


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
      </div>
    </header>
    <div class="layout">
      <main className="main">
        <section className="video-section">
          <div className="video-container">
            <div className='video'>
              <video ref={videoRef} src="video.mp4" />
              <div className="controls">
                <button onClick={togglePlay}>{isPlaying ? '❚❚' : '►'}</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={duration ? (currentTime / duration) * 100 : 0}
                  onChange={handleProgressChange}
                  ref={progressRef}
                />
                <span>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                <button onClick={handleFullscreen}>[ ]</button>
              </div>
            </div>
            <div className="video-header">
              <div className="video-text">
                <h1>Dude You Re Getting A Telescope</h1>
                <p>123k views</p>
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
              <img src="channel-logo.png" alt="Channel Logo" className="channel-logo" />
              <div className="channel-description">
                <h2>Food & Drink</h2>
                <p className="subscription">Published on 14 Jan 2019</p>
                <p className="description">
                  A successful marketing plan relies heavily on the pulling-power of advertising copy.
                  Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write perfect ad copy; it is based
                  on a number of factors, including ad placement, demographic, even the consumer's mood when
                  they see your ad.
                </p>
                <button className="show-more">Show more</button>
              </div>
            </div>
            <button className="subscribe-btn">Subscribe 2.3m</button>
          </div>
        </section>
        <aside className="sidebar">
          <div className="next-header">
            <h3>Next</h3>
            <div className="autoplay">
              <span>AUTOPLAY</span>
              <div className="dot"></div>
            </div>
          </div>
          <div className="video-list">
            {[1, 2, 3].map((i) => (
              <div className="video-item" key={i}>
                <img src={`./${i}.jpg`} alt={`Thumb ${i}`} />
                <div>
                  <p className="video-title">
                    {i === 1 ? 'Baby Monitor Technology' : i === 2 ? 'A Good Autoresponder' : 'Selecting The Right Hotel'}
                  </p>
                  <p className="meta">123k views</p>
                  <p className="meta">Dollie Blair</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  </body>   
  );
}
