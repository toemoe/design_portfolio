import '../../styles/App.css';
import avatar from "../../assets/avatar.svg"
import letter from "../../assets/bg_text.jpg";
import textImage1 from "../../assets/text_bg1.jpg";
import React, { useState } from "react";
import AppModal from "../AppModal";
import ScrollApp from '../FeaturedWorks';


export default function AppLanding() {
    const [name, SetName] = useState('');
    const [email, SetEmail] = useState('');
    const [showModal, setModal] = useState(false);
    const [nameError, setTextError] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = function() {
        let valid = true;

        if (name.trim() === '') {
            valid = false;
            setTextError('Please enter your name.');
        } else {
            setTextError('');
        }

        if (!emailPattern.test(email)) {
            valid = false;
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }

        return valid;
    };

    const handleSubmit = function(e: React.FormEvent) {
        e.preventDefault();
        if (validateForm()) {
            setModal(true);
        }
    }

    const closeModal = function() {
        setModal(false);
    }

    const handleClickGitHub = function() {
        window.location.href = "https://github.com/toemoe"
    };

    const handleClickBehance = function() {
        window.location.href = "https://www.behance.net/toemoe"
    };

    return (
        <>
        <div className='Landing'>
            <h1 className='Name'>Sergei Zan</h1>
            <p className='Description'>
                I am currently actively pursuing
                my career as a programmer and designer.  
            </p>
        </div>
        <div className="Selected">
            <div className="h2_imageForm">
                <h2 className="SelectedWork">Selected Work</h2>
                <img src={textImage1} alt="textImage1" className="textImage1"/>
            </div>
            <ScrollApp />
            <p className='DescriptionCard'>My clothing website design projects.</p>
        </div>
        <div className="Profile">
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
        <div className="ContentForm">
            <div className="withoutBtn">
                <div className="Form" onSubmit={handleSubmit}>
                    <h2 className="FormTitle">Get in Touch</h2>
                    <input className="FormInput" type="text" placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)} />
                    {nameError && <p style={{ color: 'white', margin: '0rem' }} className="emailError">{nameError}</p>}
                    <input className="FormInput" type="text" placeholder="Email" value={email} onChange={(e) => SetEmail(e.target.value)} />
                    {emailError && <p style={{ color: 'white', margin: '0rem' }} className="emailError">{emailError}</p>}
                    <input className="FormInputMessage" type="text" placeholder="How can i help?" />
                </div>
                <button className="buttonForm" onClick={handleSubmit}>submit</button>
            </div>
            <img src={letter} alt="letter" className="bgLetter"/>

            {showModal && <AppModal onClose={closeModal} />}
        </div>
        </>
    );
};