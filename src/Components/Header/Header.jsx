import React from 'react';
import "./Header.scss"
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button, Container } from '../../Untils/Components';
import { Link } from 'react-router-dom';
// import i18n from '../../Lenguage/i18next';
// import { useTranslation } from 'react-i18next';

const Header = () => {
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OLX_blue_logo.svg/64px-OLX_blue_logo.svg.png?20210212152531" alt="" />
          <nav className='header__nav'>
            <select onChange={handleChangeLanguage}>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <Link to="/message">
              <FiMessageCircle />
              Сообщения
            </Link>
            <button>
              <FiHeart />
            </button>
            <Link className='header__nav-link' to='/auth'>
              <FiUser />
              Ваш профиль
            </Link>
            <Button type={"light"} text="Подать обявления" />
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
