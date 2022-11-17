import logo from '../images/logo.svg';

function Header({ children }) {

    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="лого Mesto" />
            <ul className='header__links'>
                {children}
            </ul>
        </header>
    )
}
export default Header;