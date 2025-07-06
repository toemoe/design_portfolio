import React from "react";
import '../styles/App.css';
import selectedClothes from '../assets/selected_clothes.png';
import clothesSecond from '../assets/clothes_second.png';
import clothesThird from '../assets/Third.png';
import clothesFourth from '../assets/Fourth.png';

interface FeaturedWorksProps {
    imageUrl: string;
    title: string;
}

const WorkItem: React.FC<FeaturedWorksProps> = ({ imageUrl, title }) => {
    return (
        <div className="workItem">
            <img src={imageUrl} alt={title} className="imageWork" />
            <p>{title}</p>
        </div>
    );
};

const ScrollApp: React.FC = () => {
    const works = [
        { imageUrl: selectedClothes, title: "Selected Clothes" },
        { imageUrl: clothesSecond, title: "Selected Second" },
        { imageUrl: clothesThird, title: "Selected Third" },
        { imageUrl: clothesFourth, title: "Selected Fourth" },

    ];

    return (
        <div className="scrollContainer">
            {works.map((work, index) => (
                <WorkItem key={index} imageUrl={work.imageUrl} title={work.title} />
            ))}
        </div>
    );
};

export default ScrollApp;