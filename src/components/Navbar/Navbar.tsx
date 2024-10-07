import {FontIcon} from "../FontIcon/FontIcon.tsx";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarSectionOne}>
                <FontIcon iconName={'cruelty_free'} size={'large'}/>
            </div>
            <ul className={styles.navbarSectionTwo}>
                <li>Men's</li>
                <li>Women's</li>
                <li>Objects</li>
                <li>Contact</li>
                <li>Sale</li>
            </ul>
            <div className={styles.navbarSectionThree}>
                <FontIcon iconName={'account_circle'}/>
                <FontIcon iconName={'search'}/>
                <FontIcon iconName={'shopping_bag'}/>
            </div>
        </div>
    )
}