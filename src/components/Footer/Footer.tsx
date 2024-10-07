import {FontIcon} from "../FontIcon/FontIcon.tsx";
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <FontIcon iconName={'cruelty_free'} size={'large'}/>
                <ul className={styles.footerSectionTwo}>
                    <li>Terminos y condiciones</li>
                    <li>Politica de Privacidad</li>
                    <li>Superintendencia</li>
                </ul>
                <p>© 2024 Fabian Andres Jerez Manrique</p>
            </div>
        </footer>
    )
}