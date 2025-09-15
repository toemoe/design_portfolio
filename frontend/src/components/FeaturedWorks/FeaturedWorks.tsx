import React, { useState } from "react";
import ModalImage from "./ModalImage";
import WorkItem from "./WorkItem";
import selectedClothes from '../../assets/selected_clothes.png';
import clothesSecond from '../../assets/clothes_second.png';
import clothesThird from '../../assets/Third.png';
import clothesFourth from '../../assets/Fourth.png';
import coffeeShop from '../../assets/coffeeShop.png';


const ScrollApp: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{imageUrl: string, alt: string} | null>(null);

    const openModal = (imageUrl: string, alt: string) => {
        setSelectedImage({ imageUrl, alt });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

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
                <WorkItem key={index} imageUrl={work.imageUrl} title={work.title} onClick={() => openModal(work.imageUrl, work.title)}/>
            ))}
            <ModalImage isOpen={isModalOpen} onClose={closeModal} imageUrl={selectedImage?.imageUrl || ''} alt={selectedImage?.alt || ''} />
        </div>
    );
};

export default ScrollApp;