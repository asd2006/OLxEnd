import React from 'react';
import Container from '../../Untils/Containers/Container';
import "./Header.scss"
import { FiMessageCircle, FiHeart, FiUser } from "react-icons/fi";
import { Button } from '../../Untils/Components';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/OLX_blue_logo.svg/64px-OLX_blue_logo.svg.png?20210212152531" alt="" />
          <nav className='header__nav'>
            <ul className="header__list">
              <li>Uz</li>
              |
              <li>Ru</li>
            </ul>
            <button>
              <FiMessageCircle />
              Сообщения
            </button>
            <button>
              <FiHeart />
            </button>
            <button>
              <FiUser />
              Ваш профиль
            </button>
            
          </nav>
          <Button type={"light"} text="Подать обявления"/>
        </div>
      </Container>
    </header>
  );
}

export default Header;
