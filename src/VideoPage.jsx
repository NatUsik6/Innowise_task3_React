
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

  </body>   
  );
}
