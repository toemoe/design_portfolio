import "../styles/App.css";
import selectedClothes from '../assets/selected_clothes.png';
import clothesSecond from '../assets/clothes_second.png';

export default function AppSelected() {
    return (
        <div className="Selected">
        <h2 className="SelectedWork">Selected Work</h2>
        <div className="Works">
            <img src={selectedClothes} alt="Selected Clothes" className="SelectedCard" />
            <img src={clothesSecond} alt="Selected Clothes" className="SelectedCardSecond" />
        </div>
        <p className='DescriptionCard'>My clothing website design projects.</p>
        </div>
    );
};