import { useState } from "react";
import AppModal from "../../AppModal";

const ContentForm = () => {
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

    return (
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
    )
}

export default ContentForm;