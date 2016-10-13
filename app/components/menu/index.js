import React, {Component, PropTypes} from 'react';
import i18next from 'i18next';
import Animation from 'focus-components/animation';
import Button from 'focus-components/button';

const defaultButtonProps = {icon: 'link', shape: 'icon', type: 'button'};

const MenuSubPanel = ({menus, LinkComponent, onClose}) => {
    const style = { 'width': document.body.clientWidth }
    return (
        <div className='animate-menu' data-focus='menu-sub-panel' style={style} onClick={onClose}>
            <div>
                {menus.map((menu, idx) => (
                    <MenuItem key={idx} menu={menu} LinkComponent={LinkComponent} showLabels={true} />
                ))}
            </div>
        </div>
    );
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySubMenu: false
        };
    }
    _toggleSubMenuVisibility() {
        // const {showLabels, subMenuPosition} = this.props;
        // if(showLabels) {
        const {displaySubMenu} = this.state;
        this.setState({displaySubMenu: !displaySubMenu});
        // } else {
        // console.error("Impossible to use sub-menu with props showLabels=false");
        // }
    }
    render() {
        const {menu, LinkComponent, showLabels, subMenuPosition} = this.props;
        const {route, label, icon, subMenus} = menu;
        const {displaySubMenu} = this.state;
        const hasRoute = LinkComponent && route;
        const buttonProps = {...defaultButtonProps, label, icon: (!showLabels && icon === undefined ? 'link' : icon), shape: (showLabels ? null : 'icon')};
        const hasSubMenus = subMenus && subMenus.length > 0;
        if(hasSubMenus) {
            return (
                <li data-deployed={displaySubMenu}>
                    <Button {...buttonProps} onClick={::this._toggleSubMenuVisibility} />
                    {displaySubMenu && subMenuPosition === 'below' &&
                        <ul data-focus='menu-sub-items'>
                            {subMenus.map((menu, idx) => (
                                <MenuItem key={idx} menu={menu} LinkComponent={LinkComponent} showLabels={showLabels} />
                            ))}
                        </ul>
                    }
                    {displaySubMenu && subMenuPosition === 'aside' &&
                        <MenuSubPanel LinkComponent={LinkComponent} menus={subMenus}  onClose={::this._toggleSubMenuVisibility} />
                    }
                </li>
            );
        } else {
            return (
                <li>
                    {hasRoute && <LinkComponent to={route}><Button {...buttonProps} /></LinkComponent>}
                    {!hasRoute && <Button {...buttonProps} />}
                </li>
            );
        }
    }
};
MenuItem.displayName = 'MenuItem';
MenuItem.PropTypes = {
    LinkComponent: PropTypes.func,
    menu: PropTypes.object.isRequired,
    showLabels: PropTypes.bool.isRequired
};

const Menu = ({ children, handleBrandClick, menus, LinkComponent, showLabels, subMenuPosition }) => {
    const size = showLabels ? 'large' : 'small';
    return (
        <nav data-focus='menu-left2' data-size={size}>
            <div>
                <div data-focus='menu-brand' data-click={!!handleBrandClick} onClick={() => handleBrandClick && handleBrandClick()} />
                <ul data-focus='menu-items'>
                    {menus.map((menu, idx) => (
                        <MenuItem key={idx} menu={menu} LinkComponent={LinkComponent} showLabels={showLabels} subMenuPosition={subMenuPosition} />
                    ))}
                </ul>
                {children}
            </div>
        </nav>
    );
};
Menu.displayName = 'Menu';
Menu.propTypes = {
    handleBrandClick: PropTypes.func,
    LinkComponent: PropTypes.func.isRequired,
    menus: PropTypes.array.isRequired,
    subMenuPosition: PropTypes.oneOf(['aside', 'below']),
    showLabels: PropTypes.bool
};
Menu.defaultProps =  {
    menus: [],
    showLabels: false,
    subMenuPosition: 'aside'
};
export default Menu;
