import React, { useState } from 'react';
import '../../styles/App.css';
import { scrollToElement } from './AppLanding';
import buttonMobile from '../../assets/buttonMobile.svg';

const AppHeader: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="Header">
            <button className="headerButton" onClick={() => scrollToElement('top')}>PORTFOLIO</button>
            <div className='SecondBlockButtons'>
                <button className='SelectedHeader' onClick={() => scrollToElement('selected')}>Selected Works</button>
                <button className='ProfileHeader' onClick={() => scrollToElement('aboutMe')}>About Me</button>
                <button className='ContactHeader' onClick={() => scrollToElement('contact')}>Contact</button>
            </div>
                <img src={buttonMobile} alt='mobileButton' className='buttonMobile' onClick={handleButtonClick} />
                <div className={`expandedMenu ${isExpanded ? 'expanded' : ''}`}>
                <button className='SelectedHeaderM' onClick={() => scrollToElement('selected')}>Selected Works</button>
                <button className='ProfileHeaderM' onClick={() => scrollToElement('aboutMe')}>About Me</button>
                <button className='ContactHeaderM' onClick={() => scrollToElement('contact')}>Contact</button>
                </div>
        </div>
    );
};

export default AppHeader;