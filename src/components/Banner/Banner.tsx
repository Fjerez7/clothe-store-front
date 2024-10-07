import BannerHome from '../../assets/banner.jpg'
import styles from './Banner.module.css'

export const Banner = () => {
    return(
        <figure className={styles.bannerContainer}>
            <img src={BannerHome} className={styles.banner} alt="Banner home"/>
        </figure>
    )
}