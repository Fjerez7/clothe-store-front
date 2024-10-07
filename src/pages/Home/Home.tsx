import {Banner} from "../../components/Banner/Banner.tsx";
import {MiniBannerLayout} from "../../components/MiniBannerLayout/MiniBannerLayout.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";


const Home = () => {
    return (
        <>
            <Banner/>
            <MiniBannerLayout/>
            <Footer/>
        </>
    );
}

export default Home;