import {Link} from "react-router-dom";
import './DirectoryItem.styles.scss';

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category;
    return (
        <div className='directory-item-container'>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <Link to={`/shop/${title}`} className='directory-item-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Link>
        </div>
    );
};

export default DirectoryItem;
