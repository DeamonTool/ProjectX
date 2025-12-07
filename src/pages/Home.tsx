import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <div className="logo">Coin Wheel</div>
          <div className="header-controls">
            <select className="lang-select">
              <option>RU</option>
              <option>EN</option>
            </select>
            <button className="theme-toggle">☀️/🌙/Родная</button>
          </div>
        </div>
      </header>

      {/* PROFILE */}
      <section className="profile">
        <div className="profile-columns">
          <div className="profile-left">
            <div className="balance-values">
              <p className="fiat">$913.53</p>
              <p className="crypto">BTC 0.01</p>
            </div>
            <button className="change-currency">✎</button>
          </div>

          <div className="profile-right">
            <div className="profile-avatar">Аватар</div>
            <p className="nickname">Никнейм ✎</p>
            <p className="id">#ID</p>
          </div>
        </div>

        <div className="profile-buttons">
          <button>Пополнить</button>
          <button>Вывести</button>
          <button>История</button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stats-columns">
          <div className="stat-item">
            <span className="value">72</span>
            <span className="label">🏆 Победы</span>
          </div>
          <div className="stat-item">
            <span className="value">49%</span>
            <span className="label">📊 WinRate</span>
          </div>
          <div className="stat-item">
            <span className="value">145</span>
            <span className="label">🎲 Игры</span>
          </div>
        </div>
      </section>

      {/* GAME MODE */}
      <section className="game-mode">
        <div className="game-options">
          <button className="option-btn">1 победитель</button>
          <button className="option-btn">3 победителя</button>
        </div>
        <div className="bet-limits">
          <button className="option-btn">До $10</button>
          <button className="option-btn">До $100</button>
          <button className="option-btn">До $1000</button>
          <button className="option-btn">Безлимит</button>
        </div>
        <button className="find-room">Найти комнату</button>
      </section>

      {/* ONLINE ACTIVITY */}
      <section className="online-activity">
        <p>🟢 Сейчас играет: 1488 игроков</p>
        <p>🏆 Выигрыш дня: Strelok-SV $228/25%</p>
        <p>💎 Выигрыш за всё время: Strelok-SV $41500/80%</p>
        <p>🎉 Последние 20 победителей:</p>
        <div className="recent-winners">
          <p>Strelok-SV $320/20% | Strelok-SV $91/4% | Strelok-SV $111/8% | ...</p>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support">
        <button>Поддержка</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>This game involves risk. Play responsibly.</p>
        <p>Provably Fair ⓘ v0.1 Alpha © 2025 Coin Wheel</p>
      </footer>
    </div>
  );
};

export default Home;