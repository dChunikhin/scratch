import './App.css';
import { useState } from 'react';
import Menu from 'components/menu/menu';
import Content from "components/content/content";
import RoleSwitcher from "components/role-switcher/role-switcher";

const userMenuItems = [
    {
        to: '/profile',
        title: 'Моя страница'
    },
    {
        to: '/listen',
        title: 'Прослушивания и оценка песни (видео)'
    },
    {
        to: '/songs',
        title: 'Песни'
    },
    {
        to: '/artists',
        title: 'Артисты'
    },
    {
        to: '/subscriptions',
        title: 'Подписки'
    },
    {
        to: '/promo',
        title: 'Промоакции'
    },
    {
        to: '/tokens',
        title: 'Токены'
    },
    {
        to: '/settings',
        title: 'Настройки'
    },

]
const artistUniqMenuItems = [
    {
        to: '/my-songs',
        title: 'Мои песни',
    },
    {
        to: '/subscribers',
        title: 'Подписчики',
    },
    {
        to: '/donate',
        title: 'Донаты',
    },
]
const sections = [
    {
        to: '/concept',
        title: 'Общая концепция платформы'
    },
    {
        to: '/economic',
        title: 'Экономика платформы'
    },
    {
        to: '/analytic',
        title: 'Аналитика и продвижение песни'
    },
    {
        to: '/registration',
        title: 'Регистрация в системе'
    },
]

function App() {

    const [role, setRole] = useState('user');

    const isArtist = (role) => {
        return role === 'artist';
    }

    const [profileMenuItem, ...userItems] = userMenuItems;

    return (
        <div className="app">
            <div className="app__block">
                <Menu items={isArtist(role) ? [profileMenuItem, ...artistUniqMenuItems, ...userItems] : userMenuItems} modifier={'main'} />
                <Menu items={sections} />
            </div>
            <div className={'app__separator'}>
                <RoleSwitcher role={role} onSwitch={setRole} />
            </div>
            <div className="app__block">
                <Content isArtist={role === 'artist'} />
            </div>
        </div>
    );
}

export default App;
