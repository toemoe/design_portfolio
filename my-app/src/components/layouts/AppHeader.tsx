import '../../styles/App.css';
import { scrollToElement } from './AppLanding';

export default function AppHeader() {

    return (
        <div className="Header">
            <button className="headerButton" onClick={() => scrollToElement('top')}>PORTFOLIO</button>
            <div className='SecondBlockButtons'>
                <button className='SelectedHeader' onClick={() => scrollToElement('selected')}>Selected Works</button>
                <button className='ProfileHeader' onClick={() => scrollToElement('aboutMe')}>About Me</button>
                <button className='ContactHeader' onClick={() => scrollToElement('contact')}>Contact</button>
            </div>
        </div>
    );
};