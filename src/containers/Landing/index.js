import AboutUs from "../../components/AboutUs";
import HeroLayout from "../../components/Hero";
import KoakumaBox from "../../components/layouts/KoakumaBox";
import Media from "../../components/Media";
import Videobar from "../../components/Videobar";
import Team from "../../components/Team";
import Contact from "../../components/Contact";
import News from "../../components/News";

const Landing = () => {
    return (
        <KoakumaBox>
            <Videobar />
            <AboutUs />
            <HeroLayout />
            <Media />
            <Team />
            <News />
            <Contact />
        </KoakumaBox>
    )
}

export default Landing;