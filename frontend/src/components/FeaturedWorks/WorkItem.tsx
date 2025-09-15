interface FeaturedWorksProps {
    imageUrl: string;
    title: string;
    onClick: () => void;
}

const WorkItem: React.FC<FeaturedWorksProps> = ({ imageUrl, title, onClick }) => {
    return (
        <div className="workItem">
            <img src={imageUrl} alt={title} className="imageWork" onClick={onClick} />
            <p>{title}</p>
        </div>
    );
};

export default WorkItem;