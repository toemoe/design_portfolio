import SocialInst from "../../../assets/instagram.svg";
import SocialTg from "../../../assets/telegram.svg";
import { handleClickButton } from "../../../utils/openlinks.ts";

const SocialButtons = () => {
    return (
        <div className="SocialButtons">
            <button id="instbtn" className="SocialButton" onClick={() => handleClickButton("inst")}>
                <img src={SocialInst} alt="instagram" className="SocialIcon"/>
            </button>
            <button  id="tgbtn" className="SocialButton" onClick={() => handleClickButton("tg")}>
                <img src={SocialTg} alt="telegram" className="SocialIcon"/>
            </button>
        </div>
    );
}

export default SocialButtons;