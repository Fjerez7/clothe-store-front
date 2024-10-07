import {BannerInteractive} from "../BannerInteractive/BannerInteractive.tsx";
import shirt1 from "../../assets/T-shirt-white.jpg";
import shirt2 from "../../assets/tshirt.jpg";
import shirt3 from "../../assets/tshirtt.jpg";
import styles from './MiniBannerLayout.module.css';

export const MiniBannerLayout = () => {
    return (
        <div className={styles.bannerLayout}>
            <BannerInteractive img={shirt1} title={'1'}/>
            <BannerInteractive img={shirt2} title={'2'}/>
            <BannerInteractive img={shirt3} title={'3'}/>
        </div>
    )
}