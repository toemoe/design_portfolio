import "../styles/App.css";
import letter from "../assets/bg_text.jpg";

export default function AppForm() {
    return (
        <div className="ContentForm">
            <div className="withoutBtn">
                <div className="Form">
                    <h2 className="FormTitle">Get in Touch</h2>
                    <input className="FormInput" type="text" placeholder="Name" />
                    <input className="FormInput" type="text" placeholder="Email" />
                    <input className="FormInputMessage" type="text" placeholder="How can i help?" />
                </div>
                <button className="buttonForm">submit</button>
            </div>
            <img src={letter} alt="letter" className="bgLetter"/>
        </div>
    );
};