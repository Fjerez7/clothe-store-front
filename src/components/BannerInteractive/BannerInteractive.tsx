import {FC} from "react";
import styles from "./BannerInteractive.module.css";

interface BannerInteractiveProps {
    img: string;
    title: string;
}

export const BannerInteractive:FC<BannerInteractiveProps> = ({img,title}) => {
    return(
        <>
            <div className={styles.bannerIContainer}>
                <img src={img} alt={title}/>
            </div>
        </>
    )
}