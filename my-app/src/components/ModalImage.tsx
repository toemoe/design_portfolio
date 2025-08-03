import '../styles/App.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    alt: string;
}

const ModalImage: React.FC<ModalProps> = ({ imageUrl, alt, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='ModalOverlay' onClick={onClose}>
                 <img src={imageUrl} alt={alt} className="modalImage" onClick={e => e.stopPropagation()}/>
        </div>
    );
};

export default ModalImage;