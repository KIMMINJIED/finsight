import headerStyles from './Header.module.css';
import logo from '../assets/logo.svg';

export default function Header() {
    return (
        <header className={headerStyles.headerWrapper}>
            <div className={headerStyles.headerBackground}></div>
            <div className={headerStyles.headerLogo}>
                <img src={logo} alt='logo' className={headerStyles.logoImg} />
            </div>
            <div className={headerStyles.headerAuthGroup}>
                <span className={headerStyles.btnSignup}>회원가입</span>
                <span className={headerStyles.authDivider}></span>
                <span className={headerStyles.btnLogin}>로그인</span>
            </div>
        </header>
    );
}
