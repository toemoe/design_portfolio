import "../styles/App.css";
import avatar from "../assets/avatar.svg"
import flowers from "../assets/flowers.svg"

export default function AppProfile() {
    const handleClickGitHub = function() {
        window.location.href = "https://github.com/toemoe"
    };

    const handleClickBehance = function() {
        window.location.href = "https://www.behance.net/toemoe"
    };

    return (
        <div className="Profile">
            <img src={flowers} className="flowers" alt="flowers" />
            <img src={avatar} className="avatar" alt="avatar" />
            <div className="profileInfo">
                <h1 className="h1Profile">Who I am?</h1>
                <p className="DescriptionProfile">
                I am web designer, front-end developer.<br/>
                I have experience working with JavaScript,<br/>
                CSS/HTML, and SQL databases. I am also<br/>
                know React and TypeScript.<br/>
                I participate in the educational project<br/>
                School 21 from Sberbank.
                </p>

                <p className="forButton">More of my work:</p>
                <div className="ButtonClass">
                    <button className="buttonProfile" onClick={handleClickGitHub}>GitHub</button>
                    <button className="buttonProfile" onClick={handleClickBehance}>Behance</button>
                </div>
            </div>
        </div>
    );
};
