import "../styles/App.css";
import SocialInst from "../assets/instagram.svg";
import SocialTg from "../assets/telegram.svg";

export default function AppFooter() {
    const handleClickInst = function() {
        window.open("https://www.instagram.com/t0eoo/", "_blank");
    };

    const handleClickTg = function() {
        window.open("https://t.me/scgod", "_blank");
    }

    return (
        <div className="Footer">
            <h3 className="FooterTitle">Follow me</h3>
            <div className="SocialButtons">
                <button className="SocialButton" onClick={handleClickInst}>
                    <img src={SocialInst} alt="instagram" className="SocialIcon"/>
                </button>
                <button className="SocialButton" onClick={handleClickTg}>
                    <img src={SocialTg} alt="telegram" className="SocialIcon"/>
                </button>
            </div>
        </div>
    );
};