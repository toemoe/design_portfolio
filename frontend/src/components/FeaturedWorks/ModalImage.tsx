import { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    alt: string;
}

const ModalImage: React.FC<ModalProps> = ({ imageUrl, alt, isOpen, onClose }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => setIsZoomed(!isZoomed);
    const zoomLevel = isZoomed ? 1.3 : 1;
    if (!isOpen) return null;

    return (
        <div className='ModalOverlay' onClick={onClose}>
            <div className='ModalContent' onClick={e => e.stopPropagation()}>
                 <img src={imageUrl} alt={alt} className="modalImage"
                 onClick={handleImageClick} style={{ transform: `scale(${zoomLevel})`}}/>
            </div>
        </div>
    );
};

export default ModalImage;