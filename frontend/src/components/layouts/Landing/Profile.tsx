import avatar from "../../../assets/avatar.svg"
import { handleClickButton } from "../../../utils/openlinks.ts";

const Profile = () => {
    return (
        <div className="Profile" id="aboutMe">
            <img src={avatar} className="avatar" alt="avatar" />
            <div className="profileInfo">
                <h1 className="h1Profile">Who I am?</h1>
                <p className="DescriptionProfile">
                I am web designer, front-end developer from Moscow<br/>
                I have experience working with TypeScript,<br/>
                CSS/SCSS, HTML.<br/>
                I participate in the educational project<br/>
                School 21 from Sberbank.
                </p>
                <p className="forButton">More of my work:</p>
                <div className="ButtonClass">
                    <button className="buttonProfile" onClick={() => handleClickButton("git")}>GitHub</button>
                    <button className="buttonProfile" onClick={() => handleClickButton("behance")}>Behance</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;