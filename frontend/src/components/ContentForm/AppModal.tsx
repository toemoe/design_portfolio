import React from 'react';

type AppModalProps = {
    onClose: () => void;
}

export default function AppModal({ onClose }: AppModalProps) {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).classList.contains('overlay')) {
            onClose();
        }
    };

    return (
        <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <p className="modal_text">Your request is accepted!</p>
                <p className="modal_text">I will contact you soon.</p>
                <button className='modal_button' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};