import React from "react";
import '../styles/App.css';
import selectedClothes from '../assets/selected_clothes.png';
import clothesSecond from '../assets/clothes_second.png';
import clothesThird from '../assets/Third.png';
import clothesFourth from '../assets/Fourth.png';
import coffeeShop from '../assets/coffeeShop.png';

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
        { imageUrl: selectedClothes, title: "Avantgarde Clothes" },
        { imageUrl: clothesSecond, title: "Clothes Design" },
        { imageUrl: coffeeShop, title: "Coffee Shop" },
        { imageUrl: clothesThird, title: "Clothes Shop v1" },
        { imageUrl: clothesFourth, title: "Clothes Shop v1" },
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