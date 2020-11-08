import './menu.css';
import {NavLink} from "react-router-dom";

const Menu = ({ items = [], modifier = '' }) => {

    const renderMenuItems = (extraItems) => {
        return extraItems.map((link) => {
            return (
                <li className={'menu__item'} key={link.to}>
                    <NavLink to={link.to} className={'menu__link'} activeClassName={'menu__link--active'}>{link.title}</NavLink>
                </li>
            )
        })
    }

    return (
        <ul className={`menu ${modifier ? `menu--${modifier}` : ''}`}>
            { items.length ? renderMenuItems(items) : null }
        </ul>
    )
};

export default Menu;

/*
Моя страница
Прослушивание и оценка
Песни
Артисты
Подписки (счетчик новых событий с последнего посещения)
Промо акции
Токены (+ счетчик новых транзакций с последнего посещения)
Настройки
 */