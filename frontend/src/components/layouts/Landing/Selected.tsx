import ScrollApp from '../../FeaturedWorks/FeaturedWorks';

const Selected = () => {
    return (
        <div className="Selected" id='selected'>
            <div className="h2_imageForm">
                <h2 className="SelectedWork">Selected Work</h2>
            </div>
            <ScrollApp />
            <p className='DescriptionCard'>List of my web design projects.</p>
        </div>
    )
}

export default Selected;