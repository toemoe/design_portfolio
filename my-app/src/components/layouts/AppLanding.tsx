import '../../styles/App.css';
import avatar from "../../assets/avatar.svg"
import letter from "../../assets/bg_text.jpg";
import React, { useState } from "react";
import AppModal from "../AppModal";
import ScrollApp from '../FeaturedWorks';


export const scrollToElement = (elementId: string) => {
    const elem = document.getElementById(elementId);
    elem?.scrollIntoView({ behavior: 'smooth' });
};

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
        <div className='Landing' id='top'>
            <h1 className='Name'>Sergei Zan</h1>
            <p className='Description'>
                I am currently actively pursuing
                my career as a programmer and designer.  
            </p>
        </div>
        <div className="Selected" id='selected'>
            <div className="h2_imageForm">
                <h2 className="SelectedWork">Selected Work</h2>
            </div>
            <ScrollApp />
            <p className='DescriptionCard'>List of my web design projects.</p>
        </div>
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
                    <button className="buttonProfile" onClick={handleClickGitHub}>GitHub</button>
                    <button className="buttonProfile" onClick={handleClickBehance}>Behance</button>
                </div>
            </div>
        </div>
        <div className="ContentForm" id='contact'>
                <div className="Form" onSubmit={handleSubmit}>
                    <div className='descriptionForm'>
                    <h2 className="FormTitle">Get in Touch</h2>
                    <p>Currently, I am open to work in the field of web design, frontend development.</p>
                    </div>
                    <div className='inputFormContainer'>
                        <input className="FormInput" type="text" placeholder="Name" value={name} onChange={(e) => SetName(e.target.value)} />
                        {nameError && <p style={{ color: 'white', margin: '0rem' }} className="emailError">{nameError}</p>}
                        <input className="FormInput" type="text" placeholder="Email" value={email} onChange={(e) => SetEmail(e.target.value)} />
                        {emailError && <p style={{ color: 'white', margin: '0rem' }} className="emailError">{emailError}</p>}
                        <input className="FormInputMessage" type="text" placeholder="How can i help?" />
                        <button className="buttonForm" onClick={handleSubmit}>submit</button>
                    </div>
                </div>

            {showModal && <AppModal onClose={closeModal} />}
        </div>
        </>
    );
};