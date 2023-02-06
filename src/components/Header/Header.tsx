import styles from './Header.module.scss'
import logo from '../../images/logo192.png'
import search_icon from '../../icons/search.svg'
import {notification, setting} from '../../icons/icons'



function Header() {

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <img src={logo}/>
            </div>
            <div className={styles.title}>
                <h3>Aniview</h3>
            </div>
            <div className={styles.search}>
                <input placeholder="검색어를 입력하세요"></input>
                <div className={styles.search_icon}>
                    <img src={search_icon}/>
                </div>
            </div>
            <div className={styles.username}>
                <h4>taehyeungkim98</h4>
            </div>
            <div className={styles.icon} id={'icon-notification'}>
                {notification()}
            </div>
            <div className={styles.icon} id={'setting'}>
                {setting()}
            </div>
        </nav>
    )
}

export default Header