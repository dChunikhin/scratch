import './role-switcher.css';

const RoleSwitcher = ({ role, onSwitch }) => {

    const roles = [
        {
            type: 'artist',
            title: 'Артист',
            active: false
        },
        {
            type: 'user',
            title: 'Пользователь',
            active: true
        }
    ];


    const handleRoleClick = (item) => {
        return () => {
            if (item.type !== role) {
                onSwitch(item.type);
            }
        }
    }

    const renderRolesItems = (role) => {
        return roles.map((item) => {
            return (
                <li key={item.type} className={`roles__item ${item.type === role ? 'roles__item--active' : ''}`} onClick={handleRoleClick(item)}>
                    {item.title}
                </li>
            )
        })
    }

    return (
        <div className={'role-switcher'}>
            <ul className={'role-switcher__roles roles'}>{renderRolesItems(role)}</ul>
        </div>
    )
}

export default RoleSwitcher;